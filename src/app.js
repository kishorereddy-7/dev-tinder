const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello Kishore reddy");
});

app.listen(3000);
