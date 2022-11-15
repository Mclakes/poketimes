import React, { Component, } from "react";
//useEffect 
import { useParams, } from "react-router-dom";
//useNavigate, useHistory, useLocation 
import { connect } from "react-redux";
import withRouter from "../hoc/withRouter";
// import axios from "axios";
import { deletePost } from "../actions/postActions";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class Post extends Component {
    // state = {
    //     post: null
    // }

    // componentDidMount () {
    //     console.log(this.props.params.post_id)
    //     let id = this.props.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             }) 
    //             // console.log(res)                
    //         })
            
    //     // this.setState({
    //     //     id: id
    //     // })
    // }   

    // // fetchData = id => {
    // //     // ...
    // // };

    // render() {
    //     const post = this.state.post ? (
    //         <div className="post">
    //             <h4 className="center">{this.state.post.title}</h4>
    //             <p>{this.state.post.body}</p>
    //         </div>
    //     ) : (
    //         <div className="center">Loading post...</div>
    //     )
    //     return (
    //         <div className="container">
    //             { post }
    //         </div>
    //     )
    // }

    
    handleClick = () => {
        // this.props.deletePost(this.props.params.post_id)
        this.props.deletePost(this.props.post.id);
        const { navigate } = this.props
        navigate('/')

    }

    render() {
        console.log(this.props) 
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={() => this.handleClick()}>
                        Delete Post
                    </button>
                </div>
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

const mapStateToProps = (state, ownProps) => {
    // function withParams(Component) {
    //     return props => <Component {...props} params={useParams()} />;
    //   }
    let id = (ownProps.params.post_id);
    return {
        post: state.posts.find(post => post.id === id)
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {dispatch(deletePost(id))}
    }
}

export default withParams(withRouter(connect(mapStateToProps, mapDispatchToProps)(Post)));