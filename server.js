const express = require("express"),
  app = express(),
  routes = require("express").Router(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  axios = require("axios");


app.use(cors());
app.use(bodyParser.json());
app.use(routes);

routes.get("/sw-films/:filmId",async function getFilms(request,response){
    
    const filmId = request.params.filmId;
    
    try {
        const films = await axios.get(`https://swapi.dev/api/films/${filmId}`)
        
        if(request.query.enrichFields.includes("characters")){
            
            const newData = await Promise.all(films.data.characters.map(async field=>{

                const data = await axios.get(field)
                return data.data
            }))
            films.data.characters = newData
        
        }
        if(request.query.enrichFields.includes("planets")){
            
            const newData = await Promise.all(films.data.planets.map(async field=>{

                const data = await axios.get(field)
                return data.data
            }))
            films.data.planets = newData
        
        }
        if(request.query.enrichFields.includes("species")){
            
            const newData = await Promise.all(films.data.species.map(async field=>{

                const data = await axios.get(field)
                return data.data
            }))
            films.data.species = newData
        
        }
        if(request.query.enrichFields.includes("starships")){
            
            const newData = await Promise.all(films.data.starships.map(async field=>{

                const data = await axios.get(field)
                return data.data
            }))
            films.data.starships = newData
        
        }
    
        
        return response.json(films.data)
        
        
    } catch (error) {
        console.log(error);
		return response.status(400).send({error: "Ocorreu um erro "})
    }
});

app.listen(4000);

