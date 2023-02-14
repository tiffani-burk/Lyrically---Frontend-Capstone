//Create a componenet to display an intake form to the user, with inputs for setlist creations. 
//setlist form
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CreateSet.css"

export const CreateSetlist = () => {
    //set initial state variable to the value of an object with default values for the key values that the user will input later
    const [setlist, update] = useState({
        //default values
        name:"",
        gigDate:"",
        gigLocation:"",
        userId:""
    })

    //define the current user
    const localLyricUser = localStorage.getItem("lyric_user")
    const lyricUserObject = JSON.parse(localLyricUser)
    //assign useNavigate to navigate to direct user later back to the full setlist
    const navigate = useNavigate()

    //create a component that will save the new data to the API '
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
        //create an object to be saved to the API that looks exactly like the objects in the setlists array
        const setlistToSendToApi = {
            name: setlist.name,
            gigDate: setlist.gigDate,
            gigLocation: setlist.gigLocation,
            userId: lyricUserObject.id
        }
    
// Perform the fetch() to POST the object to the API
    return fetch(`http://localhost:8088/setlists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:  JSON.stringify(setlistToSendToApi)
    })
    .then(response => response.json())
    .then(() => {
        navigate("/setlists") //navs the user back to the setlists
    })
}

    const updateSetlist = (evt) => {
        const copy = {...setlist}
        copy[evt.target.id] = evt.target.value
        update(copy)
    }

    return (
        <div className="setForm">
        <form>
            <h2 className="setHeader">New Setlist</h2>
            <fieldset>
                <div>
                    <label htmlFor="name">Setlist Name</label>
                    <input onChange={updateSetlist}
                    required autoFocus
                    type="text"
                    id="name"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Insert setlist name..."
                    value={setlist.name} />

                    <label htmlFor="gigDate">Gig Date</label>
                    <input onChange={updateSetlist}
                    required autoFocus
                    type="text"
                    id="gigDate"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Date..."
                    value={setlist.gigDate} />

                    <label htmlFor="gigLocation">Gig Location</label>
                    <input onChange={updateSetlist}
                    required autoFocus
                    type="text"
                    id="gigLocation"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Location of gig..."
                    value={setlist.gigLocation} />
                </div>

            </fieldset>

            <button className="CrtSetBtn" onClick={(clickEvent)=> { handleSaveButtonClick(clickEvent)}}>Submit Setlist</button>
        </form>
        </div>
    )
}


//This will be Routed and invoked in Main.js
//after submit button is tapped, user is brought back to the all setlists screen
//create an onClick for the button and pass it the handleSave function, which is saving all the inputs