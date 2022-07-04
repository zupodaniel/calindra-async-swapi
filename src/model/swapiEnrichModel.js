import axios from "axios";
import enrichFunction from "../util/enrichFunction.js";

class swapiEnrich {
    async getReponse(enrichParams) {
        const splitedParams = enrichParams.split(",");

        const responseEnrichParams = await axios.get(urlComplete);
        const responseEnrichParamsData = responseEnrichParams.data

        const responseEnrichParamsObjKeys = Object.keys(responseEnrichParamsData)

        const intersection = splitedParams.filter(element => responseEnrichParamsObjKeys.includes(element))

        responseEnrichParamsData.enrichParams = intersection

        const newResponseData = responseEnrichParamsData
        await enrichFunction(splitedParams, newResponseData);
    }
}

export default swapiEnrich