async function getCardImages(name) {
    if (name.includes("Omega ")) {name = name.replace("Omega ", "Omni")}
    if (name.includes("Shine ")) {name = name.replace("Shine ", "Shine")}
    if (name.includes("Omega")) {name = name.replace("Omega", "Omni")}
    name = name.replace(/\(.*?\)/g, "");
    const apiUrl = `https://digimoncard.io/api-public/search.php?n=${name}&series=Digimon Card Game`;
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
