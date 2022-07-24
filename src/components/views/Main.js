// Main will create Routes to Login, Register and Authorize, which will nest Routes to the NavBar and App
import { Routes, Route, Outlet } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { NavBar } from "../nav/NavBar"
import { Create } from "../newsongs/Create"
import { Import } from "../newsongs/Import"
import { AllSets } from "../sets/AllSets"
import { AllSongs } from "../songs/AllSongs"




export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    {<NavBar />}
                    <h1>Lyrically</h1>
                    <div>Your digital setlist...</div>

                    <Outlet />
                </>
            }>

                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/allsongs" element={<AllSongs />}></Route>
                <Route path="/setlists" element={<AllSets />}></Route>
                <Route path="/import" element={< Import />}></Route>
                <Route path="/create" element={<Create />}></Route>
            </Route>
        </Routes>
    )
}