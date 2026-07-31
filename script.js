document.addEventListener("DOMContentLoaded", () => {

    const card = document.querySelector(".card");

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;

        card.style.transform = `
            rotateY(${x}deg)
            rotateX(${-y}deg)
        `;

    });

    document.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

});
