import logo from "../assets/Image 33.png"

const Nav = () => {
    return (
        <nav className="d-flex align-items-center justify-content-between px-5 py-4 w-100">
            <div className="d-flex align-items-center gap-2">
                <img src={logo} alt="" className="logo" />
                <div className="logo-text" ><span className="text-orange">FORGE.</span>LABS</div>
            </div>
            <ul className="d-flex align-items-center gap-3">
                <li className="nav-link active">TECHNICAL INFRASTRUCTURE</li>
                <li className="nav-link">PRODUCT ACCELERATION</li>
                <button className="btn btn-orange">Contact</button>
            </ul>
        </nav>
    )
}

export default Nav
