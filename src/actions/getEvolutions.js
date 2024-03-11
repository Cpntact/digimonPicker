import getDigimon from "./getDigimon";

const levels = {
    "Baby I": 0,
    "Baby II": 1,
    "Child": 2,
    "Adult": 3,
    "Armor": 3,
    "Perfect": 4,
    "Ultimate": 4,
    
}

const getEvolution = async (data) => {
    const returnArr = [];
    let temp = [];
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
        console.log(temp)
        temp.map(digimon => {
            const level = levels[digimon.levels[0].level];
            const attributefiltered = digimon.attributes.filter(e => e.attribute === data.attributes[0].attribute);
            if (levels[data.levels[0].level] + 1 === level && attributefiltered.length) {
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
