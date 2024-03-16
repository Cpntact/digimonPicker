import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
function NextEvolution({evolution, cards}) {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    navigate(`/info/${e.currentTarget.value}`)
  }
  return (
    <div className='flex flex-col items-center w-full'>
    <h1>Next Evolutions</h1>
      <div className='grid grid-cols-4 gap-10 mt-10'>
      {evolution.map(e => {
        return (
          <button key={e.name}  onClick={event => handleOnClick(event)} value={e.name}>
            <div className='flex flex-col items-center border-black border-2 rounded-lg h-max'>
              {e.name}
              <img src={e.image} className='rounded-lg'></img>
            </div>
          </button>
        )
      })}
      </div>
    </div>
  )
}

export default NextEvolution