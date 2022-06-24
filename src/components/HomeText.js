import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./HomeText.css"



const HomeText = () => {
    return (
        <div className="homeText">
            <h1>Hi, I'm Anthony. This is my website...</h1>
            <p>I'm a third year student at UC Berkeley studying Electrical Engineering & Computer Science. 
            I've been a Software Engineering Intern at Amazon the past two summers for Selling Partner Support in Seattle and 
            Fresh Food Fast in San Diego.
            </p>
            <p> Feel free to look through my projects below. 
             Reach out if you have questions!</p>

             <div className="icons">
                <a href="https://www.linkedin.com/in/anthony-sandoval-villegas" target="_blank">
                    <FontAwesomeIcon className='icon'  icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/anthony-villegas" target="_blank">
                    <FontAwesomeIcon className='icon'  icon={faGithub} size="2x" />
                </a>
                
             </div>    
        </div>
    )

}

export default HomeText;