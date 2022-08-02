import "./ImportModal.css"

export const ImportPopupModal = ({ closeModal, setterFunction, getCoverSongs, id, name, artist }) => {
  
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div>
            <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className="title"><h5>Is this the song you were looking for?</h5></div>
            <div className="body"><p>song name</p></div>
            <div className="footer">
              <button onClick={() => closeModal(false)}>Cancel</button>
              <button onClick={(changeEvent) => setterFunction(changeEvent.target.value)}>Add</button>
            </div>
        </div>
    </div>
  );
}


//next, create logic for this modal in the Import modale

