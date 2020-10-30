import React from 'react';
import Project from './project'

class ProjectContainer extends React.Component {

    state = {
        videos: [<iframe title="Finish-Line"width="560" height="315" src="https://www.youtube.com/embed/Qvqbt1LUQOs?start=5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, <iframe title="Mountain-Man"width="560" height="315" src="https://www.youtube.com/embed/NqvEFH_CUa0?start=5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, <iframe title="Connecting-The-Dots" width="560" height="315" src="https://www.youtube.com/embed/UMwWLrZC0zs?start=5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>, <iframe title="Block-Buster" width="560" height="315" src="https://www.youtube.com/embed/b5PyqvDaQi4?start=5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ]
    }

    render() {
        return(
            <div className="project-container">
                <h6>All Projects</h6>
                {this.state.videos.map(video => <Project video={video} />)}
            </div>
        )
    }
}

export default ProjectContainer