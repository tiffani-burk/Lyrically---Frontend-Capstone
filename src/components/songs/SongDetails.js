// //create a component to display the details; we will neeed to _expand our object to a nested object that has the name, lyrics, artist and key of each song -
// //return the JSX (html rep) that displays name, lyrics, artist and key of each song

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//create a component to display JSX of customer details
export const SongDetails = () => {

    //set an initial state variable to represent the song and updated state
    //set up a useParams to return an object of params to match the URl
    //dont forget to add an object to the inital 
    const {songId} =useParams()
    const [song, updateSong] = useState({})
    
    
    //set up a useEffect to fetch the details on the song and expland those details and turn then into an array 
    //watching the songId state 
    useEffect(
        () => {
            fetch(`http://localhost:8088/songs?_expand=${songId}`)
            .then(response => response.json())
            .then((data) => {
                const singleSong = data[0]
                updateSong(singleSong)
            })
        }, 
        [songId]
    )
    //return JSX that returns the name, address and phone of the customer 
return <section className="song-dets">
    <h3>Song Details</h3>
    <div><strong>Name: </strong>{song.name} </div>
    <div><strong>Artist: </strong>{song.artist} </div>
    <div><strong>Key: </strong>{song.key} </div>
    <div><strong>Lyrics: </strong>{song.lyrics} </div>

</section>


}

//Once songDetails is create, it needs to be exported and imported into Main.js to be visually rendored
