const h1 = document.querySelector("h1");
const username = document.querySelector("#username");
username.addEventListener("input", function (e) {
  if (!this.value) {
    h1.innerText = `Enter Your Username`;
  } else {
    h1.innerText = `Welcome, ${this.value}`;
  }
});
