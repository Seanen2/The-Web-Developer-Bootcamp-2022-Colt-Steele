const giveMeAJoke = require("give-me-a-joke");
const color = require("colors");
const cowsay = require("cowsay");

giveMeAJoke.getRandomDadJoke(function (joke) {
  console.log(
    cowsay.say({
      text: joke.rainbow,
      e: "oO",
      T: "U ",
    })
  );
});
