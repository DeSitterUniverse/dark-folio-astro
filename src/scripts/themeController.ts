export type ThemeName = "galaxy" | "dark";
export type TextTone = "default" | "warm";

export const THEME_CHANGE_EVENT = "portfolio:theme-change";
const GALAXY_FIZZLE_COMPLETE_EVENT = "galaxy:fizzle-complete";

let pendingTarget: EventTarget | undefined;
let pendingListener: EventListener | undefined;
let pendingFallback: ReturnType<typeof setTimeout> | undefined;

const cancelPendingCommit = () => {
  if (pendingTarget && pendingListener) {
    pendingTarget.removeEventListener(GALAXY_FIZZLE_COMPLETE_EVENT, pendingListener);
  }
  if (pendingFallback) clearTimeout(pendingFallback);
  pendingTarget = undefined;
  pendingListener = undefined;
  pendingFallback = undefined;
};

export const getActiveTheme = (documentRef: Document = document): ThemeName =>
  documentRef.documentElement.dataset.theme === "dark" ? "dark" : "galaxy";

const updateThemeButtons = (theme: ThemeName, documentRef: Document) => {
  documentRef.querySelectorAll<HTMLElement>("[data-theme-option]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.themeOption === theme));
  });
};

const commitTheme = (theme: ThemeName, documentRef: Document) => {
  documentRef.documentElement.dataset.theme = theme;
  delete documentRef.documentElement.dataset.pendingTheme;
  documentRef
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "galaxy" ? "#000000" : "#121018");
};

export const applyTheme = (
  theme: ThemeName,
  documentRef: Document = document,
  eventTarget: EventTarget = window,
) => {
  cancelPendingCommit();
  const currentTheme = getActiveTheme(documentRef);
  updateThemeButtons(theme, documentRef);

  if (theme === "dark" && currentTheme === "galaxy") {
    documentRef.documentElement.dataset.pendingTheme = "dark";
    const finish = () => {
      cancelPendingCommit();
      commitTheme("dark", documentRef);
    };
    pendingTarget = eventTarget;
    pendingListener = ((event: Event) => {
      if (!(event as CustomEvent<{ visible: boolean }>).detail.visible) finish();
    }) as EventListener;
    eventTarget.addEventListener(GALAXY_FIZZLE_COMPLETE_EVENT, pendingListener);
    pendingFallback = setTimeout(finish, 500);
  } else {
    commitTheme(theme, documentRef);
  }

  eventTarget.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { theme } }));
};

export const applyTextTone = (
  tone: TextTone,
  documentRef: Document = document,
) => {
  documentRef.documentElement.dataset.textTone = tone;
  try {
    documentRef.defaultView?.sessionStorage.setItem("portfolio-text-tone", tone);
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }
  documentRef.querySelectorAll<HTMLElement>("[data-text-tone]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.textTone === tone));
  });
};

export const initializeThemeController = (
  documentRef: Document = document,
  eventTarget: EventTarget = window,
) => {
  const themeButtons = Array.from(documentRef.querySelectorAll<HTMLElement>("[data-theme-option]"));
  const toneButtons = Array.from(documentRef.querySelectorAll<HTMLElement>("[data-text-tone]"));

  const onThemeClick = (event: Event) => {
    const theme = (event.currentTarget as HTMLElement).dataset.themeOption;
    if (theme === "galaxy" || theme === "dark") applyTheme(theme, documentRef, eventTarget);
  };
  const onToneClick = (event: Event) => {
    const tone = (event.currentTarget as HTMLElement).dataset.textTone;
    if (tone === "default" || tone === "warm") applyTextTone(tone, documentRef);
  };

  themeButtons.forEach((button) => button.addEventListener("click", onThemeClick));
  toneButtons.forEach((button) => button.addEventListener("click", onToneClick));
  applyTheme(getActiveTheme(documentRef), documentRef, eventTarget);
  applyTextTone(
    documentRef.documentElement.dataset.textTone === "warm" ? "warm" : "default",
    documentRef,
  );

  return () => {
    cancelPendingCommit();
    themeButtons.forEach((button) => button.removeEventListener("click", onThemeClick));
    toneButtons.forEach((button) => button.removeEventListener("click", onToneClick));
  };
};
