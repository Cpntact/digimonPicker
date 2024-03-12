import React from 'react'

function SelectionCard({loader}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 items-center">
      {loader[0].set.map(x => {
        return (
            <div className="border border-black-100 rounded-lg w-min h-full" key={x}>
              {x}
            </div>
      )})} 
      </div>
  )
}

export default SelectionCard