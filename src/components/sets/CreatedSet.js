//create a component that will return the name and date of the set, as well as a button to view the set and a button to delete the set
//this componenet will take the id, name and date of the object as props
//dont forget to set up a Route that pairs with the "to" Link

import { Link } from "react-router-dom"





export const CreatedSet = ({ id, name, gigDate, gigLocation, getAllSets }) => {


    const DeleteSetlist = (id) => {
        fetch(`http://localhost:8088/setlists/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(() => {
                getAllSets()
            }
            )
    }


    return <section>
        <div className="song-container">
            <div className="song-and-artist">
                <div> Set Name: {name}</div>
                <div> Gig Date: {gigDate}</div>
            </div>
            <Link to={`/setlists/${id}`}>View Setlist</Link>

            <button onClick={() => { DeleteSetlist(id) }}>Delete</button>
        </div>
    </section>
}


//getAllSets is the componenet on AllSets that is fetching the data for all the setlists
