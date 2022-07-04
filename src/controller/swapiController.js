import axios from "axios";
import swapiSimple from "../model/swapiSimpleModel.js";
import enrichFunction from "../util/enrichFunction.js";
//import swapiEnrich from "../model/swapiEnrichModel.js";

const url = "https://swapi.dev/api";

const swapiController = (app) =>{
    app.get("/:entity/:id/", async (req, res) => {
        const start = new Date().getTime()
        console.log("Start: "+start);
        const { entity, id } = req.params;
        const enrichParams = req.query.enrichParams;
        const urlComplete = `${url}/${entity}/${id}`;


        const simple = new swapiSimple()
        if (!enrichParams) {
            try {
                const responseSimple = await simple.getResponse(urlComplete)
                res.json(responseSimple);
            } catch (error) {
                res.json(error)
            }finally{
                const endStart = new Date().getTime()
                console.log("End: "+endStart);
                console.log("Diference: "+(endStart-start));
            }
            
        } else {
            try {
                const splitedParams = enrichParams.split(",");

                const responseEnrichParams = await axios.get(urlComplete);
                const responseEnrichParamsData = responseEnrichParams.data
          
                const responseEnrichParamsObjKeys = Object.keys(responseEnrichParamsData)
    
                const intersection = splitedParams.filter(element=>responseEnrichParamsObjKeys.includes(element))
                responseEnrichParamsData.enrichParams = intersection
    
                const newResponseData =  JSON.parse(JSON.stringify(responseEnrichParamsData)) 
                await enrichFunction(splitedParams, newResponseData);
    
                res.json(newResponseData)

            } catch (error) {
                res.json(error);
            }finally{
                const final = new Date().getTime()
                console.log("Final: "+final);
                console.log("Diference: "+(final-start));
            }
            
        
        }
    });
}

export default swapiController
