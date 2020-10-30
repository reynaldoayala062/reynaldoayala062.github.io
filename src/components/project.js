import React from 'react';

class Project extends React.Component {

    render() {
        return(
            <div className="project">
                    <div className="project-item">
                        {this.props.video}
                    </div>
                    <div className="project-item">
                        <h6>GitHub</h6>
                    </div>
            </div>
        )
    }
}

export default Project