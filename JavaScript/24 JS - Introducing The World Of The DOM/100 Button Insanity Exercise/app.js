// WRITE YOUR CODE IN HERE:
const container = document.querySelector("#container");
for (let i = 1; i <= 100; i++) {
  const boton = document.createElement("button");
  boton.innerText = "Hey!";
  container.appendChild(boton);
}
