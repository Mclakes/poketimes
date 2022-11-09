import React from "react";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

const Navbar = (props) => {
    // console.log(props)
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

function withRouter (Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
          <Component
            {...props}
            router={{ location, navigate, params }}
          />
        );
    }
    return ComponentWithRouterProp;        
}

export default withRouter(Navbar);