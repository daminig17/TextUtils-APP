import React from 'react'
// import { Link } from 'react-router-dom';

let location = useLocation();
    React.useEffect(() => {
    }, [location]);
const Navbar = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">{props.home}</a>
                            </li>
//                             <li className="nav-item">
//                                 <a className={`nav-link ${location.pathname === "/aout" ? "active" : ""}`} aria-current="page" href="/about">{props.about}</a>
//                             </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <img onClick={props.togglemode} style={{ height: "32px", width: "32px", backgroundColor: "white", borderRadius: "10px",marginRight:"10px" }} src={props.mode === "dark" ? "https://img.icons8.com/sf-black-filled/512/moon-symbol.png" : "https://img.icons8.com/sf-regular/512/moon-symbol.png"} alt="hhii" />
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
