import React from 'react'

class Blog extends React.Component {

    renderBlog = () => {
        return(
            {__html: this.props.blog.content}
        )
    }
    render() {  
        console.log(this.props.blog.title)

        return(
            <div className="blog" >
                <h6>{this.props.blog.title}</h6>
                <div dangerouslySetInnerHTML={this.renderBlog()}></div>
            </div>
        )
    }
}

export default Blog

