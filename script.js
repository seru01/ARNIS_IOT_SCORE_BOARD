// RED SCORE
const redScoreDisplay = document.getElementById("RedScoreVal");
const increaseButton = document.getElementById("RedincreseScore");
const decreaseButton = document.getElementById("RedDecreseScore");
let redScore = 0;
increaseButton.addEventListener("click", () => {
  if (redScore < 9) {
    redScore++;
    redScoreDisplay.textContent = redScore;
  }
});
decreaseButton.addEventListener("click", () => {
  if (redScore > 0) {
    redScore--;
    redScoreDisplay.textContent = redScore;
  }
});
//RED FOUL
const redFoulDisplay = document.getElementById("FoulCountRed");
const IncRedFoulBtn = document.getElementById("RedFoulInc");
const DecRedFoulBtn = document.getElementById("RedFoulDec");
let Redfoul = 0;

function setRedFoulStyle() {
  if (Redfoul > 0) {
    redFoulDisplay.style.color = "#ff0000";
    redFoulDisplay.style.textShadow = "0 0 10px #ff0000";
  } else {
    redFoulDisplay.style.textShadow = "none";
  }
}

IncRedFoulBtn.addEventListener("click", () => {
  if (Redfoul < 3) {
    Redfoul++;
    redFoulDisplay.textContent = Redfoul;
    setRedFoulStyle();
  }
});

DecRedFoulBtn.addEventListener("click", () => {
  if (Redfoul > 0) {
    Redfoul--;
    redFoulDisplay.textContent = Redfoul;
    setRedFoulStyle();
  }
});
// RED DISARM
const redDisarmDisplay = document.getElementById("RedDisarmCount");
const IncRedDisarmBtn = document.getElementById("RedDisarmInc");
const DecRedDisarmBtn = document.getElementById("RedDisarmDec");
let RedDisarm = 0;

function setRedDisarmStyle() {
  if (RedDisarm > 0) {
    redDisarmDisplay.style.color = "#ff0000";
    redDisarmDisplay.style.textShadow = "0 0 10px #ff0000";
  } else {
    redDisarmDisplay.style.textShadow = "none";
  }
}

IncRedDisarmBtn.addEventListener("click", () => {
  if (RedDisarm < 2) {
    RedDisarm++;
    redDisarmDisplay.textContent = RedDisarm;
    setRedDisarmStyle();
  }
});

DecRedDisarmBtn.addEventListener("click", () => {
  if (RedDisarm > 0) {
    RedDisarm--;
    redDisarmDisplay.textContent = RedDisarm;
    setRedDisarmStyle();
  }
});
// BLUE SCORE
const BLScoreDisplay = document.getElementById("BlueScoreVal");
const BLincreaseButton = document.getElementById("BlueincreseScore");
const BLdecreaseButton = document.getElementById("BlueDecreseScore");

let BlueScore = 0;

BLincreaseButton.addEventListener("click", () => {
  if (BlueScore < 9) {
    BlueScore++;
    BLScoreDisplay.textContent = BlueScore;
  }
});

BLdecreaseButton.addEventListener("click", () => {
  if (BlueScore > 0) {
    BlueScore--;
    BLScoreDisplay.textContent = BlueScore;
  }
});

//BLUE FOUL
document.addEventListener("DOMContentLoaded", function () {
  const blueFoulDisplay = document.getElementById("FoulCountBlue");
  const IncBlueFoulBtn = document.getElementById("BlueFoulInc");
  const DecBlueFoulBtn = document.getElementById("BlueFoulDec");
  let Bluefoul = 0;
  function setBlueFoulStyle() {
    if (Bluefoul > 0) {
      blueFoulDisplay.style.color = "#0011ff";
      blueFoulDisplay.style.textShadow = "0 0 10px #0011ff";
    } else {
      blueFoulDisplay.style.textShadow = "none";
    }
  }
  IncBlueFoulBtn.addEventListener("click", () => {
    if (Bluefoul < 3) {
      Bluefoul++;
      blueFoulDisplay.textContent = Bluefoul;
      setBlueFoulStyle();
    }
  });
  DecBlueFoulBtn.addEventListener("click", () => {
    if (Bluefoul > 0) {
      Bluefoul--;
      blueFoulDisplay.textContent = Bluefoul;
      setBlueFoulStyle();
    }
  });
  // clearing
  const resetButton = document.getElementById("RESETBTN");
  const newgamebtn = document.getElementById("NEWGAME");

  resetButton.addEventListener("click", () => {
    // RESET BLUE FOUL
    Bluefoul = 0;
    blueFoulDisplay.textContent = Bluefoul;
    setBlueFoulStyle();
  });

  newgamebtn.addEventListener("click", () => {
    // RESET BLUE FOUL
    Bluefoul = 0;
    blueFoulDisplay.textContent = Bluefoul;
    setBlueFoulStyle();
  });
});
//Blue DISARM
document.addEventListener("DOMContentLoaded", function () {
  // Blue DISARM
  const blueDisarmDisplay = document.getElementById("BlueDisarmCount");
  const IncBlueDisarmBtn = document.getElementById("BlueDisarmInc");
  const DecBlueDisarmBtn = document.getElementById("BlueDisarmDec");
  let BlueDisarm = 0;
  function setBlueDisarmStyle() {
    if (BlueDisarm > 0) {
      blueDisarmDisplay.style.color = "#0011ff";
      blueDisarmDisplay.style.textShadow = "0 0 10px #0011ff";
    } else {
      blueDisarmDisplay.style.textShadow = "none";
    }
  }
  IncBlueDisarmBtn.addEventListener("click", () => {
    if (BlueDisarm < 2) {
      BlueDisarm++;
      blueDisarmDisplay.textContent = BlueDisarm;
      setBlueDisarmStyle();
    }
  });
  DecBlueDisarmBtn.addEventListener("click", () => {
    if (BlueDisarm > 0) {
      BlueDisarm--;
      blueDisarmDisplay.textContent = BlueDisarm;
      setBlueDisarmStyle();
    }
  });
  const resetButton = document.getElementById("RESETBTN");
  const newgamebtn = document.getElementById("NEWGAME");
  resetButton.addEventListener("click", () => {
    // RESET BLUE DISARM
    BlueDisarm = 0;
    blueDisarmDisplay.textContent = BlueDisarm;
    setBlueDisarmStyle();
  });
  newgamebtn.addEventListener("click", () => {
    // RESET BLUE DISARM
    BlueDisarm = 0;
    blueDisarmDisplay.textContent = BlueDisarm;
    setBlueDisarmStyle();
  });
});

