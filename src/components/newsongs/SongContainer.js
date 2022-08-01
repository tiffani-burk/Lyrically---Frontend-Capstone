import { useState } from "react"
import { AllDatabaseSongs } from "../songs/AllDatabaseSongs"
import { Import } from "./Import"

export const SongContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <Import setterFunction={setSearchTerms} />
    <AllDatabaseSongs searchTermState = {searchTerms} />
    
    </>
}