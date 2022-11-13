import React, { Component } from "react";
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';
// import rootReducer from '../reducers/rootReducer';


class Home extends Component {
    // state = {
    //     posts: [ ],
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         console.log(res)    
    //         this.setState({
    //             posts: res.data.slice(0,10)
                
    //         })            
    //     })
    // }
    render() {
        // console.log(this.props)
        // const { posts } = this.state
        const { posts } = this.props
        const postList  = posts.length ? (
            posts.map((post) => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={"/" + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>                            
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
                {postList}
                {/* <h4 className="center">Home</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet quis rerum, nisi nihil ad pariatur. Autem, quasi voluptas fugiat, sequi quos earum quod nihil rerum, temporibus praesentium eum id.</p> */}

            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home); 