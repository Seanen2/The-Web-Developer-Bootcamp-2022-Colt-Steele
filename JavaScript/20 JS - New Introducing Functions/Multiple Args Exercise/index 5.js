// define isSnakeEyes below:
// let one = Math.floor(Math.random() * 6 + 1);
// let two = Math.floor(Math.random() * 6 + 1);

function isSnakeEyes(one, two) {
  if (one === 1 && two === 1) {
    console.log(`isSnakeEyes ${one},${two} //Snake Eyes!`);
  } else {
    console.log(`isSnakeEyes ${one},${two} //Not Snake Eyes!`);
  }
}
