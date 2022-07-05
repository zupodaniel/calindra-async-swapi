import axios from "axios";
import express, { application } from "express";

const app = express();
const port = 3001;

const requestApi = () => {
  axios
    .get("https://swapi.dev/api/")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

app.get("/", (req, res) => {
  res.send(requestApi());
});

app.get("/:entity/:id", (req, res) => {
  const id = req.params.id;
  const entity = req.params.entity;
  const enrichFields = req.query.enrichFields;

  const splitEnrichFields = enrichFields.split(",");
 

  const url = `https://swapi.dev/api/${entity}/${id}`;

  res.json({ url });
  axios
    .get(url)
    .then(function (response) {
      const responseData = response.data;
      if (splitEnrichFields) {
        responseData[splitEnrichFields].map((field) => {
          axios
            .get(field)
            .then(function (response) {
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      } else {
        console.log("não conseguimos encontrar, tente novamente com um campo válido");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
