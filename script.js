const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let selected = "circle-1";
// click event for next btn
nextBtn.addEventListener("click", (e) => {
  if (selected) {
    const currentCircle = selected;
    const circElement = document.getElementById(currentCircle);
    const lineElement = circElement.nextElementSibling;
    const nextCircle = lineElement.nextElementSibling;

    if (nextCircle) {
      lineElement.classList.toggle("active");
      nextCircle.classList.toggle("active");
      selected = nextCircle.id;
      prevBtn.disabled = false;
    }
    if (!nextCircle.nextElementSibling) {
      nextBtn.disabled = true;
    }
  }
});

// click event for prev btn
prevBtn.addEventListener("click", (e) => {
  const currentCircle = selected;
  const circElement = document.getElementById(currentCircle);
  const lineElement = circElement.previousElementSibling;
  const prevCircle = lineElement.previousElementSibling;
  if (prevCircle) {
    lineElement.classList.toggle("active");
    selected = prevCircle.id;

    circElement.classList.toggle("active");
    nextBtn.disabled = false;
  }
  if (prevCircle.id === "circle-1") {
    prevBtn.disabled = true;
  }
});
