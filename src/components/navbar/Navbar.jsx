import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav>
                <div className="navicon">
                    <div></div>
                </div>

                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                <Link to={"/study-timer"}>
                    <div>Study Timer</div>
                </Link>
                {/* <Link to={"/planner"}>
                    <div>Study Planner</div>
                </Link> */}
                <Link to={"/check-in"}>
                    <div>Mental Check-In</div>
                </Link>
                <Link to={"/about-us"}>
                    <div>About Us</div>
                </Link>
            </nav>
        </>
    )
}

export default Navbar