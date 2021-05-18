
import React from 'react';
import SCLogo from '../img/sign1.png'

class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <img alt = 'SC Logo' className = 'logo' src= {SCLogo} draggable="false"></img>
                <div className='NavButtonWrap'>
                    {/* <button className="btn from-top">Home</button> */}
                    <button className='btn from-top'>About Me</button>
                    <button className='btn from-top'>Projects</button>
                    
                    {/* <Link to="/">
                        
                    </Link>
                    <Link to="/aboutme">
                        
                    </Link>
                    <Link to="/projects">
                        
                    </Link> */}
                    <a href='https://github.com/CrispyBrownies' target="_blank" rel="noreferrer">
                        <button className ="btn from-top">GitHub</button>
                    </a>
                    <button className ='btn from-top'>Contact Me</button>
                    {/* <Link to="/contact">
                        
                    </Link> */}
                </div>
            </div>
        )
    }
}

export default NavBar;