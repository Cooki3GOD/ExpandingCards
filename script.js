const cards = document.querySelectorAll(".card");

function collapse() {
    cards.forEach((card) => {
        card.classList.remove("active");
    })
}

function expand() {
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            collapse(); 
            card.classList.add("active")
        })
    })
}

expand();