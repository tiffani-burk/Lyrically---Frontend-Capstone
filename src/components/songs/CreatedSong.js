import { Link, useNavigate } from "react-router-dom"



//create a component that will accept a single song object as a prop
export const CreatedSong = ({id, name, artist}) => {

    const navigate = useNavigate()

        return <section className="created-song">
        <div className="song-container"> 
        <div className="song-and-artist">
            <div><strong>Song: </strong> {name}</div>
            <div>Artist: {artist}</div>
            </div>

            <Link to={`/songs/${id}`}>
                View Song Details
            </Link>

            <button onClick={() => {
                fetch(`http://localhost:8088/songs/${id}`, {
                    method: "DELETE"
                })
                .then((result) => {
                  result.json().then(() => {
                    navigate("/allsongs") //navs the user back to the song list
                  })
                })
            }}>Delete</button>
        </div>
    </section>
}