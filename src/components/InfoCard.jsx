
function InfoCard({data}) {
    const description = data.descriptions.filter(e => e.language === "en_us")
  return (
    <div className='grid grid-cols-3'>
        <div>
            <h1>Description</h1>
            <p className='pt-10'>{description[0].description}</p>
        </div>

        <div className='flex flex-col items-center'>
            {data.name}
            <img className="rounded-lg" src={data.images[0].href}></img>
            <div className='grid grid-cols-3 gap-x-5 justify-center items-center text-center'>
                <div>
                    <h2>Level</h2>
                    <p>{data.levels.reduce((a,b) => a +" "+ b.level, "")}</p>
                </div>
                <div>
                    <h2>Attribute</h2>
                    <p>{data.attributes.reduce((a,b) => a +" "+ b.attribute, "")}</p>
                </div>
                <div>
                    <h2>Types</h2>
                    <p>{data.types.reduce((a,b) => a +" "+ b.type, "")}</p>
                </div>

            </div>
        </div>
        <div className='flex flex-col items-center'>
            <h1>Skills</h1>
            <div className='grid grid-cols-2 grid-rows-2 pt-10'>
            {data.skills.slice(-4).map(e => {
                return (
                <div className='flex flex-col items-start' key={e.skill}>
                    <h2>{e.skill}</h2>
                    <p>{e.description}</p>
                </div>
            )})
            }
            </div>
        </div>
    </div>
  )
}

export default InfoCard