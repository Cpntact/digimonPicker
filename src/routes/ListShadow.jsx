import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

import { getOptions } from "../actions/getOptions";
import {LEN} from "../actions/getOptions";
import ScoreBoard from "../components/ScoreBoard";

import SelectionCard from "../components/SelectionCard";
import LoadingScreen from "../components/LoadingScreen";
import Image from "../components/Image";

export const loader = () => {
  return getOptions();
}
function ListShadow() {
  const loader = useLoaderData();
  const [currPage, setCurrPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const myHandleNext = (e) => {
    if (currPage == (LEN - 1)) {
      console.log("Finished Quiz")
      navigate(0);
      setIsLoading(true);
    }
    setCurrPage(currPage + 1);
    if (e.target.value == loader[currPage].correct) {
      setScore(score + 1);
    }
  }
  return (
    <div>    
      {isLoading ? <LoadingScreen /> : 
      <div>
        <div className="grid grid-cols-3 gap-x-4">
        <div>Empty for Now</div>
        <Image src={loader[currPage].publicUrl} />
        <ScoreBoard score={score}/>
        </div>
        <SelectionCard loader={loader[currPage]} handleNext={myHandleNext} />
      </div>
  }
    </div>
  )
}
export default ListShadow

