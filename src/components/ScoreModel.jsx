import useDisplayScore from "../hooks/useDisplayScore";

import Model from "./Model"
import {LEN} from "../actions/getOptions";
import { useNavigate } from "react-router-dom";

function ScoreModel({score}) {
    const displayScore = useDisplayScore();
    const handleChange = (open) => {
        if (!open) {
            displayScore.onClose();
        }
    }
  return (
    <Model title="Score" onChange={handleChange} description="Short Description" isOpen={displayScore.isOpen}>
        {score} / {LEN}
    </Model>
  )
}

export default ScoreModel;