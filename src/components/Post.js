import React, { Component } from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Post extends Component {
    state = {
        id: null
    }

    componentDidMount () {
        console.log(this.props.params.post_id)
        let id = this.props.params.post_id;
        this.setState({
            id
        })
    }   

    // fetchData = id => {
    //     // ...
    // };

    render() {
        return (
            <div className="container">
                <h4 className="center ">{this.state.id}</h4>
            </div>
        )
    }
}

export default withParams(Post);