import React from 'react';
import Blog from './blog'

class BlogContainer extends React.Component {

    state = {
        blogs: []
    }

    componentDidMount() {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@reynaldo_ayala")
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                blogs:  json.items
            })
        })
    }

    render() {
        console.log(this.state.blogs)
        return(
            <div className="blog-container">
                {this.state.blogs.map(blog => <Blog blog={blog}/>)}

            </div>
        )
    }
}

export default BlogContainer