const submitBtn = document.querySelector(".submitBtn");
const stringInput = document.querySelector(".stringInput");
const answerDisplay = document.querySelector(".answer");
const reset = document.querySelector(".reset");

submitBtn.addEventListener("click", () => {
  const userString = stringInput.value;

  if (userString === "" || userString === " ") return;

  const result = userString.split("").reverse().join("").toLowerCase();

  if (result) {
    const answer = document.createElement("div");
    answerDisplay.appendChild(answer);
    answer.innerHTML = `"${userString}" written backwards, with everything in lowercase, is "${result}"`;
  }
});

reset.addEventListener("click", () => {
  stringInput.value = "";
  answerDisplay.removeChild(answerDisplay.firstChild);
});
