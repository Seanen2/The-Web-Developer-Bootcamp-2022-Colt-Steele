const p1 = {
  score: 0,
  button: document.querySelector("#button1"),
  display: document.querySelector("#p1"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#button2"),
  display: document.querySelector("#p2"),
};

const reset = document.querySelector("#reset");
const select_number = document.querySelector("#select_number");
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

select_number.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resett();
});

reset.addEventListener("click", resett);

function resett() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
