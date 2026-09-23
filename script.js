// ===============================
// RESEARCH HUB SEARCH
// ===============================

const searchInput = document.querySelector(".search-box input");
const researchCards = document.querySelectorAll(".research-card");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase();

        researchCards.forEach(card => {

            const cardText = card.innerText.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}
// ===============================
// RESEARCH FILTERS
// ===============================

const filterButtons = document.querySelectorAll(".filters button");

if (filterButtons.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const filter = this.innerText.toLowerCase();

            researchCards.forEach(card => {

                const category = card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

}
// ===============================
// POLICY LAB
// ===============================

const sliders = document.querySelectorAll(".control-group input");

if (sliders.length > 0) {

    sliders.forEach(slider => {

        slider.addEventListener("input", function () {

            const valueDisplay =
                this.parentElement.querySelector(".control-title span");

            valueDisplay.innerText = this.value + "%";

        });

    });

}
const simulationButton =
    document.querySelector(".simulation-btn");

if (simulationButton) {

    simulationButton.addEventListener("click", function () {

        this.innerText = "Simulation Running...";

        setTimeout(() => {

            this.innerText = "Simulation Complete ✓";

        }, 1200);

    });

}