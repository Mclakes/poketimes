import React, { Component, useEffect } from "react";
import { useParams, useNavigate, useHistory } from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";

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
        this.props.deletePost(this.props.post.id)
        console.log(this.props);
        // this.props.navigate.push("/")
        const Navigate = () => {
            const navigate = useNavigate();
            navigate('/')
            // useEffect(() => {
            //     const timer = setTimeout(() => navigate("/"), 1000);
            //     return () => clearTimeout(timer);
            //   });
            //   Navigate();
            }
        
        
        
        // useEffect(() => {
        //     const timer = setTimeout(() => this.props.navigate("/"), 1000);
        //         return () => clearTimeout(timer);
        // });
        // this.props.history.push('/')
        // useEffect(() => {
        //     const timer = () => this.props.useNavigate('/')
        //     return timer
        // })
        // this.props.navigate("/")
    }
    Navigate();

    render() {
        console.log(this.props) 
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
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
        deletePost : (id) => {dispatch({type : 'DELETE_POST', id: id})}
    }
}

export default withParams(connect(mapStateToProps, mapDispatchToProps)(Post));