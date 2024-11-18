import fabLogo from "../assets/fab_logo.png"

const IndiaLargest = () => {
    return (
        <section className="d-flex items-center banner-2">
            <div className="overlay"></div>
            <div className="content d-flex align-items-center justify-content-between">
                <img src={fabLogo} alt="" className="" />
                <p>Forge operates a Network of Industrial Innovation Labs spanning 7 different cities of Tamil Nadu, which constitutes the largest network of Fab Labs accredited by the Fab Foundation , USA - that deliver India’s ONLY university-accredited Innovation Practicum. These Industrial Innovation Labs have state-of-the-art lab facilities equipped with advanced digital fabrication tools such as 3D printers, laser cutters, CNC machines, and electronics prototyping equipment with the primary objective to democratise access to manufacturing technologies across students, innovators, startups and industrial companies.</p>
            </div>
        </section>
    )
}

export default IndiaLargest
