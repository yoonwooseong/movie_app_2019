import React from 'react';
import "./About.css";

function About(props) {
    console.log(props);
    return (
        <div className = "about_container">
            <span>
                About this page: It is an app that can know information about the movie!
            </span>
            <h5>* I will study more and make a better App</h5>
        </div>
    );
}

export default About;