import React, { useState } from 'react'
function Greetings() {
    const [isShown, setisShown] = useState(false);

    const toggle = () => {
        setisShown((isShown) => !isShown)
    }
    return (
        <>
            <h1>Welcome to my product</h1>
            <button onClick={toggle}>Chnage</button>{isShown && <p>See more item here</p>}
        </>
    )
}

export default Greetings