
// eslint-disable-next-line react/prop-types
function NextEvolution({evolution}) {
  return (
    <div className='flex flex-col items-center'>
    <h1>Next Evolutions</h1>
      <div className='grid grid-cols-4 gap-10 mt-10'>
      {evolution.map(e => {
        return (
          <div key={e.name} className='flex flex-col items-center border-black border-2'>
            {e.name}
            <img src={e.image} className='rounded-lg'></img>
          </div>
        )
        })
      }
      </div>
    </div>
  )
}

export default NextEvolution