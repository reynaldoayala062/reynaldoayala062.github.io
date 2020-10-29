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
                        src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
                        src="https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Languages</h3>
                        <p>Ruby, Ruby on Rails, JavaScript, React.js, HTML, and CSS</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Blogs</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Home