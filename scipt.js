
// =========================
// HERO SCAN ANIMATION
// =========================

window.addEventListener("DOMContentLoaded", () => {

    const heroName = document.getElementById("heroName");

    setTimeout(() => {
        heroName.classList.add("scanned");
    }, 150);


    // =========================
    // CURRENT YEAR
    // =========================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =========================
    // SMOOTH NAVIGATION
    // =========================

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});

