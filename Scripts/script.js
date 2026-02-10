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