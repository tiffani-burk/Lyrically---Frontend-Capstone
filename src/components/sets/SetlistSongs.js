//create a componenet to display the songs in the specified set list

import { useEffect, useState } from "react"


//if song.setListId = setlist.id then show song in setlist
//create a useEffect to filter through the songs in the setlist invoke getAllSongs in 


export const SetListSongs = ({ setlistId }) => {
    //create initial useState for songs
    const [setlistSongs, setSetListSongs] = useState([])
    //create a state to watch the above
    const [filteredbyuser, setFilteredByUser] = useState([])
    //create initial useState for setlists 
    const [setlists, setSetlists] = useState([])
    //create a state to watch the setlists
    const [filteredBySet, setFIlteredBySet] = useState([])

    //define the current user
    const localLyricUser = localStorage.getItem("lyric_user")
    const lyricUserObject = JSON.parse(localLyricUser)

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

    //return JXS list of songs in the setlist
    return <>
        <h2>List of songs in set</h2>
        <article>
            {
                filteredBySet.map(song =>
                    <div> {song.name} </div>
                )
            }
        </article>
    </>

}


//TODO fix this component! Needs to show all the songs in the setlist 