// // create a fucntion to fetch the usernmame and password.
// // and return form inputs for the username and password and submit button and a Link to register

import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"



export const Login = () => {
    const [email, set] = useState("jane@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("lyric_user", JSON.stringify({
                        id: user.id
                    }))

                    navigate("/allsongs")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section className="login-sec">
            <div className="gif">
                        <img src="./logo.gif" alt="" />
                    </div>
                <form className="form--login" onSubmit={handleLogin}>
                 
            
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <Link to="/register">Not a member yet?</Link>
                    <fieldset>
                        <button className="SubBtn" type="submit">
                            Sign in
                        </button>

                    </fieldset>
                </form>
            </section>

        </main>
    )
}

