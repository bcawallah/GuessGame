let maxNum;
let userN;
let machineVal;

let btn1 = document.querySelector(".btn-1");

btn1.addEventListener("click", () => {
  document.getElementById("box").style.display = "flex";

  maxNum = document.getElementById("max").value;
  machineVal = Math.floor(Math.random() * maxNum) + 1;
  console.log("I Am Giving You Answer Of This Which is: " + machineVal);
  console.log("But This Not Fair In Games. Enjoy Your Life :) ");
  console.log("Let's Connect:  https://www.linkedin.com/in/ajaymahiwal/");

  document.getElementById("msg").innerHTML =
    "The Game Has Started. Guess Number From 1 to " + maxNum;
});

// function startGame() {

// }

// function show() {
// }

function guessGame() {
  userN = document.getElementById("userVal").value;
  let finalRes = gameLogic(userN);
  document.getElementById("result").innerHTML = finalRes;
}

function gameLogic() {
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
        return "Ooops, Wrong Guess. Re-Enter ---Hint: Higher number then Random number.";
      } else {
        return "Ooops, Wrong Guess. Re-Enter ---Hint: Smaller number then Random number.";
      }
    }
  }
}
