const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".testimonial-card");

let index = 1;

function getCardWidth() {
  return cards[0].offsetWidth + 25;
}

function centerCard() {
  const wrapperWidth = document.querySelector(".carousel-wrapper").offsetWidth;
  const cardWidth = getCardWidth();

  const offset =
    wrapperWidth / 2 - cardWidth / 2 - cardWidth * index + 22;

  carousel.style.transform = `translateX(${offset}px)`;
}

function updateActive() {
  cards.forEach((card) => card.classList.remove("active"));
  cards[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
  if (index < cards.length - 1) {
    index++;
    centerCard();
    updateActive();
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (index > 0) {
    index--;
    centerCard();
    updateActive();
  }
});

window.addEventListener("resize", centerCard);

centerCard();
updateActive();