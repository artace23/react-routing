import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="name">Ace</div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <button>Contact Us</button>
            </div>
        </nav>
    )
}