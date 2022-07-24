import { Link } from "react-router-dom"


export const CreatedSong = (id, name) => {

        return <section className="created-song">
        <div className="createdsong-container"> <div><strong>song: </strong>  {name} </div>
            <Link to={`/songs/${id}`}>
                View Song Details
            </Link>


        </div>


    </section>
 
}