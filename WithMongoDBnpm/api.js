const express = require("express");
const mongodb = require('mongodb')
const dbConnect = require("./mongodb");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

app.post("/", async (req, res) => {
  // console.log(req.body);
  let data = await dbConnect();
  let result = await data.insertMany([req.body]);
  res.send(result);
});

app.put("/:size", async (req, res) => {
  
  let data = await dbConnect();
  let result = await data.updateOne( {size: req.params.size }, { $set: req.body });
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await dbConnect();
  let result = await data.deleteOne({size: req.params.size});
  res.send(result);
});

app.listen(8080);
