const express = require("express");
const app = express();
const port = 3000;
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const getData = async () => {
  let result = await client.connect();
  let db = result.db("firstDb");
  let collection = db.collection("firstCollect");
  let dbResponse = await collection.find({}).toArray();
  console.log(dbResponse);
};

getData();
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
