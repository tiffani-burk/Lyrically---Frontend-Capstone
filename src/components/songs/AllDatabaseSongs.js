import { useEffect, useState } from "react"
import "./searchedSong.css"

export const AllDatabaseSongs = ({searchTermState}) => {
const [songs, setSongs] = useState([])
const [filteredSongs, setFilteredSongs] = useState ([])


const getAllDBSongs = () => {
    fetch(`http://localhost:8088/songs`)
        
    .then(response => response.json())
    .then((songsArray) => {
        setSongs(songsArray) //invoke setAllSOngs and pass in the songsArray data that was fetched
    })
}

useEffect(
    () => {
        getAllDBSongs()
    },
    []
)

//create a useEffect to filter through the tix 
useEffect(
    () => {
        const searchedSongs = songs.filter(song => song.name.toLowerCase().startsWith(searchTermState.toLowerCase()) )
        setFilteredSongs(searchedSongs)
    }, 
    [searchTermState]
)


//create a funciton to add "imported" song to song library
const AddImportToLibrary = (id) => {
    //create an object to be saved to the api that looks like a song object
    const SendSongToSongAPI = {
  
      
    }
//perform a fetch to POST song to API in songs
    return fetch(`http://localhost:8088/songLibrary`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(SendSongToSongAPI)
    })
    .then(response => response.json())
}


return <>
<article>
{
    filteredSongs.map(song => 
    <>
    <div className="searched-song-container" >
    <div> <italic>Is this the song you were looking for?</italic></div>
     <div>  Name: {song.name}</div>
     <div>   Artist: {song.artist}</div>
     <button onClick={() => { AddImportToLibrary(song.id) }}>Add Song</button>


    </div>
    </>)
}

</article>
</>
}
//searching all songs in the database
//returning the song that meets search criteria 

//to add song to song library:
//create a POST fetch that will take an id as a parameter, creates an object that looks like song objects
//create an onclick on the button and invoke the above function and pass it the song.id

//"id": 2,
// "name": "Can't Help Falling in Love",
// "artist": "Elvis Presley",
// "key": "D",
// "timeSignature": "4/4",
// "lyrics": "Wise men say \nOnly fools rush in\n But I can't help falling in love with you\nShall I stay?\nWould it be a sin\nIf I can't help falling in love with you?\nLike a river flows\n Surely to the sea\n Darling, so it goes\nSome things are meant to be",
// "userId": 1