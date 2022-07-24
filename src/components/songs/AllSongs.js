import { useEffect, useState } from "react"
import "./Song.css"

export const AllSongs = () => {
//set initial state variable
const [songs, setSongs] = useState([])


//create a useEffect to fetch all of the songs
useEffect(
    () => {
        fetch(`http://localhost:8088/songs`)
        
        .then(response => response.json())
        .then((songsArray) => {
            setSongs(songsArray) //invoke setAllSOngs and pass in the songsArray data that was fetched
        })
   
    },
    []
)


//return JXS list of all the songs, displaying the name and artist
//use .map to loop through the above array of songs, which is is being stored to the "allSongs" variable
//dont forget to add a fragment (parent) if there are multiple JSX items being returned
//dont forget to add a unique react key, since we are iterating with .map
//we are passing each object (key, id, name, artist) to Customer as a prop
   return  <>
   <h2>Song List</h2>

   <article>
    {
        songs.map(
            (song) => {
                return <article>
                    <div className="song-container">
                    <div className="song-and-arist">
                    <header>{song.name}</header>
                    <header>{song.artist}</header>
                    </div>
                    <div className="dot-menu"></div>
                    </div>


                </article>
            }
        )
    }
   </article>
   
   </>
}
