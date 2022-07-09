const axios = require('axios');
const express = require('express')
const app = express()
const port = process.env.PORT || 3002;


const url = "https://swapi.dev/api/"


app.get('/:entity/:id', async (req, res) => {
    console.time('run>>')
    const { entity, id } = req.params;
    
    const urlResquest = `${url}/${entity}/${id}`;
    const enrichFieldsParams = req.query.enrichFields;

    const entityResponse = await axios.get(urlResquest);
    const searchEntity = entityResponse.data;
    
    if (enrichFieldsParams !== undefined) {
        
        const enrichFields = enrichFieldsParams.split(",")
        
        if (entityResponse.status === 200) {
            for (let field of enrichFields) {
                
                const currentField = searchEntity[field];
                
                const fullPromiseArray = [];
                const fullField = [];
                
                for (const url of currentField) {
                    
                    const promise = axios.get(url);
                    fullPromiseArray.push(promise);

                }
                const promiseAll = await Promise.all(fullPromiseArray); 


                const filterPromise = promiseAll.filter(object => {
                    if(object['status'] == 200) {

                        fullField.push(object['data']);
                    }
                })
                
                searchEntity[field] = fullField;
                
            }
            res.json(searchEntity)
            
        } else {
            res.status(404).send({ error: 'Filme não encontrado.' })
        }
    } else {
        res.json(searchEntity)
    }
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
