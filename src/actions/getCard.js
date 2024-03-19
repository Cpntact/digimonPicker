import translateName from "./translateName";
async function getCardImages(name) {
    name = translateName(name);
    const apiUrl = `https://digimoncard.io/api-public/search.php?n=${name}&series=Digimon Card Game&sort=code`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.error)  throw Error(data.error);      
      const images = data.map((digimon) => digimon.image_url);
      return images;
    } catch (error) {
      console.error(`Error fetching digimon data: ${error}`);
      return [];
    }
}

export default getCardImages;
