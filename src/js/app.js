document.querySelector(".card-advice__button").addEventListener("click", () => {
  setRandomAdvice();
});

async function getRandomAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  return await response.json();
}

async function setRandomAdvice() {
  const adviceData = await getRandomAdvice();
  document.getElementById("advice").textContent = adviceData.slip.advice;
  document.getElementById("advice-number").textContent = adviceData.slip.id;
}

setRandomAdvice();
