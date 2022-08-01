import "./Import.css"
export const Import = ({setterFunction}) => {
    return ( 
        <div className="search-container">
            <h5>Search cover songs</h5>
            <input className="import-search-box" 
            onChange={(changeEvent) => {
                setterFunction(changeEvent.target.value)
            }}
            type="text"
            placeholder="Find a song" 
            />
        </div>
       )
}