

import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./AddSongModal.css"

export const AddSongModal = ({ closeModal }) => {
  const navigate = useNavigate()



//create a function to navigate to the import page
const ImportSongScreen = () => {
    navigate(`/import`)
}


//create a function to navigate to the original song creation page
const OriginalSongScreen = () => {
    navigate(`/create`)
}

  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div>
            <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="title"><h5>What type of song are you adding?</h5></div>
            <div className="body"><p></p></div>
            <div className="footer">
              <button onClick={() => OriginalSongScreen()}>Add Original</button>
              <button onClick={() => ImportSongScreen()}>Add Cover</button>
            </div>
        </div>
    </div>
  );
}
