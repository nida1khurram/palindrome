const inputText = document.getElementById("input-text") as HTMLInputElement;
const checkBtn = document.getElementById("check-btn") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

checkBtn.addEventListener("click", () => {
  const input = inputText.value.trim().toLowerCase();
  const reversed = input.split("").reverse().join("");

  if (input === reversed) {
    resultDiv.innerText = "Yes, it's a palindrome!";
  } else {
    resultDiv.innerText = "No, it's not a palindrome.";
  }
});
