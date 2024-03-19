import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

import { getOptions } from "../actions/getOptions";
import {LEN} from "../actions/getOptions";

import ScoreBoard from "../components/ScoreBoard";
import SelectionCard from "../components/SelectionCard";
import Image from "../components/Image";


export const loader = () => {
  return getOptions();
}

function ListShadow() {
  const loader = useLoaderData();
  const navigate = useNavigate();
  const [currPage, setCurrPage] = useState(0);
  const [score, setScore] = useState(0);
  const myHandleNext = (e) => {
    if (e.target.value == loader[currPage].correct) {
      setScore(score + 1);
    }
    if (currPage == (LEN - 1)) {
      let finalScore = score;
      if (e.target.value == loader[currPage].correct) {
        finalScore = score + 1;
      }
      navigate('/list/score', {state: {score: finalScore, data:loader}});
    }
    setCurrPage(currPage + 1);
  }
  return (
      <div>
        <div className="grid grid-cols-3 gap-x-4 mt-10 mb-10">
        <div>Options</div>
        <Image src={loader[currPage].publicUrl} className="border-2 border-black" />
        <ScoreBoard score={score}/>
        </div>
        <SelectionCard loader={loader[currPage]} handleNext={myHandleNext} />
      </div>
  )
}
export default ListShadow

