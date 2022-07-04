const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const requestApi = () => {
  axios.get('https://swapi.dev/api/')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}


app.get('/', (req, res) => {
  res.send(requestApi())
})

app.get('/:entity/:id', (req, res) => {
  const id = req.params.id;
  const entity = req.params.entity;
  const url = `https://swapi.dev/api/${entity}/${id}`;
  res.json({ url });
  axios.get(url)
    .then(function (response) {

      let apiResponse = response.data;

      let enrichFields = req.query.enrichFields;
      let splitEnrichFields = enrichFields.split(",");
      let firstParamEnrich = splitEnrichFields[0];

      console.log(apiResponse)



      if (firstParamEnrich) {
        //console.log(apiResponse.species)
        apiResponse[firstParamEnrich].map(field => {
          axios.get(field)
            .then(function (response) {
              console.log(response.data)
            })
            .catch(function (error) {
              console.log("error")
            })
        })
      } else {
        console.log("deuim ruim")
      }

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})