// TIME Controls
document.addEventListener("DOMContentLoaded", function () {
  const timerDisplay = document.getElementById("timerDisplay");
  const timePlayBtn = document.getElementById("TimePlay");
  const timePauseBtn = document.getElementById("TimePause");
  const timeResetBtn = document.getElementById("TimeReset");

  let countdownInterval;
  let timeLeft = 60;
  let isTimerRunning = false; // Track whether the timer is running or not

  function startCountdown() {
    countdownInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft >= 0) {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  timePlayBtn.addEventListener("click", () => {
    // Check if the timer is not running before starting it
    if (!isTimerRunning) {
      startCountdown();
      isTimerRunning = true; // Update the flag
      timePlayBtn.disabled = true; // Disable the button
    }
  });

  timePauseBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    isTimerRunning = false; // Update the flag
    timePlayBtn.disabled = false; // Re-enable the button
  });

  timeResetBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    timeLeft = 60;
    timerDisplay.textContent = "1:00";
    isTimerRunning = false; // Update the flag
    timePlayBtn.disabled = false; // Re-enable the button
  });
  // RESET ALL
  const resetButton = document.getElementById("RESETBTN");
  resetButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    timeLeft = 60;
    timerDisplay.textContent = "1:00";
    isTimerRunning = false; // Update the flag
    timePlayBtn.disabled = false; // Re-enable the button
  });
  // NEW GAME
  const newgamebtn = document.getElementById("NEWGAME");
  newgamebtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    timeLeft = 60;
    timerDisplay.textContent = "1:00";
    isTimerRunning = false; // Update the flag
    timePlayBtn.disabled = false; // Re-enable the button
  });
});
// ADVANTAGE POINT
document.getElementById("AdvantageRED").addEventListener("click", function () {
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid #FF1E00";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid #FF1E00";
});

document.getElementById("AdvantageBLUE").addEventListener("click", function () {
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid #0013DF";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid #0013DF";
});

document.getElementById("AdvantageCLR").addEventListener("click", function () {
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid #131313";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid #131313";
});

// ROUND COUNT
const roundIncButton = document.getElementById("RoundInc");
const roundDecButton = document.getElementById("RoundDec");
const roundClearButton = document.getElementById("RoundClear");
const roundCountElement = document.querySelector(".RoundCount");

// Initial round count
let roundCount = 1;

function updateRoundCount() {
  roundCountElement.textContent = "ROUND " + roundCount;
  // SET Round Color
  if (roundCount === 1) {
    roundCountElement.style.color = "yellow";
  } else if (roundCount === 2) {
    roundCountElement.style.color = "orange";
  } else if (roundCount === 3) {
    roundCountElement.style.color = "red";
  }
}

// Event listener for the increment button
roundIncButton.addEventListener("click", function () {
  if (roundCount < 3) {
    roundCount++;
    updateRoundCount();
  }
});

// Event listener for the decrement button
roundDecButton.addEventListener("click", function () {
  if (roundCount > 1) {
    roundCount--;
    updateRoundCount();
  }
});
roundClearButton.addEventListener("click", function () {
  roundCount = 1;
  roundCountElement.textContent = roundCount;
  updateRoundCount();
});

// RED WINNER INDICATOR
let RWinRed1Clicked = false;
let RWinRed2Clicked = false;

document
  .getElementById("RoundWinnerIncRED")
  .addEventListener("click", function () {
    if (!RWinRed1Clicked) {
      document.getElementById("RWinRed1").style.backgroundColor = "chartreuse";
      document.getElementById("RWinRed1").style.boxShadow =
        "0 0 20px chartreuse";
      RWinRed1Clicked = true;
    } else if (!RWinRed2Clicked) {
      document.getElementById("RWinRed2").style.backgroundColor = "chartreuse";
      document.getElementById("RWinRed2").style.boxShadow =
        "0 0 20px chartreuse";
      RWinRed2Clicked = true;
    }
  });

