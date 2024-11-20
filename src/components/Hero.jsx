import Nav from "./Nav";

const Hero = () => {
    return (
        <div className="hero min-vh-100 w-100 position-relative">
            <Nav />
            <div className="overlay-black-linear-gradient"></div>
            <div className="d-flex flex-column gap-3 align-items-center justify-content-center hero-content text-center md:p-2 p-3">
                <h1 className="hero-head">
                    Industrial Innovation Studios for Accelerated Product Development
                </h1>
                <p className="hero-desc">
                    Developing, Advancing, Applying Discoveries and Breakthroughs To Drive
                    Innovation Catalysed, Enduring Competitive Advantages
                </p>
            </div>
        </div>
    );
};

export default Hero;
