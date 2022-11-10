import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Post extends Component {
    state = {
        post: null
    }

    componentDidMount () {
        console.log(this.props.params.post_id)
        let id = this.props.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                }) 
                // console.log(res)                
            })
            
        // this.setState({
        //     id: id
        // })
    }   

    // fetchData = id => {
    //     // ...
    // };

    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

export default withParams(Post);