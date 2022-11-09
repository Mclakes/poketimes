// import React, { useState } from "react";
import React, { useEffect } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function withRouter (Component) {
//     function ComponentWithRouterProp(props) {
        // let location = useLocation();
        // let navigate = useNavigate();
        // let params = useParams();
//         return (
//           <Component
//             {...props}
//             router={{ location, navigate, params }}
//           />
//         );
//     }
//     return ComponentWithRouterProp;        
// }    

const Contact = (props) => {
    // console.log(props)
    // const navigate = useNavigate();
    // // const [Lekan, setLekan] = useState("");
    // navigate("/about");

    const timer = setTimeout(() => console.log('Initial timeout!'), 1000);
    clearTimeout(timer);

       
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    // navigate("/about")
    
    // let navigate = useNavigate();
    // useEffect(setTimeout(
    //     (() => {
    //         navigate("/about");      
    //         }
    // ), 3000  )      
    // )
    // setTimeout(() => {
    //     navigate(`/about`);
    //   }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet quis rerum, nisi nihil ad pariatur. Autem, quasi voluptas fugiat, sequi quos earum quod nihil rerum, temporibus praesentium eum id.</p>
        </div>
    )
}

export default Contact;