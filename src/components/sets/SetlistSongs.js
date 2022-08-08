//create a componenet to display the songs in the specified set list

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./allSets.css"



//if song.setListId = setlist.id then show song in setlist
//create a useEffect to filter through the songs in the setlist invoke getAllSongs in 


export const SetListSongs = ({ setlistId }) => {
    //create initial useState for songs
    const [setlistSongs, setSetListSongs] = useState([])

    //add a navigate for the button that will be adding songs to a specific set
    const navigate = useNavigate()

    //create a funciton to fetch all the songs
    const GetSetListSongs = () => {
        fetch(`http://localhost:8088/setListSongs?_expand=song`)
            .then(response => response.json())
            .then((songsArray) => {
                setSetListSongs(songsArray)
            })
    }


    //set the songs
    useEffect(
        () => {
            GetSetListSongs()
        },
        []
    )

    //create another useEffect to watch for a deleted song
    const deletedSong = (item) => {
        fetch(`http://localhost:8088/setListSongs/${item.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(() => {
                console.log(`deleted songs`)
                GetSetListSongs()
            })
    }


    //return JXS list of songs in the setlist
    return <>

        <div className="add-container">
            <button className="AddSongBtn" onClick={() => { navigate(`/setlist/addsongs/${setlistId}`) }}>Add Song</button>
        </div>
        <article>
            {
                setlistSongs.map((setlistSong) => {
                    if (setlistSong.setListId === parseInt(setlistId)) {

                        return (
                            <>
                                <div className="song-container">

                                    <Link style={{textDecoration: 'none'}} className="view-set-container" to={`/songs/${setlistSong.songId}`}>
                                        <div className="song-and-artist-container">
                                            <h3> <strong> {setlistSong.song.name}</strong> </h3>
                                            <div>  {setlistSong.song.artist}</div>
                                        </div>
                                    </Link>
                                    <div>
                                        <button className="DeleteBtn" onClick={() => { deletedSong(setlistSong) }}>Delete</button>
                                    </div>
                                </div>
                            </>)
                    }
                }
                )
            }
        </article>
    </>

}



