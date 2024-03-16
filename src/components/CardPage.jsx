import React from 'react'
import useDisplayCard from '../hooks/useDisplayCard'

function CardPage({cards}) {
    const displayCard = useDisplayCard();
    const handleOnClick = (e) => {
        displayCard.setImage(e.currentTarget.value);
        displayCard.onOpen();
    }
  return (
    <div className="grid grid-cols-5">
      {cards.map((e, index) => {
        return (<button onClick={handleOnClick} value={e}>
            <img src={e} key={index}></img>
        </button>)
      })}
      </div>
  )
}

export default CardPage