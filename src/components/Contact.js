import React from "react";

const Contact = (props) => {
    console.log(props)
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    setTimeout(() => {
        props.history.push(`/about`);
      }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet quis rerum, nisi nihil ad pariatur. Autem, quasi voluptas fugiat, sequi quos earum quod nihil rerum, temporibus praesentium eum id.</p>
        </div>
    )
}

export default Contact;