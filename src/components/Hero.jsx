import Nav from "./Nav"

const Hero = () => {
    return (
        <div className="hero min-vh-100 w-100">
            <Nav />
            <div className="overlay-black-linear-gradient"></div>
            <div className="d-flex flex-column gap-2 align-items-center hero-content">
                <div className="hero-head">
                    Industrial Innovation Studios for Accelerated Product Development
                </div>
                <div className="hero-desc">
                    Developing, Advancing, Applying Discoveries and Breakthroughs To
                    Drive Innovation-Catalysed, Enduring Competitive Advantages
                </div>
            </div>
        </div>
    )
}

export default Hero
