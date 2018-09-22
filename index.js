const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
// So what this says is if there is an environment variable that has been already defined by Heroku go
// ahead and sign that variable to port otherwise by default just use the value of 5000.
// And so in our development environment we'll use 5000.
app.listen(PORT);