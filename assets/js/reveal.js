// FUNÇÃO PARA ANIMAÇÃO
ScrollReveal ({
    reset: true,
    distance: "60px",
    duration: 2500
})

// ELEMENTOS PARA ANIMAÇÃO
ScrollReveal().reveal(".main-title, .section-title", {delay: 500, origin: "left"})
ScrollReveal().reveal(".main .image, .section-01 .text-box", {delay: 600, origin: "bottom"})
ScrollReveal().reveal(".main .text-box", {delay: 700, origin: "right"})
ScrollReveal().reveal(".main .media-icons i", {delay: 500, origin: "bottom", interval: 200})
ScrollReveal().reveal(".section-01 .image, .section-02 .image", {delay: 500, origin: "top"})
ScrollReveal().reveal(".section-02 .media-info li", {delay: 500, origin: "left", interval: 200})