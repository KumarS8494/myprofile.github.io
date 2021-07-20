import React from 'react'
import Common from './Common'
import img1 from "../images/img-1.png"
export const About = () => {
    return (
        <>
            <Common
                name="Welcome to About Us "
                imgsrc={img1}
                visit="/Skills"
                btname="Contact Now"
            />
        </>
    )
}

export default About;
