
import React from 'react';
import '../styles/aboutme.scss'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="AboutMe">
                <h1 className="right">About Me</h1>
                <div className="left about">
                    My name is Stephen Chen and I've recently graduated from Univeristy at Buffalo magna cum laude with a double major in Aerospace and Mechanical Engineering.
                    I'm currently working with Dr. Botta performing research on simulations with tethered space nets while also looking for a entry-level full-time position in aerospace, mechanical or software engineering.
                    I am also considering pursuing graduate school for software engineering or applied math.
                    In my free time, I am learning to improve my various skills from programming to design by completing personal projects.
                    You can find my most recent resume by clicking the link above or read more about my projects by scrolling further.
                    Thanks for visiting my portfolio!
                </div>
            </div>
        )
    }
}

export default AboutMe