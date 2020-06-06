const express = require("express"),
  app = express(),
  routes = require("express").Router(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  axios = require("axios");


app.use(cors());
app.use(bodyParser.json());
app.use(routes);

async function buildNewJsonFilmsByFieldsResults(fields,films){
    
    const enrichFieldsArray = fields.split(",");

        await Promise.all(enrichFieldsArray.map(async field =>{
            const trimmedField = field.trim()
            console.log(trimmedField)

            const fieldsData = await Promise.all(
                films.data[trimmedField].map(url=>{
                    return axios.get(url)
                })
            )
            films.data[trimmedField] = fieldsData.map(result=>{
                return result.data
            })
        })
    )
    
}

routes.get("/sw-films/:filmId",async function getFilms(request,response){
    
    const filmId = request.params.filmId;
    
    const enrichFields = request.query.enrichFields
    
    const swFilms = await axios.get(`https://swapi.dev/api/films/${filmId}`)
    
    if(!enrichFields){
        return response.json(swFilms.data)
    }else{
        await buildNewJsonFilmsByFieldsResults(enrichFields,swFilms)
        return response.json(swFilms.data);   
    }

});

app.listen(4000);

