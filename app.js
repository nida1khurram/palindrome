var inputText = document.getElementById("input-text");
var checkBtn = document.getElementById("check-btn");
var resultDiv = document.getElementById("result");
checkBtn.addEventListener("click", function () {
    var input = inputText.value.trim().toLowerCase();
    var reversed = input.split("").reverse().join("");
    if (input === reversed) {
        resultDiv.innerText = "Yes, it's a palindrome!";
    }
    else {
        resultDiv.innerText = "No, it's not a palindrome.";
    }
});
