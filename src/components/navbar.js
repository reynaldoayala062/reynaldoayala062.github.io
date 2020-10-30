import React from 'react';

class NavBar extends React.Component {

    handleClick = (e) => {
        this.props.handlePage(e.target.innerText)
    }

    render() {
        return(
            <div className="navbar">
                <div className="nav">
                    <div className="nav-item" onClick={this.handleClick} >
                        <h6> Home </h6>
                    </div>
                    <div className="nav-item" onClick={this.handleClick}>
                        <h6> Project </h6>
                    </div>
                    <div className="nav-item" onClick={this.handleClick}>
                        <h6> Blog </h6>
                    </div>
                    <div className="nav-item" onClick={this.handleClick}>
                        <h6> Contact </h6>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NavBar