import { useContext, useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Input from "@mui/material/Input";
import QuizIcon from '@mui/icons-material/Quiz';

import { Themecontext } from "../providers/useTheme"
import SwitchDemo from "./Switch"

import useUpload from "../hooks/useUpload";
import { useNavigate } from "react-router-dom";

function Head() {
  const value = useContext(Themecontext)
  const upload = useUpload();
  const [state, setState] = useState('');
  const navigate = useNavigate();
  const SeachAction = () => {
    navigate(`/info/${state}`)
  }
  const quizAction = () => {
    navigate('/list/shadow')
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      SeachAction();
    }
  }

  return (
      <div className="grid grid-cols-[120px_1fr_100px_50px] justify-items-center mt-4">
        <SwitchDemo {...value}/>
        <div className="flex flex-row gap-x-2 w-full pl-4 pr-4">
            <Input id="txtsearch" fullWidth value={state} onChange={(e) => setState(e.target.value)} onKeyDown={handleKeyDown}/>
            <SearchIcon onClick={SeachAction} />
        </div>
        <AddIcon onClick={upload.onOpen} />
        <QuizIcon onClick={quizAction}/>
      </div>
  )
}

export default Head