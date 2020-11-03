import React from 'react';
import { Slide } from "react-awesome-reveal";

class ProjectContainer extends React.Component {

    render() {
        return(
            <div className="project-container">
                <div className="project">
                    <Slide>
                        <div className="project-item">
                            <h2>Connecting the Dots</h2>
                            <p>Monthly expense reports with graphs and tables</p>
                            <p>Frontend: JavaScript, React.js, CSS, and HTML</p>
                            <p>Backend: Ruby on Rails </p>
                            <a href="https://github.com/reynaldoayala062/Connecting-the-Dots-Frontend" target="blank" ><h6>Git Hub Frontend</h6></a>
                            <a href="https://github.com/reynaldoayala062/Connecting-the-Dots-Backend" target="blank" ><h6>Git Hub Backend</h6></a>
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:6724318563471015936/" target="blank" ><h6>Linked In</h6></a>
                        </div>
                    </Slide>
                    <div className="project-item">
                        <iframe title="Connecting-The-Dots" width="560" height="315" src="https://www.youtube.com/embed/UMwWLrZC0zs?start=5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-item">
                        <iframe title="Block-Buster" width="560" height="315" src="https://www.youtube.com/embed/b5PyqvDaQi4?start=5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                    <Slide>
                        <div className="project-item">
                            <h2>Block Buster</h2>
                            <p>Remake of the famous Tetris Game</p>
                            <p>Frontend: JavaScript, CSS, and HTML</p>
                            <p>Backend: Ruby on Rails </p>
                            <a href="https://github.com/reynaldoayala062/block-buster" target="blank" ><h6>Git Hub</h6></a>
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:6723308305382465536/" target="blank" ><h6>Linked In</h6></a>
                        </div>
                    </Slide>
                </div>
                <div className="project">
                    <Slide>
                        <div className="project-item">
                            <h2>Finish Line</h2>
                            <p>Productivity App and Calendar Manager</p>
                            <p>Frontend: JavaScript, React.js, CSS, and HTML</p>
                            <p>Backend: Ruby on Rails </p>
                            <a href="https://github.com/reynaldoayala062/finish-line-frontend" download target="blank"><h6>Git Hub</h6></a>
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:6726499663500906496/" download target="blank"><h6>Linked In</h6></a>
                        </div>
                    </Slide>
                    <div className="project-item">
                        <iframe title="Finish-Line"width="560" height="315" src="https://www.youtube.com/embed/Qvqbt1LUQOs?start=5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-item">
                        <iframe title="Mountain-Man"width="560" height="315" src="https://www.youtube.com/embed/NqvEFH_CUa0?start=5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <Slide>
                        <div className="project-item">
                            <h2>Mountain Man</h2>
                            <p>Social Media platform for hickers.</p>
                            <p>Frontend: JavaScript, CSS, and HTML</p>
                            <p>Backend: Ruby on Rails </p>
                            <a href="https://github.com/smithspencer817/mountainman" target="blank" ><h6>Git Hub</h6></a>
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:6725052626108510208/" target="blank" ><h6>Linked In</h6></a>
                        </div>
                    </Slide>
                </div>
                <br/>
            </div>
        )
    }
}

export default ProjectContainer