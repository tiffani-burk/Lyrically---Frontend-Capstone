//Create a componenet that will add specified songs to the set
//this componenet will show a list of all the songs with an add to set ability 
//trying to get it to show all songs, then just users songs
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NavItem } from "reactstrap"
import "./AddSongs.css"



export const AddSongsToSet = () => {
    //create initial state
    const [songs, getSongs] = useState([])
       //import useNavigate and set it to value of navigate, so we can add it to the button.
   const navigate = useNavigate()

    const setlistId = useParams()
    console.log(setlistId.setlistId)
    // // /create a function to fetch all of the songs
    const getAllSongs =
        () => {
            fetch(`http://localhost:8088/songs`)

                .then(response => response.json())
                .then((songsArray) => {
                    getSongs(songsArray) //invoke setAllSOngs and pass in the songsArray data that was fetched
                })

        }

    //create a useEffect to set the songs
    useEffect(
        () => { getAllSongs() },
        []
    )

    //create a function that will take a songid as an arg, will then create an obj that has the songId, the setlistId and song position of 0 and will POST to DB
    const AddingTheSongsToTheSet = (id) => {
        //Create an object to be saved to the API that looks like my object data in songs;
        const SendSongToSetInAPI = {
            songId: id,
            setListId: parseInt(setlistId.setlistId),
            songPosition: 0
        }
        // Perform the fetch() to POST the object to the API

        return fetch(`http://localhost:8088/setListSongs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(SendSongToSetInAPI)
        })
            .then(response => response.json())
            .then(() => {
                console.log(`worked`)
            })
    }

//create a function to navigate back to the setlist via id and invoke it in the button "Submit Songs"
const BackToSet = () => {
    navigate(`/setlists/${setlistId.setlistId}`)
}

    return <>
        <h2> adding songs</h2>
        <p>Add songs to your setlist</p>
        <article>
            {
                songs.map(
                    (song) => {
                        <></>
                        return <div className="song-container">
                            <div className="song-and-artist">
                                <h5>{song.name}</h5>
                                <h6>{song.artist}</h6>
                            </div>
                            <button onClick={() => { AddingTheSongsToTheSet(song.id) }}> Add Song</button>
                        </div>
                    }

                )
            }
        </article>
            <section className="submit-songs-btn">
                <button onClick={BackToSet}>
                    Submit Songs
                </button>
            </section>
    </>
}