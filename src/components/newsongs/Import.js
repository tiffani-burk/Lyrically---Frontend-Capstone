import { ImportPopupModal } from "./ImportPopup"
import "./Import.css"
import { ImportDropDown } from "./ImportDropDown"


//this component imports songs "cover songs" from the database
export const Import = ({setterFunction}) => {



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
    
        </div>
       

       </div>

    
        </>
       )
}

{/* <button className="openModalBtn" onClick={() => {
    <ImportDropDown />
}}>Search songs</button> */}