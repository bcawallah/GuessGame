let maxNum;
let machineVal;

const inputElement = document.getElementById("userVal");
inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        guessGame()
    }
});

const startElement = document.getElementById("max")
startElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        startGame();
        show();
    }
});

function startGame() {
    maxNum = startElement.value;
    machineVal = Math.floor(Math.random() * maxNum) + 1;
    console.log("I Am Giving You Answer Of This Which is: " + machineVal);
    console.log("But This Not Fair In Games. Enjoy Your Life :) ");
    console.log("Let's Connect:  https://www.linkedin.com/in/ajaymahiwal/");

    document.getElementById("msg").innerHTML =
        "The Game Has Started. Guess Number From 1 to " + maxNum;
}

function show() {
    document.getElementById("box").style.display = "flex";
    inputElement.focus();
}

function guessGame() {
    userN = inputElement.value;
    let finalRes = gameLogic(userN);
    document.getElementById("result").innerHTML = finalRes;
    inputElement.value = "";
    inputElement.focus();
}

function gameLogic(userN) {
    while (true) {
        //   if (userN == "quit") {
        //     return "Quitting.............";
        //     break;
        //   }
        if (userN == machineVal) {
            return "You Guess Is correct.You Won.";
            break;
        } else {
            if (userN < machineVal) {
                return `Ooops, Wrong Guess. Re-Enter ---Hint: ${userN} is Smaller number then Random number.`;
            } else {
                return `Ooops, Wrong Guess. Re-Enter ---Hint: ${userN} is Higher number then Random number.`;
            }
        }
    }
}