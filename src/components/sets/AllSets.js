import { useState } from "react"
import { useEffect } from "react"

export const AllSets = () => {

        //set state variable
        const [allSets, setAllSets] = useState()
        
        //create a useEffect to fetch all of the songs
        useEffect(
            () => {
                fetch(`http://localhost:8088/setlists`)
                .then(response => response.json)
                .then((setsArray) => {
                    setAllSets(setsArray) //invoke setAllSOngs and pass in the songsArray data that was fetched
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
           <h3>Song List</h3>
           <article>
            {
            <div className="song-container">
                <div className="song-and-artist">
                <h4>Set Name</h4> 
                <h5>Date </h5>
                </div>
                <div className="dot-menu"></div>
            </div>
            }
           </article>
           </>
}