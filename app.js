const p1 = document.querySelector("#p1button");
const p2 = document.querySelector("#p2button");
const p1Score = document.querySelector("#p1score")
const p2Score = document.querySelector("#p2score")
const resetButton = document.querySelector("#reset");
const winSelect = document.querySelector('#playto');

let p1count = 0;
let p2count = 0;
let winscore = parseInt(winSelect.value);
let isGameOver = false;

p1.addEventListener("click", function () {
  if(!isGameOver){
    p1count++;
    if (p1count === winscore) {
        p1Score.classList.add("winner");
        p2Score.classList.add("loser");
        isGameOver = true;
    }
    document.querySelector("#p1score").textContent = `${p1count}`;
}
});

p2.addEventListener("click", function () {
  if(!isGameOver){
    p2count++;
    if (p2count === winscore) {
        p2Score.classList.add("winner");
        p1Score.classList.add("loser");
        isGameOver = true;
    }

    document.querySelector("#p2score").textContent = `${p2count}`;
}
});

winSelect.addEventListener('change', function () {
    winscore = parseInt(this.value)
    reset();
})

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
  p1count = 0;
  p2count = 0;
  p1Score.textContent = `${p1count}`;
  p2Score.textContent = `${p2count}`;
  p1Score.classList.remove('winner', 'loser')
  p2Score.classList.remove('winner', 'loser')
}