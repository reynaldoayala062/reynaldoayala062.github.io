import React from 'react';
import pdf from '../images/Reynaldo Ayala Resume - Google Docs.pdf'

class Resume extends React.Component {
    render() {
        return(
            <div>
                <h3>Resume</h3>
                <a href={pdf} target="blank" >Click here for my pdf</a>
            </div>
        )
    }
}

export default Resume