document
  .getElementById("RoundWinnerDecRED")
  .addEventListener("click", function () {
    if (RWinRed2Clicked) {
      document.getElementById("RWinRed2").style.backgroundColor =
        "rgb(39, 39, 39)";
      document.getElementById("RWinRed2").style.boxShadow = "none";
      RWinRed2Clicked = false;
    } else if (RWinRed1Clicked) {
      document.getElementById("RWinRed1").style.backgroundColor =
        "rgb(39, 39, 39)";
      document.getElementById("RWinRed1").style.boxShadow = "none";
      RWinRed1Clicked = false;
    }
  });
// BLUE WINNER INDICATOR
let RWinBlue1Clicked = false;
let RWinBlue2Clicked = false;

document
  .getElementById("RoundWinnerIncBLUE")
  .addEventListener("click", function () {
    if (!RWinBlue1Clicked) {
      document.getElementById("RWinBlue1").style.backgroundColor = "chartreuse";
      document.getElementById("RWinBlue1").style.boxShadow =
        "0 0 20px chartreuse";
      RWinBlue1Clicked = true;
    } else if (!RWinBlue2Clicked) {
      document.getElementById("RWinBlue2").style.backgroundColor = "chartreuse";
      document.getElementById("RWinBlue2").style.boxShadow =
        "0 0 20px chartreuse";
      RWinBlue2Clicked = true;
    }
  });

document
  .getElementById("RoundWinnerDecBLUE")
  .addEventListener("click", function () {
    if (RWinBlue2Clicked) {
      document.getElementById("RWinBlue2").style.backgroundColor =
        "rgb(39, 39, 39)";
      document.getElementById("RWinBlue2").style.boxShadow = "none";
      RWinBlue2Clicked = false;
    } else if (RWinBlue1Clicked) {
      document.getElementById("RWinBlue1").style.backgroundColor =
        "rgb(39, 39, 39)";
      document.getElementById("RWinBlue1").style.boxShadow = "none";
      RWinBlue1Clicked = false;
    }
  });

// RESET SCORE
const resetButton = document.getElementById("RESETBTN");
resetButton.addEventListener("click", () => {
  // RESET RED SCORE
  redScore = 0;
  redScoreDisplay.textContent = redScore;
  // RESET RED FOUL
  Redfoul = 0;
  redFoulDisplay.textContent = Redfoul;
  setRedFoulStyle();
  // RESET RED DISARM
  RedDisarm = 0;
  redDisarmDisplay.textContent = RedDisarm;
  setRedDisarmStyle();
  // RESET BLUE SCORE
  BlueScore = 0;
  BLScoreDisplay.textContent = BlueScore;
  // RESET STYLE
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid #131313";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid #131313";
});

// NEW GAME
const newgamebtn = document.getElementById("NEWGAME");

newgamebtn.addEventListener("click", () => {
  // RESET RED SCORE
  redScore = 0;
  redScoreDisplay.textContent = redScore;
  // RESET RED FOUL
  Redfoul = 0;
  redFoulDisplay.textContent = Redfoul;
  setRedFoulStyle();
  // RESET RED DISARM
  RedDisarm = 0;
  redDisarmDisplay.textContent = RedDisarm;
  setRedDisarmStyle();
  // RESET BLUE SCORE
  BlueScore = 0;
  BLScoreDisplay.textContent = BlueScore;
  // RESET STYLE
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid #131313";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid #131313";
  //RESET ROUND COUNT
  roundCount = 1;
  roundCountElement.textContent = roundCount;
  updateRoundCount();
  //RESET ROUND WINNER INDICATOR
  // RED
  RWinRed1Clicked = false;
  document.getElementById("RWinRed1").style.backgroundColor = "rgb(39, 39, 39)";
  document.getElementById("RWinRed1").style.boxShadow = "none";
  RWinRed2Clicked = false;
  document.getElementById("RWinRed2").style.backgroundColor = "rgb(39, 39, 39)";
  document.getElementById("RWinRed2").style.boxShadow = "none";
  // BLUE
  RWinBlue1Clicked = false;
  document.getElementById("RWinBlue1").style.backgroundColor =
    "rgb(39, 39, 39)";
  document.getElementById("RWinBlue1").style.boxShadow = "none";
  RWinBlue2Clicked = false;
  document.getElementById("RWinBlue2").style.backgroundColor =
    "rgb(39, 39, 39)";
  document.getElementById("RWinBlue2").style.boxShadow = "none";

  // CLEAR LIFE RED BAR NAME
  const RedLifeBarInput = document
    .getElementById("RedLifeBar")
    .querySelector("input");
  RedLifeBarInput.value = "";
  // CLEAR LIFE BLUE BAR NAME
  const BlueLifeBarInput = document
    .getElementById("BlueLifeBar")
    .querySelector("input");
  BlueLifeBarInput.value = "";
});
