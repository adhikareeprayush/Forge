import fabLogo from "../assets/Images/India_s Largest Fab Lab Network.png";

const IndiaLargest = () => {
    return (
        <section className="banner-2 position-relative py-5">
            {/* Overlay */}
            <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

            {/* Content */}
            <div className="container position-relative">
                <div className="row align-items-start align-items-md-center">
                    {/* Image Section */}
                    <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                        <img src={fabLogo} alt="Fab Lab Network" className="img-fluid" />
                    </div>

                    {/* Text Section */}
                    <div className="col-12 col-md-8">
                        <p className="text-white text-center text-md-start">
                            Forge operates a Network of Industrial Innovation Labs spanning 7 different cities of Tamil Nadu, which constitutes the largest network of Fab Labs accredited by the Fab Foundation, USA - that deliver India’s ONLY university-accredited Innovation Practicum. These Industrial Innovation Labs have state-of-the-art lab facilities equipped with advanced digital fabrication tools such as 3D printers, laser cutters, CNC machines, and electronics prototyping equipment with the primary objective to democratise access to manufacturing technologies across students, innovators, startups, and industrial companies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndiaLargest;
