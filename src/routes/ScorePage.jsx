import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from '../components/Button';
import {LEN} from '../actions/getOptions';


function ScorePage({}) {
  const location = useLocation();
  let score = location.state.score;
  const loader = location.state.data;
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/list/shadow');
  }
  return (
    <div className='flex flex-col items-center'>
      <Button onClick={onClick} className="w-40 mt-10 mb-10"> Return </Button>
      <div className='grid gap-4 grid-cols-3 grid-flow-row'>
      {loader.map(e => {
        return (
          <div className='grid grid-cols-3 mb-4 mt-4 gap-0 items-center' key={e.correct}>
            <img className="w-40 h-auto border-2 border-black rounded-lg" src={e.publicUrl}/>
            <img className="w-40 h-auto border-2 border-black rounded-lg" src={e.img_path}/>
            <p className='ml-4'>{e.correct}</p>
          </div>
        )
      })}
      <div className='border-2 rounded-full w-32 h-32 flex justify-center items-center gap-1' id="scoreboard">
        <div className='text-3xl'>{score}</div>
        <div className='text-3xl'>/</div>
        <div className='text-3xl'>{LEN}</div>
      </div>
      </div>

    </div>
  )
}

export default ScorePage