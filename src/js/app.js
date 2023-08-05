document.querySelector(".card-advice__button").addEventListener("click", () => {
  getRandomAdvice();
});

async function createRandomAdvice() {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  return await response.json();
}

async function getTheAdvice(slip_id) {
  const url = `https://api.adviceslip.com/advice/${slip_id}`;
  const response = await fetch(url);
  return await response.json();
}

async function getRandomAdvice() {
  const advice = await createRandomAdvice();
  const slipAdvice = await getTheAdvice(advice.slip.id);
  const textSlipAdvice = await slipAdvice.slip.advice;
  document.getElementById("advice").textContent = textSlipAdvice;
  document.getElementById("advice-number").textContent = advice.slip.id;
}
getRandomAdvice();
