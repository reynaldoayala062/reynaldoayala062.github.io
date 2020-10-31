import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Home extends React.Component {

    render() {
        return(
            <div className="home">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Projects</h3>
                        <p>Productivity App, Monthly Expense App, and Tetris App</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Languages</h3>
                        <p>Ruby on Rails, JavaScript, React.js, HTML, and CSS</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/5708861/pexels-photo-5708861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <a href="https://medium.com/@reynaldo_ayala/how-to-use-react-bootstrap-table-on-react-js-d7006564b297 "><h1>Blogs</h1></a>
                        <p>Facial Recognition with JavaScript, How to use React Bootstrap Table on React.js, and How Hackers Make a Living: Bug Bounty Edition </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Home