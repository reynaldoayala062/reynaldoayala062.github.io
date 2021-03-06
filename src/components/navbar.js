import React from 'react';
import Linkedin from '../images/Screen Shot 2020-10-31 at 12.45.59 PM.png'
import Youtube from '../images/Screen Shot 2020-10-31 at 10.42.04 AM.png'
import Facebook from '../images/Screen Shot 2020-10-31 at 12.53.27 PM.png'
import Github from '../images/Screen Shot 2020-10-31 at 10.44.57 AM.png'
import Medium from '../images/Screen Shot 2020-10-31 at 12.55.06 PM.png'
import ResumeImg from '../images/Screen Shot 2020-11-02 at 9.00.25 PM.png'
import pdf from '../images/Reynaldo Ayala Resume - Google Docs.pdf'
import { Slide } from "react-awesome-reveal";

class NavBar extends React.Component {

    handleClick = (e) => {
        this.props.handlePage(e.target.innerText)
    }

    render() {
        return(
            <div className="navbar">
                <Slide>
                    <h2> Reynaldo Ayala Portfolio</h2>
                </Slide>
                <div className="nav">
                    
                    <div className="nav-item">
                    <a href="https://www.linkedin.com/in/reynaldo-ayala-1b18b172/" target="blank" >
                        <img className="button" src={Linkedin} alt="" href="google.com"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UClF70456tB11P5BP5zxNfHw?view_as=subscriber" target="blank" >
                        <img className="button" src={Youtube} alt=""/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100004277175364" target="blank" >
                        <img className="button" src={Facebook} alt=""/>
                    </a>
                    <a href="https://github.com/reynaldoayala062" target="blank" >
                        <img className="button" src={Github} alt=""/>
                    </a>
                    <a href="https://medium.com/@reynaldo_ayala" target="blank" >
                        <img className="button" src={Medium} alt=""/>
                    </a>
                    <a href={pdf} target="blank" >
                        <img className="button" src={ResumeImg} alt=""/>
                    </a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NavBar