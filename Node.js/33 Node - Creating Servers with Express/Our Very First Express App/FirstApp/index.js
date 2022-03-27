const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!");
// });

app.get("/", (req, res) => {
  res.send("This is the home page!!!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`Browsing the ${subreddit} Subreddit`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`Viewing Post ID: ${postId} of Subreddit: ${subreddit}`);
});

app.get("/cats", (req, res) => {
  res.send("POST REQUEST TO /cat!!!");
});

app.get("/dogs", (req, res) => {
  res.send("POST REQUEST TO /dogs!!!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing found is nothing search");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("I don`t know that path");
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});
