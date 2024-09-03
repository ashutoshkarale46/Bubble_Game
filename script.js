var timer = 15;
var score = 0;
var hitBtn = 0;

function getNewHit() {
  hitBtn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitBtn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 152; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${num}</div>`;
  }

  document.querySelector("#panelbtm").innerHTML = clutter;
}

function runTime() {
  var timeInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeInterval);
      document.querySelector("#panelbtm").innerHTML = `<h1>💥Game Over💥</h1>`;
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document
  .querySelector("#panelbtm")
  .addEventListener("click", function (details) {
    var hitNum = Number(details.target.textContent);

    if (hitNum === hitBtn) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });

getNewHit();
runTime();
makeBubble();
