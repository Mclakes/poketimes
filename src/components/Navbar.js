import React, {useEffect} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    // console.log(props)
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => navigate("/about"), 2000);
        return () => clearTimeout(timer);
      });
      
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

export default Navbar;