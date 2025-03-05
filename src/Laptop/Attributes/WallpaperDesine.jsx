import React, { useEffect } from "react";
import "./background.css"; // Import the CSS file

const BUBBLE_COUNT = 50;

const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const WallpaperDesine = () => {
  useEffect(() => {
    const bubblesContainer = document.querySelector(".bubbles");

    for (let i = 0; i < BUBBLE_COUNT; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Assign random properties using CSS variables
      bubble.style.setProperty("--bubble-left-offset", `${generateRandom(0, 100)}vw`);
      bubble.style.setProperty("--bubble-radius", `${generateRandom(1, 10)}vw`);
      bubble.style.setProperty("--bubble-float-duration", `${generateRandom(6, 12)}s`);
      bubble.style.setProperty("--bubble-sway-duration", `${generateRandom(4, 6)}s`);
      bubble.style.setProperty("--bubble-float-delay", `${generateRandom(0, 4)}s`);
      bubble.style.setProperty("--bubble-sway-delay", `${generateRandom(0, 4)}s`);
      bubble.style.setProperty(
        "--bubble-sway-type",
        Math.random() > 0.5 ? "sway-left-to-right" : "sway-right-to-left"
      );

      bubblesContainer.appendChild(bubble);
    }
  }, []);

  return <div className="bubbles"></div>;
};

export default WallpaperDesine;
