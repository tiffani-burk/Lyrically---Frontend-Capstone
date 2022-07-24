import { useState } from "react"
import { useEffect } from "react"
//create a componenet that will set the initial state variable to an empty array, fetch the songs from the api, give back the array of the songs from the api and invoke the state var funciton, therefore,
//adding all the songs to the state variable. This function will return a list of the songs, using .map to iterate over the song array and return the name of the setlist and date, accessed with
// dot notation and string interpolation {setlist.name} {setlist.date}

export const AllSets = () => {

        //set state variable
        const [setlists, setAllSets] = useState([])
        //state variable to watch for the filtered state to change
        const [filteredSetlists, setFilteredSetlists] = useState([])
        //define the current user
        const localLyricUser = localStorage.getItem("lyric_user")
        const lyricUserObject = JSON.parse(localLyricUser)
        
        //create a useEffect to fetch all of the songs
        useEffect(
            () => {
                fetch(`http://localhost:8088/setlists`)
                .then(response => response.json()) //dont forget the () after .json!! 
                .then((setsArray) => {
                    setAllSets(setsArray) //invoke setAllSOngs and pass in the songsArray data that was fetched
                })
            },
            []
        )
        

        //create another useEffect to filter the setlists by userId. 
        //step 1, create another state variable for filteredSets
        //step 2, create a useEffect to filter through the setlists and match the usetlist.userId to the lyricUserObject.id
        //step 3. invoke the setter function on the state variable and pass in the new filtered setlists
        //step 3, update my .map to loop over the filteredSetlists
        useEffect(
            () => {
                const mySetlists = setlists.filter(setlist => setlist.userId === lyricUserObject.id)
                setFilteredSetlists(mySetlists)
            },
            [setlists]
        )

        
        //return JXS list of all the songs, displaying the name and artist
        //use .map to loop through the above array of songs, which is is being stored to the "allSongs" variable
        //dont forget to add a fragment (parent) if there are multiple JSX items being returned
        //dont forget to add a unique react key, since we are iterating with .map
           return  <>
           <h3>Setslists</h3>
           <article>
            { 
             filteredSetlists.map(
                (setlist) => {
                    return <article>
                        <div className="song-container">
                            <div className="song-and-arist">
                            <h4>{setlist.name}</h4>
                            <h6>{setlist.gigDate}</h6>
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