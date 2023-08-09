//UI Logic

function getUserInput() {
    const userInput = document.getElementById("userInput").value;

    document.querySelector("span#userReturn").innerText = userInput

    document.querySelector("div#shout-back").removeAttribute("hidden");
}