import React from 'react';
import Project from './project'

class ProjectContainer extends React.Component {


    render() {
        return(
            <div className="project-container">

                <div className="project">
                    <div className="project-item">
                        <iframe title="Finish-Line"width="560" height="315" src="https://www.youtube.com/embed/Qvqbt1LUQOs?start=5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="project-item">
                    <a href="https://github.com/reynaldoayala062/finish-line-frontend ">Git Hub</a>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-item">
                        <iframe title="Mountain-Man"width="560" height="315" src="https://www.youtube.com/embed/NqvEFH_CUa0?start=5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="project-item">
                    <a href="https://github.com/smithspencer817/mountainman"><h1>Git Hub</h1></a>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-item">
                        <iframe title="Connecting-The-Dots" width="560" height="315" src="https://www.youtube.com/embed/UMwWLrZC0zs?start=5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="project-item">
                    <a href="https://github.com/reynaldoayala062/Connecting-the-Dots-Frontend">Git Hub Frontend</a>
                    <a href="https://github.com/reynaldoayala062/Connecting-the-Dots-Backend">Git Hub Backend</a>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-item">
                        <iframe title="Block-Buster" width="560" height="315" src="https://www.youtube.com/embed/b5PyqvDaQi4?start=5" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                    <div className="project-item">
                    <a href="https://github.com/reynaldoayala062/block-buster">Git Hub</a>
                    </div>
                </div>

            </div>
            
        )
    }
}

export default ProjectContainer