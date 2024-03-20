const carousel = document.querySelector(".carousel");

let isDrangging = false;

const dragStart = () => {
    isDrangging = true;
    carousel.classList.add("dragging");
}

const dragging = (e) => {
    if(!isDrangging) return;
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);