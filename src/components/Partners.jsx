import government from "../assets/Screenshot 2024-11-04 at 3.36.02 PM.png"
import fabFoundation from "../assets/Screenshot 2024-11-04 at 3.36.35 PM.png"
import sriangam from "../assets/Image 25.png"
import madurai from "../assets/Image 26.png"
import thirunelveli from "../assets/Image 28.png"
import salen from "../assets/Image 27.png"
import industry from "../assets/Screenshot 2024-11-04 at 3.39.17 PM.png"
const Partners = () => {
    return (
        <section className="partners">
            <div className="head">Partners</div>
            <div className="d-flex flex-column gap-4 w-100 align-items-center justify-content-between">
                <div className="d-flex flex-column gap-2 w-100">
                    <div className="d-flex align-items-center w-100 gap-4">
                        <span>Goverment</span>
                        <div className="hr"></div>
                    </div>
                    <div className="w-100">
                        <img src={government} alt="" className="w-100" />
                    </div>
                </div>
                <div className="d-flex flex-column gap-2 w-100">
                    <div className="d-flex align-items-center w-100 gap-4">
                        <span>Academia</span>
                        <div className="hr"></div>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center gap-2" style={{ height: "80px" }}>
                        <img src={fabFoundation} alt="" />
                        <div className="d-flex flex-column align-items-center gap-1 w-100 h-100">
                            <img src={sriangam} alt="" className="w-100 h-100 object-fit-contain " />
                            <span className="company-name">GCE, Srirangam</span>
                        </div>
                        <div className="d-flex flex-column align-items-center gap-1 w-100 h-100">
                            <img src={madurai} alt="" className="w-100 h-100 object-fit-contain" />
                            <span className="company-name">GCE, Srirangam</span>
                        </div>
                        <div className="d-flex flex-column align-items-center gap-1 w-100 h-100">
                            <img src={thirunelveli} alt="" className="w-100 h-100 object-fit-contain" />
                            <span className="company-name">GCE, Srirangam</span>
                        </div>
                        <div className="d-flex flex-column align-items-center gap-1 w-100 h-100">
                            <img src={salen} alt="" className="w-100 h-100 object-fit-contain" />
                            <span className="company-name">GCE, Srirangam</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column gap-2 w-100 mt-4">
                    <div className="d-flex align-items-center w-100 gap-4">
                        <span>Academia</span>
                        <div className="hr"></div>
                    </div>
                    <div className="w-100">
                        <img src={industry} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
