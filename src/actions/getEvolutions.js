import getDigimon from "./getDigimon";

export const LEVELS = {
    "Baby I": 0,
    "Baby II": 1,
    "Child": 2,
    "Adult": 3,
    "Armor": 3,
    "Hybrid": 3,
    "Perfect": 4,
    "Ultimate": 5,
    
}

const getEvolution = async (data) => {
    const returnArr = [];
    let temp = [];
    if (data.nextEvolutions.length === 0 || data.levels.length == 0) return [];
    if (data.levels[0].id == 4) {
       data.nextEvolutions.forEach(e => {
           returnArr.push({
               name: e.digimon,
               image: e.image,
           })
       });
    } else {
        const promises = data.nextEvolutions.map(async (e) => {
            const digimon = await getDigimon(e.digimon);
            temp.push(digimon);
        })
        await Promise.all(promises);
        temp = temp.filter(x => x !== -1);
        temp.map(digimon => {
            if (digimon.levels.length === 0) return null;
            const max = Math.max(...data.levels.map(e => LEVELS[e.level]));
            const maxEvolution = Math.max(...digimon.levels.map(e => LEVELS[e.level]));
            if (max + 1 == maxEvolution) {
                returnArr.push({
                    name: digimon.name,
                    image: digimon.images[0].href,
                });
            }

        })
    }
    return returnArr.sort((a,b) => a.name.localeCompare(b.name));
}

export default getEvolution;

