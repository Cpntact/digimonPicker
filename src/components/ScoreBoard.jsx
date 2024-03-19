import React from 'react'

import {LEN} from "../actions/getOptions";
function ScoreBoard({score}) {
  return (
    <div className='flex justify-center items-center'>
      <div className='border-2 rounded-full w-40 h-40 flex justify-center items-center gap-1' id="scoreboard">
        <div className='text-3xl'>{score}</div>
        <div className='text-3xl'>/</div>
        <div className='text-3xl'>{LEN}</div>
      </div>
    </div>
  )
}

export default ScoreBoard