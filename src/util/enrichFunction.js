import axios from "axios"

async function enrichFunction(split, returnResp){
    for(let i = 0 ;i<split.length;i++){
        if(split[i] in returnResp){
            const detailEntry = returnResp[split[i]]
            for(let j = 0; j<detailEntry.length; j++){
                const specificEntry = detailEntry[j]
                const accessSpecificEntry = await axios.get(specificEntry)
                const accessSpecificEntryData = accessSpecificEntry.data
                detailEntry[j] = accessSpecificEntryData
            }
        }
    }
}

export default enrichFunction