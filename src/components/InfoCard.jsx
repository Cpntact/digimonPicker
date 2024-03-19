
function InfoCard({data}) {
    const getDescription = data.descriptions.filter(e => e.language === "en_us");
    const description = getDescription.length == 0 ? "No description available" : getDescription[0].description;
  return (
    <div className='grid grid-cols-3'>
        <div>
            <h1>Description</h1>
            <p className='pt-10 leading-8'>{description}</p>
        </div>

        <div className='flex flex-col items-center'>
            <h1 className="font-bold text-3xl">{data.name}</h1>
            <img className="rounded-lg mt-4 mb-4 border-2" src={data.images[0].href}></img>
            <div className='grid grid-cols-3 gap-x-5 justify-center items-center text-center'>
                <div>
                    <h2 className="mb-2">Level</h2>
                    <p>{data.levels.reduce((a,b) => a +" "+ b.level, "")}</p>
                </div>
                <div>
                    <h2 className="mb-2">Attribute</h2>
                    <p>{data.attributes.reduce((a,b) => a +" "+ b.attribute, "")}</p>
                </div>
                <div>
                    <h2 className="mb-2">Types</h2>
                    <p>{data.types.reduce((a,b) => a +" "+ b.type, "")}</p>
                </div>

            </div>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className="font-bold text-3xl">Skills</h1>
            <div className='grid grid-cols-2 grid-rows-2 pt-10 gap-4' style={{gridTemplateColumns: `repeat(auto-fit, minmax(${data.skills.slice(-4).length < 4 ? '100%' : 'auto'}, 1fr))`}}>
            {data.skills.slice(-4).map(e => {
                return (
                <div className='flex flex-col items-start gap-4 pl-4 pr-4 border-2 rounded-lg'id="skill" key={e.skill}>
                    <h2 className="pt-4 font-bold">{e.skill}</h2>
                    <p className="leading-6 pb-4">{e.description == " " ? "No available description": e.description}</p>
                </div>
            )})}
            </div>
            <h1 className="font-bold text-3xl mt-2">Fields</h1>
            <div className="flex flex-row w-full justify-evenly ">
            {data.fields.map(e => {
                return (
                    <img className="pl-4 pr-4 mt-6" src={e.image} key={e.field}></img>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default InfoCard