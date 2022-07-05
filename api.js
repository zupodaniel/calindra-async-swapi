const axios = require("axios");
const { json } = require("express");
const express = require("express");
const app = express();
const querystring = require("querystring");
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/:entity/:id", async (req, res) => {
  const { entity, id } = req.params;
  
  const instance = axios.create({
    baseURL: `https://swapi.dev/api/`,
  });

  let {enrichFields} = req.query

  const response = await instance.get(`${entity}/${id}`);
  const data = response.data;

  let dataConver = JSON.stringify(data)
  //let {title, planets, opening_crawl} = dataConver;
  console.log(dataConver.title);

  console.log(enrichFields) 

  res.send(`QueryParameters:<h1>${enrichFields}</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
