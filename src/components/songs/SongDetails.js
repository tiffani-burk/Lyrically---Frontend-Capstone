// //create a component to display the details; we will neeed to access just the song, based on the songId, using a fetch statement. 
// //return the JSX (html rep) that displays name, lyrics, artist and key of each song

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//create a component to display JSX of customer details
export const SongDetails = () => {

    //set an initial state variable to represent the song and updated state
    //set up a useParams to return an object of params to match the URl
    //useParams should be equal to the param that we made up in the Route on main.js that invoked this function
    //dont forget to add an object to the inital 
    const {songId} =useParams()
    const [song, updateSong] = useState({})
    
    
    //set up a useEffect to fetch the details on the song and by accessing the songId of the songs, this returns an object 
    //watching the songId state 
    useEffect(
        () => {
            fetch(`http://localhost:8088/songs/${songId}`) 
            .then(response => response.json())
            .then((data) => {
                updateSong(data)
            })
        }, 
        [songId] // observing when the state of the useParams changes this time with songId
    )
    //return JSX that returns the name, address and phone of the customer 
return <section className="song-dets">
    <h3>Song Details</h3>
    <div><strong>Name: </strong>{song?.name} </div> 
    <div><strong>Artist: </strong>{song?.artist} </div>
    <div><strong>Key: </strong>{song?.key} </div>
    <div><strong>Time Signature: </strong>{song?.timeSignature} </div>
    <div><strong>Lyrics: </strong></div> <div className="lyrics">{song?.lyrics} </div>

</section>


}

//Once songDetails is create, it needs to be exported and imported into Main.js to be visually rendored
//dont forget optional chaining operator ? (song?.name) which means to skip over data  if that data doesnt exist and go to the next thing
