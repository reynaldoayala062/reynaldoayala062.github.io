import React from 'react';
import Linkedin from '../images/Screen Shot 2020-10-31 at 12.45.59 PM.png'
import Youtube from '../images/Screen Shot 2020-10-31 at 10.42.04 AM.png'
import Facebook from '../images/Screen Shot 2020-10-31 at 12.53.27 PM.png'
import Github from '../images/Screen Shot 2020-10-31 at 10.44.57 AM.png'
import Medium from '../images/Screen Shot 2020-10-31 at 12.55.06 PM.png'

class NavBar extends React.Component {

    handleClick = (e) => {
        this.props.handlePage(e.target.innerText)
    }

    render() {
        return(
            <div className="navbar">
                <h2> Reynaldo Ayala</h2>
                <div className="nav">
                    
                    <div className="nav-item">
                    <a href="https://www.linkedin.com/in/reynaldo-ayala-1b18b172/" target="blank" >
                        <img src={Linkedin} alt="" href="google.com"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UClF70456tB11P5BP5zxNfHw?view_as=subscriber" target="blank" >
                        <img src={Youtube} alt=""/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100004277175364" target="blank" >
                        <img src={Facebook} alt=""/>
                    </a>
                    <a href="https://github.com/reynaldoayala062" target="blank" >
                        <img src={Github} alt=""/>
                    </a>
                    <a href="https://medium.com/@reynaldo_ayala" target="blank" >
                        <img src={Medium} alt=""/>
                    </a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NavBar