import { useEffect, useState } from "react"
import { CreatedSong } from "./CreatedSong"
import "./Song.css"
import { useNavigate } from "react-router-dom"
import { SetListSongs } from "../sets/SetlistSongs"
import "./songs.css"
import { AddSongModal } from "../newsongs/AddSongModal"

//create a componenet that will set the initial state variable, fetch the songs from the api, give back the array of the songs from the api and invoke the state var funciton, therefore,
//adding all the songs to the state variable to an empty array. This function will return a list of the songs, using .map to iterate over the song array and return the name of the song and the artist of the song, accessed with
// dot notation and string interpolation {song.name} {song.artist}
export const AllSongs = () => {
//set initial state variable
const [songs, setSongs] = useState([])
//state variable for songs for filtered songs
const [filteredSongs, setFilteredSongs] = useState([])
  //create an initial state for my AddSongModal
  const [openModal, setOpenModal] = useState(false)

//define the current user
const localLyricUser = localStorage.getItem("lyric_user")
const lyricUserObject = JSON.parse(localLyricUser)



//create a function to fetch all of the songs
const getAllSongs =
    () => {
        fetch(`http://localhost:8088/songs`)
        
        .then(response => response.json())
        .then((songsArray) => {
            setSongs(songsArray) //invoke setAllSOngs and pass in the songsArray data that was fetched
        })
   
    }

    //create a useEffect to set the songs
    useEffect(
        () => { getAllSongs() },
            []
    )


//create another useEffect and state var to check if the userId matches the userId on the song
        //step 1, create another state variable for filteredSongs
        //step 2, create a useEffect to filter through the songs and match the song.userId to the lyricUserObject.id
        //step 3. invoke the setter function on the state variable and pass in the new filtered songs.
        //step 3, update my .map to loop over the filteredSongs
useEffect(
    () => {
      const mySongs = songs.filter(song => song.userId === lyricUserObject.id)
      setFilteredSongs(mySongs)
    },
     [songs]
)




//return JXS list of all the songs, displaying the name and artist
//add a button that will navigate to the create song page with the song form
//use .map to loop through the above array of songs, which is is being stored to the "songs" variable
//dont forget to add a fragment (parent) if there are multiple JSX items being returned
//dont forget to add a unique react key, since we are iterating with .map
   return  <>
  
   <div className="add-btn">
   <h2>Song Library</h2>
   <button className="openModalBtn" onClick={() => setOpenModal(true)}> Add Song </button>
   { openModal && <AddSongModal closeModal={setOpenModal} /> }
   </div>

   <article>
    {
       filteredSongs.map(
            (song) => <CreatedSong key={`song--${song.id}`} 
            id={song.id}
            name={song.name}
            artist={song.artist}
            lyrics={song.lyrics}
            songKey={song.key}
            getAllSongs={getAllSongs} /> 
            ) //getAllSongs does not need () b/c it's not acting as a function in this instance
    }
   </article>   
   </>
}
