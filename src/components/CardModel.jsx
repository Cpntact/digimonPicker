import React from 'react'

import Model from './Model'
import useDisplayCard from '../hooks/useDisplayCard'

function CardModel() {
    const displayCard = useDisplayCard();
    const handleChange = (open) => {
        if (!open) {
            displayCard.onClose();
        }
    }
  return (
    <Model title="" description="" isOpen={displayCard.isOpen} onChange={handleChange}>
        <img src={displayCard.myimage} alt="card"></img>
    </Model>
  )
}

export default CardModel