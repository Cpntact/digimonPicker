import React from 'react'

import {LEN} from "../actions/getOptions";
function ScoreBoard({score}) {
  return (
    <div>
        {score}/{LEN}
    </div>
  )
}

export default ScoreBoard