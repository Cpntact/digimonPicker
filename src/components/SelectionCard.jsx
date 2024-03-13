import React from 'react'

import Button from './Button'
function SelectionCard({ loader , handleNext}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 items-center">
      {loader.set.map(x => {
        return (
            <Button key={x} value={x} onClick={(event) => handleNext(event)}>
              {x}
            </Button>
      )})} 
      </div>
  )
}
export default SelectionCard