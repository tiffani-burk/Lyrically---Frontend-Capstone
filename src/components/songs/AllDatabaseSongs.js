import { useEffect, useState } from "react"
import { ImportPopupModal } from "../newsongs/ImportPopup"

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
return <>
<article>
{
    filteredSongs.map(song => 
    <>
    <div>
        song name: {song.name}
    </div>
    </>)
}

</article>
</>
}