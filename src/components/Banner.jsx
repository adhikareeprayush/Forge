import forgeLabs from "../assets/Images/FORGE Labs.png"

const Banner = () => {
    return (
        <section className="banner py-5 w-100">
            <div className="row w-100 align-items-center">
                {/* Headline */}
                <div className="col-12 col-md-4 text-center d-flex text-md-start align-items-start ">
                    <img src={forgeLabs} alt="" className="forge-orange" />
                </div>
                {/* Description */}
                <div className="col-12 col-md-8">
                    <p className="text-md-start">
                        The aggregate of Forge.Labs’ technology infrastructure & resources offers tools, resources and expertise to translate innovative ideas across the defence, manufacturing, precision health, climate mitigation, mobility & sustainability domains into factory-scale industrial-grade solutions - faster, better, and cheaper, by driving accelerated product development through infrastructure across the entire product innovation-compliance-certification-pilot production lifecycle.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
