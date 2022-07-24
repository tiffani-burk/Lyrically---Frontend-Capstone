import { Link } from "react-router-dom"


//create a component that will accept a single song object as a prop
export const CreatedSong = ({id, name, artist}) => {

        return <section className="created-song">
        <div className="song-container"> 
        <div className="song-and-artist">
            <div><strong>Song: </strong> {name}</div>
            <div>Artist: {artist}</div>
            </div>

            <Link to={`/songs/${id}`}>
                View Song Details
            </Link>
        </div>
    </section>
 
}