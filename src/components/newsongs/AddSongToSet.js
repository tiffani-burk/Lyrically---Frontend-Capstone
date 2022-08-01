//Create a componenet that will add specified songs to the set
//this componenet will show a list of all the songs with an add to set ability 
//trying to get it to show all songs, then just users songs
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const AddSongsToSet = () => {
    //create initial state
    const [songs, getSongs] = useState([])
    const [filterSongs, setFilterSong] = useState([])
    const [addedSongs, setAddedSongs] = useState([])

    //define the current user
    const localLyricUser = localStorage.getItem("lyric_user")
    const lyricUserObject = JSON.parse(localLyricUser)

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
    
    
    // // create a useEffect that watches the state of songs to change and when it doesn, useEffect triggers to match the userId on song to the users id
    useEffect(
        () => {
            const userSongs = songs.filter(song => song.userId === lyricUserObject.id)
            setFilterSong(userSongs)
        },
        [songs]
    )

const getAddedSongs = 
        () => {
            fetch(`http://localhost:8088/setListSongs?_expand=song`)
            .then(response => response.json())
            .then((data) => {
                setAddedSongs(data)
            } )

        }

        useEffect(
            () => {
                getAddedSongs()
            }, []
        )

    // useEffect(
    //     () => {
    //         const addedSong = addedSongs.filter(addedSong => addedSong.setlistId === setlist.id)
    //         setAddedSongs(addedSong)

    //     },
    //      [ filterSongs ]
    // )
    // const navigate = useNavigate()

// const [setlistObject, setSetlistsObj] = useState({})
// const [setlistId] = useParams()

//     //if the button below is clicked, the song clicked will be added to setlist/{id}
// useEffect(
//     () => {
//         fetch(`http://localhost:8088/setlists?id=${setlistId}`)
//         .then(response => response.json())
//         .then((setlistObj)=> {
//             setSetlistsObj(setlistObj)
//         })
//     },
//     [setlistId]
// )



// //if the id from setlist matches the setlistId from song, then the song displays in that setlist
// const addSongToSet = (id) => {
//     const addingTheSong = filterSongs.filter(song => song.setlistId === setlistId)
//     setFilterSong(addingTheSong)
//     .then(() => {
//         navigate(`/setlists/${id}`)
//         })
    
// }

    return <>
        <h2> adding songs</h2>
        <p>Add songs to your setlist</p>
        <article>
            {
                filterSongs.map(
                    (song) => {<></>
                        return <div className="song-container">
                        <div className="song-and-artist">
                        <h5>{song.name}</h5>
                        <h6>{song.artist}</h6>
                        </div>
                        <button onClick={() => {addedSongs()}}> Add Song</button>
                        </div>
                    }

                )
            }
        </article>
    </>
}