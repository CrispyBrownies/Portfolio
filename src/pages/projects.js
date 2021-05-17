
import React from 'react';
import '../styles/projects.scss'
import wmapTN from '../img/WMAPTn.png'

class Projects extends React.Component {
    render() {
        return (
            <div className="Projects">
                <h1>Projects</h1>
                <div className="ProjectWrap">
                    <div className="proj1">
                        <h2 className="title">WMAP Attitude and Control</h2>
                        <p className="desc">
                            The goal of this project was to use both attitude kinematic equations and numerical integration methods to accurately map and predict the location and orientation of the WMAP satellite.
                            The project required understanding of attitude transformations, attitude kinematics, Euler and quaternion attitude representations, Runge Kutta routine, and flight controllers.
                            The entire project was completed using Python.
                        </p>
                        <img className="pic" src={wmapTN} alt="WMAP Pic"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects