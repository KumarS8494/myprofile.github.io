import React from 'react'
import Common from './Common'
import img1 from "../images/img-1.png"
const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={img1}
                visit="/Skills"
                btname="Get Started"
            />
        </>
    )
}

export default Home
