const express = require("express");
require("./config");
const firstData = require("./firstData");

const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await firstData.find({
    $or: [
      { name: { $regex: req.params.key } },
      { age: { $eq: req.params.key } },
      { desc: { $regex: req.params.key } }
    ],
  });
  res.send(data);
});

app.listen(8080);
