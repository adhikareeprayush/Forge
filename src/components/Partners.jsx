import government from "../assets/Screenshot 2024-11-04 at 3.36.02 PM.png";
import fabFoundation from "../assets/Screenshot 2024-11-04 at 3.36.35 PM.png";
import sriangam from "../assets/Image 25.png";
import madurai from "../assets/Image 26.png";
import thirunelveli from "../assets/Image 28.png";
import salen from "../assets/Image 27.png";
import industry from "../assets/Screenshot 2024-11-04 at 3.39.17 PM.png";

const Partners = () => {
    return (
        <section className="partners py-5">
            {/* Section Header */}
            <div className="text-center mb-5">
                <h2 className="head">Partners</h2>
            </div>

            {/* Government Section */}
            <div className="mb-5">
                <div className="d-flex align-items-center gap-3">
                    <span className="fw-bold">Government</span>
                    <div className="hr flex-grow-1 bg-dark" style={{ height: "2px" }}></div>
                </div>
                <div className="mt-3">
                    <img src={government} alt="Government Partner" className="img-fluid w-100" />
                </div>
            </div>

            {/* Academia Section */}
            <div className="mb-5">
                <div className="d-flex align-items-center gap-3">
                    <span className="fw-bold">Academia</span>
                    <div className="hr flex-grow-1 bg-dark" style={{ height: "2px" }}></div>
                </div>
                <div className="row g-3 mt-3">
                    {/* Fab Foundation */}
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <img src={fabFoundation} alt="Fab Foundation" className="img-fluid" />
                    </div>

                    {/* Other Partners */}
                    <div className="col-6 col-md-6 col-lg-2 text-center">
                        <img src={sriangam} alt="GCE, Srirangam" className="img-fluid object-fit-contain" />
                        <span className="company-name d-block mt-2">GCE, Srirangam</span>
                    </div>
                    <div className="col-6 col-md-6 col-lg-2 text-center">
                        <img src={madurai} alt="GCE, Madurai" className="img-fluid object-fit-contain" />
                        <span className="company-name d-block mt-2">GCE, Madurai</span>
                    </div>
                    <div className="col-6 col-md-6 col-lg-2 text-center">
                        <img src={thirunelveli} alt="GCE, Thirunelveli" className="img-fluid object-fit-contain" />
                        <span className="company-name d-block mt-2">GCE, Thirunelveli</span>
                    </div>
                    <div className="col-6 col-md-6 col-lg-2 text-center">
                        <img src={salen} alt="GCE, Salem" className="img-fluid object-fit-contain" />
                        <span className="company-name d-block mt-2">GCE, Salem</span>
                    </div>
                </div>
            </div>

            {/* Industry Section */}
            <div>
                <div className="d-flex align-items-center gap-3">
                    <span className="fw-bold">Industry</span>
                    <div className="hr flex-grow-1 bg-dark" style={{ height: "2px" }}></div>
                </div>
                <div className="mt-3">
                    <img src={industry} alt="Industry Partner" className="img-fluid w-100" />
                </div>
            </div>
        </section>
    );
};

export default Partners;
