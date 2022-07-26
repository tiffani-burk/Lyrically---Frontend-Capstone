//create a component that displays the details of the setlist, including name, gigDate, location and all songs on the setlist. 
//return JSX that displays details listed above
//Using useParams to set the URL parametere on this 

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const SetDetails = () => {
//set an initial state variable to represent the updated state
//set up the useParams to return an object that has the params that match the URL
//the useParams value will be the set to the param we made up in the Route on main.js that invokes this function 
//the initial value of this state is an empty object 

const {setlistId} = useParams()
const [set, updateSet] = useState({})

//set up a useEffect to fetch the details on the setlist by accessing the
//setId of the sets and returning an object to us (as defined in the useState)
//watching the setId state

useEffect(
    () => {
        fetch(`http://localhost:8088/setlists/${setlistId}`)
        .then(response => response.json())
        .then((data) => {
            updateSet(data)
        }) 
    },
    [setlistId] //observing when the state of useParams changed with this id
)
//return JSX that displays name, gigDate, location and all the songs in the set. 
return <section>
    <h3>Set Details</h3>
    <div>Name: {set?.name}</div>
    <div>Date: {set?.gigDate}</div>
    <div>Location: {set?.location}</div>
</section>

}

{/* <div>Songs on set: {set?.name}</div> */}