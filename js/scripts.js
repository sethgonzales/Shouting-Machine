//UI Logic

function getUserInput() {
    const userInput = document.getElementById("userInput").value;

    document.querySelector("span#userReturn").innerText = userInput.toUpperCase();
}

function setFormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();
        getUserInput();
        document.querySelector("div#shout-back").removeAttribute("class");
    }
}
    window.onload = function() {
        setFormSubmissionEventHandler();
}
