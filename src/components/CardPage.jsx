import React from 'react'
import useDisplayCard from '../hooks/useDisplayCard'

function CardPage({cards}) {
    const displayCard = useDisplayCard();
    const handleOnClick = (e) => {
        displayCard.setImage(e.currentTarget.value);
        displayCard.onOpen();
    }
  return (
    <div className="grid grid-cols-5 gap-4">
      {cards.map((e, index) => {
        return (<button key={index} onClick={handleOnClick} value={e}>
            <img className="hover:scale-110 transition" src={e}></img>
        </button>)
      })}
      </div>
  )
}

export default CardPage