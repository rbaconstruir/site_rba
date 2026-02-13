// ---------------- MENU RADIAL ----------------
const menuBtn = document.getElementById("menuBtn");
const radial = document.getElementById("radial");

// Menu radial só aparece fora do hero
window.addEventListener("scroll", () => {
    const heroHeight = document.querySelector(".hero").offsetHeight;

    // Menu radial
    if (window.scrollY > heroHeight) {
        menuBtn.style.opacity = 0.5;
        menuBtn.style.pointerEvents = "auto";
    } else {
        menuBtn.style.opacity = 0;
        menuBtn.style.pointerEvents = "none";
        radial.classList.remove("active");
        hideOverlay();
    }

    // Offcanvas trigger
    offcanvasBtn.style.opacity = window.scrollY > heroHeight ? 0.5 : 0;
});

// Toggle radial
menuBtn.addEventListener("click", () => {
    radial.classList.toggle("active");
    radial.classList.contains("active") ? showOverlay() : hideOverlay();
});

// ------------------------- WORDS ANIMATION -------------------------

document.addEventListener("DOMContentLoaded", () => {
    const { animate, splitText, stagger } = anime;

    const target = document.querySelector(".hero-split");
    if (!target) return;

    const { words } = splitText(target, {
        words: { wrap: "clip" },
    });

    animate(words, {
        y: [{ to: ["100%", "0%"] }, { to: "0%", delay: 2500, ease: "in(3)" }],
        duration: 1000,
        ease: "out(3)",
        delay: stagger(100),
        loop: true,
    });
});
