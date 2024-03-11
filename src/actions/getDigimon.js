import toast from "react-hot-toast";

async function getDigimon(value) {
    try {
        let error = 0;
        const url = `https://digi-api.com/api/v1/digimon/${value}`
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error('Error')
        }   
        const json = await res.json()
        return json
    } catch {
        return -1;
    }
    
}

export default getDigimon