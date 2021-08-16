const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "3000",
  });
});

app.listen(3000, () => console.log("Server running port 3000"));
