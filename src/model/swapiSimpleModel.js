import axios from "axios";

class swapiSimple{
    async getResponse(url){
        const response = await axios.get(url)
        const responseData = response.data
        return responseData
    }
}

export default swapiSimple