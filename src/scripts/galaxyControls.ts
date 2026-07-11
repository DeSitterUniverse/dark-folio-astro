// 1. Tell TypeScript that the custom variable exists on the Window object
declare global {
  interface Window {
    galaxyIsPaused?: boolean;
  }
}

// 2. Declare state on the global window object so it survives any page navigation
if (typeof window !== "undefined" && typeof window.galaxyIsPaused === "undefined") {
  window.galaxyIsPaused = false;
}

const renderPauseState = () => {
  const iconPause = document.getElementById("icon-pause");
  const iconPlay = document.getElementById("icon-play");
  iconPause?.classList.toggle("hidden", Boolean(window.galaxyIsPaused));
  iconPlay?.classList.toggle("hidden", !window.galaxyIsPaused);
};

export const setGalaxyPaused = (paused: boolean) => {
  window.galaxyIsPaused = paused;
  renderPauseState();
  window.dispatchEvent(
    new CustomEvent("galaxy:pause", { detail: { paused } }),
  );
};

// 2. Define the function that wires up the buttons and slider
export const initGalaxyControls = () => {
  if (typeof document === "undefined") return;

  const btn = document.getElementById("galaxy-pause-btn");
  const slider = document.getElementById(
    "galaxy-stars-slider"
  ) as HTMLInputElement;
  const sliderVal = document.getElementById("galaxy-stars-value");

  // PAUSE BUTTON LOGIC
  // Check for 'data-loaded' to prevent attaching the click event twice
  if (btn && !btn.hasAttribute("data-loaded")) {
    btn.setAttribute("data-loaded", "true");

    renderPauseState();

    btn.addEventListener("click", () => {
      setGalaxyPaused(!window.galaxyIsPaused);
    });
  }

  // SLIDER LOGIC
  if (slider && !slider.hasAttribute("data-loaded")) {
    slider.setAttribute("data-loaded", "true");

    // MOBILE SYNC: Update the UI to match the engine's mobile default
    const isMobile = window.innerWidth < 768;
    const initialWidth = isMobile ? 32 : 72;

    slider.value = initialWidth.toString();
    if (sliderVal) sliderVal.textContent = `${initialWidth}x${initialWidth}`;

    // 'input' fires instantly while dragging (updates the text)
    slider.addEventListener("input", (e) => {
      const val = (e.target as HTMLInputElement).value;
      if (sliderVal) sliderVal.textContent = `${val}x${val}`;
    });

    // 'change' fires ONLY when the mouse is released (sends data to the GPU)
    slider.addEventListener("change", (e) => {
      const val = parseInt((e.target as HTMLInputElement).value, 10);
      window.dispatchEvent(
        new CustomEvent("galaxy:resize", { detail: { textureWidth: val } })
      );
    });
  }

  // RADIUS SLIDER LOGIC
  const radiusSlider = document.getElementById(
    "galaxy-radius-slider"
  ) as HTMLInputElement;
  const radiusVal = document.getElementById("galaxy-radius-value");

  if (radiusSlider && !radiusSlider.hasAttribute("data-loaded")) {
    radiusSlider.setAttribute("data-loaded", "true");
    radiusSlider.addEventListener("input", (e) => {
      if (radiusVal)
        radiusVal.textContent = (e.target as HTMLInputElement).value;
    });
    radiusSlider.addEventListener("change", (e) => {
      const val = parseInt((e.target as HTMLInputElement).value, 10);
      window.dispatchEvent(
        new CustomEvent("galaxy:radius", { detail: { radius: val } })
      );
    });
  }

  // OFFSET SLIDER LOGIC
  const offsetSlider = document.getElementById(
    "galaxy-offset-slider"
  ) as HTMLInputElement;
  const offsetVal = document.getElementById("galaxy-offset-value");

  if (offsetSlider && !offsetSlider.hasAttribute("data-loaded")) {
    offsetSlider.setAttribute("data-loaded", "true");
    offsetSlider.addEventListener("input", (e) => {
      if (offsetVal)
        offsetVal.textContent = (e.target as HTMLInputElement).value;
    });
    offsetSlider.addEventListener("change", (e) => {
      const val = parseInt((e.target as HTMLInputElement).value, 10);
      window.dispatchEvent(
        new CustomEvent("galaxy:offset", { detail: { offset: val } })
      );
    });
  }
};
