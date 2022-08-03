//create a componenet to rendor a new color when the button is clicked

import { useState } from "react"

export const ButtonColorChange = ({AddingTheSongsToTheSet, songId}) => {
         //set a state for the color of the button
         const [buttonColor, setButtonColor] = useState(false)


//     // create a function for my onClick button color to change
    const ButtonColor = () => {
        // setting the button color
        setButtonColor(!buttonColor)
}

return (
    <button className={'toggle--button ' + (buttonColor ? 'toggle--close':'')} onClick={() => { AddingTheSongsToTheSet(songId, ButtonColor()) }}>{buttonColor ? 'Added' : 'Add Song'} </button>
)

}