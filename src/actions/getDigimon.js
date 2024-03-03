
async function getDigimon(value) {
    const url = `https://digi-api.com/api/v1/digimon/${value}`
    const res = fetch(url)
    const json = await (await res).json()
    return json;
}

export default getDigimon