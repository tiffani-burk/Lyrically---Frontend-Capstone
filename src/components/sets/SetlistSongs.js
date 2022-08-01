//create a componenet to display the songs in the specified set list

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./allSets.css"



//if song.setListId = setlist.id then show song in setlist
//create a useEffect to filter through the songs in the setlist invoke getAllSongs in 


export const SetListSongs = ({setlistId }) => {
    //create initial useState for songs
    const [setlistSongs, setSetListSongs] = useState([])
    //create a state to watch the above
    const [filteredbyuser, setFilteredByUser] = useState([])
    //create a state to watch the setlists
    const [filteredBySet, setFIlteredBySet] = useState([])
    const [deletedSongs, setDeletedSongs] = useState([])
    

    //define the current user
    const localLyricUser = localStorage.getItem("lyric_user")
    const lyricUserObject = JSON.parse(localLyricUser)

    const navigate = useNavigate()

    //create a funciton to fetch all the songs
    const GetSetListSongs = () => {
        fetch(`http://localhost:8088/songs`)
            .then(response => response.json())
            .then((songsArray) => {
                setSetListSongs(songsArray)
            })
    }

    //get the songs have a useId that matches the id on the user
    //passed all the songs to the user
    useEffect(
        () => {
            const userSongs = setlistSongs.filter(song => song.userId === lyricUserObject.id)
            setFilteredByUser(userSongs)
        },
        [setlistSongs]
    )



    //create useEffect to watch the state of the setlists
    useEffect(
        () => {
            const ListOfTheSets = setlistSongs.filter(song => song.setListId === parseInt(setlistId))
            setFIlteredBySet(ListOfTheSets)
        },
        [filteredbyuser]
    )

    useEffect(
        () => {
            GetSetListSongs()
         
        },
        []
    )
        
  //create another useEffect to watch for a deleted song
    const deletedSong = (id) =>{
        fetch(`http://localhost:8088/songs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(() => {
          navigate(`/setlist/${id}`)
        })
    }

  
    //return JXS list of songs in the setlist
    return <>

        <div className="add-container">
        <button className="add-btn" onClick={()=> {navigate(`/setlist/addsongs`)}}>Add Song</button>
        </div>
        <article>
            {
                filteredBySet.map(song =>
                    <>
                    <div className="song-container">
                        <Link className="view-set-container" to={`/songs/${song.id}`}>
                        <div className="song-and-artist">
                            <div> <strong>Name:</strong>  {song.name} </div>
                            <div> <strong>Artist: </strong> {song.artist}</div>
                        </div>
                        </Link>

                    <button onClick={() => {deletedSong(song.id)} }>Delete</button>
                    </div>
                    </>
                )
            }
        </article>
    </>

}


//TODO add a delete onClick with component fetching the songs by id to delete
//invoke that component inside the button onclick
