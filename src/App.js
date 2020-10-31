import React from 'react';
import NavBar from './components/navbar'
import Home from './components/home'
import ProjectContainer from './components/project_container'
import BlogContainer from './components/blog_container'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';

class App extends React.Component {

  state = {
    page: "Home"
  }

  handlePage = (page) => {
    this.setState({
      page: page
    })
  }

  render() {
    return(
      <div className="app">
        <NavBar handlePage={this.handlePage} />
        <div>
          <Home/>
        </div>
        <div>
          <ProjectContainer/>
        </div>
        

        {/* {this.state.page === "Project" ? <ProjectContainer/> : null}
        {this.state.page === "Home" ? <Home/> : null}
        {this.state.page === "Blog" ? <BlogContainer/> : null} */}
      </div>
    )
  }
}

export default connect()(App);