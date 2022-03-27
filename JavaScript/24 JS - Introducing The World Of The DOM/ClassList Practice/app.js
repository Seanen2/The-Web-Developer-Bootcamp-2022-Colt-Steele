// WRITE YOUR CODE IN HERE:

// SOLUTION 1
// const list = document.querySelectorAll("li");
// for (let i = 0; i < list.length; i++) {
//   list[i].classList.toggle("highlight");
// }

const list = document.querySelectorAll("li");
for (let li of list) {
  li.classList.toggle("highlight");
}
