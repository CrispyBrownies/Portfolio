
import React from 'react';
import '../styles/welcome.scss'
import pfp from '../img/pfp.jpg'
import resume from '../img/Resume2021SpringCS.pdf'

class Welcome extends React.Component {
    render() {
        return (
            <div className="WelcomeBox">
                <div className="fadeText">
                    <h1>Hi, I'm Stephen</h1>
                    <h2>Aerospace / Mechanical / Software Engineer</h2>
                    <a href={resume} target="_blank"><button  className="resume">Resume</button></a>
                </div>
                <img alt="Profile Pic" src={pfp} className="Pfp"></img>
            </div>
        )
    }
}

export default Welcome