import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from '../components/Button';


function ScorePage({}) {
  const location = useLocation();
  let score = location.state.score;
  const loader = location.state.data;
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/list/shadow');
  }
  return (
    <div>
      {score}
      <Button onClick={onClick}/>
      {loader.map(e => {
        return (
          <div className='grid grid-cols-2 gap-0'>
            <img className="w-full h-autp" src={e.publicUrl}/>
            <img className="w-full h-autp" src={e.img_path}/>
          </div>
        )
      })}

    </div>
  )
}

export default ScorePage