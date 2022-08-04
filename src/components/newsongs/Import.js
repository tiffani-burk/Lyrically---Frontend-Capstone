//Create song form
//Create a component that returns a form with a fetch POST method, to POST the inputed data into songs 
//step 1. add a button in allSongs (and the create button in nav) that will redirect to this form; button in allSongs has to have an onCLick that will navigate to this screen
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CreateForm.css"


export const ImportForm = () => {

    const [song, update] = useState({
        //set up default values for the info that will go in the form
        name: "",
        artist: "",
        key: "",
        timeSignature: "",
        lyrics: "",
        setListId: ""
    })

    //define the current user
    const localLyricUser = localStorage.getItem("lyric_user")
    const lyricUserObject = JSON.parse(localLyricUser)
    //assign useNavigate to a variable and invoke to direct use back to song list
    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // console.log(`you clicked the button`) for testing purpose
        //Create an object to be saved to the API that looks like my object data in songs;
        //remove the id, because the json server will create it for you
        const songToSendToApi = {
            userId: lyricUserObject.id,
            name: song.name,
            artist: song.artist,
            key: song.key,
            timeSignature: song.timeSignature,
            lyrics: song.lyrics,
        }


        // Perform the fetch() to POST the object to the API
    

        return fetch(`http://localhost:8088/songs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(songToSendToApi)
        })
        .then(response => response.json())
        .then(()=> {
            navigate("/allsongs") //navs the user back to the song list
        })
    }

    const updateSong = (evt) => {
        const copy = { ...song }
        copy[evt.target.id] = evt.target.value
        update(copy)
    }

    return (
        <section className="formSection">
        <form>
            <h2 className="headerText" >Add A Cover Song</h2>
            <fieldset>
                <div>
                    <label htmlFor="name">Song Name:</label>
                    <input onChange={updateSong}
                        required autoFocus
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="What's the name of your song?"
                        value={song.name} />

                    <label htmlFor="artist">Artist:</label>
                    <input onChange={updateSong}
                        required autoFocus
                        type="text"
                        id="artist"
                        className="form-control"
                        placeholder="Who wrote this song?"
                        value={song.artist} />

                    <label htmlFor="key">Key:</label>
                    <input onChange={updateSong}
                        required autoFocus
                        type="text"
                        id="key"
                        className="form-control"
                        placeholder="Song key"
                        value={song.key} />

                    <label htmlFor="timeSignature">Time Signature:</label>
                    <input onChange={updateSong}
                        required autoFocus
                        type="text"
                        id="timeSignature"
                        className="form-control"
                        placeholder="Timing?"
                        value={song.timeSignature} />

                    <label htmlFor="lyrics">Lyrics:</label>
                    <input onChange={updateSong}
                        required autoFocus
                        type="text"
                        id="lyrics"
                        placeholder="Copy and paste a cover song in here."
                        className="form-control"
                        value={song.lyrics} />

                </div>
            </fieldset>

            <button className="SubmitBtn" onClick={(clickEvent) => { handleSaveButtonClick(clickEvent) }}>
                Submit Song
            </button>

            
        </form>
        /</section>
    )

}


//This will be Routed and invoked in Main.js
//after submit button is tapped, user is brought back to the all songs screen
//create an onClick for the button and pass it the handleSave function, which is saving all the inputs