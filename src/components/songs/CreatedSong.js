import { Link } from "react-router-dom"



//create a component that will accept a single song object as a prop
//this component is returnigng a link to the song details and a delete song button
export const CreatedSong = ({id, name, artist, getAllSongs}) => {

const DeleteSongListItem = (id) => {
    fetch(`http://localhost:8088/songs/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(() => {
        getAllSongs()
    })
}


        return <section className="created-song">
        <div className="song-container"> 
        <div className="song-and-artist">
            <div><strong>Song: </strong> {name}</div>
            <div>Artist: {artist}</div>
            </div>

            <Link to={`/songs/${id}`}>
                View Song Details
            </Link>

            <button onClick={() => { DeleteSongListItem(id)}}>Delete</button>
        </div>
    </section>
}

//this function is called in the AllSongs componenet, where all the songs are looped over. 