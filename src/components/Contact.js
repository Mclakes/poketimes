// import React, { useState } from "react";
import React, { useEffect } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";   

const Contact = (props) => {
    // console.log(props)
    const navigate = useNavigate();
    // // const [Lekan, setLekan] = useState("");
    // navigate("/about");

    useEffect(() => {
        const timer = setTimeout(() => navigate("/about"), 2000);
        return () => clearTimeout(timer);
      });

    //not working ... especially push and history
    // this is removed in react version  6 and above

    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    // navigate("/about")
    
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet quis rerum, nisi nihil ad pariatur. Autem, quasi voluptas fugiat, sequi quos earum quod nihil rerum, temporibus praesentium eum id.</p>
        </div>
    )
}

export default Contact;