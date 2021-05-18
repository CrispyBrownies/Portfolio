
import React from 'react';
import '../styles/projects.scss'
import wmapTN from '../img/WMAPTn.png'
import rocket from '../img/rocket.png'

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
                    <div className="spacer"></div>
                    <div className="proj2">
                        <h2 className="title">Rocket Design and Fly</h2>
                        <p className="desc">
                            The purpose of this project was to allow us to experience the process of designing and sizing rockets to meet the mission requirements.
                            This project required the uuse and understanding of iterative design, material properties, flight dynamics, and flight simulations.
                            The project was completed using Python to design the rockets and OpenRocket to test fly them.
                        </p>
                        <img className="pic" src={rocket} alt="WMAP Pic"></img>
                    </div>
                    <div className="spacer"></div>
                    <div className="proj3">
                        <h2 className="title">Simulation of Genetic Evolution</h2>
                        <p className="desc">
                            The purpose of this project was to allow us to experience the process of designing and sizing rockets to meet the mission requirements.
                            This project required the uuse and understanding of iterative design, material properties, flight dynamics, and flight simulations.
                            The project was completed using Python to design the rockets and OpenRocket to test fly them.
                        </p>
                        <img className="pic" src={rocket} alt="WMAP Pic"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects