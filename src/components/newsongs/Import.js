import { ImportPopupModal } from "./ImportPopup"
import "./Import.css"
import { useState } from "react"

//this component imports songs "cover songs" from the database
export const Import = ({setterFunction}) => {

    //create an intial state for my modal
    const [openModal, setOpenModal] = useState(false)

    return ( 
        <>
        <div className="importModal">
        <div className="search-container">
            <h5>Search cover songs</h5>
            <input className="import-search-box" 
            onChange={(changeEvent) => {
                setterFunction(changeEvent.target.value)
            }}
            type="text"
            placeholder="Find a song" 
            />
        <button className="openModalBtn" onClick={() => {
            setOpenModal(true)
        }}>Search songs</button>
        </div>
       { openModal && <ImportPopupModal closeModal={setOpenModal} />}
       </div>
        </>
       )
}

