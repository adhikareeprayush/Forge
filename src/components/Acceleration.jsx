import Tab3 from "./Tab3"

const Acceleration = () => {
    return (
        <section className="technology acceleration d-flex flex-column gap-2 mx-2 my-4 rounded-4" id="acceleration">
            <div className="overlay z-0 rounded-4"></div>
            <div className="content z-1">
                <div className="head">
                    <span className="text-white">PRODUCT <br />ACCELERATION</span>
                </div>
                <p className="mx-auto text-center head-p">
                    Supplementing its world-class technical infrastructure, Forge.Labs also provides the requisite processes, tools, techniques, and technical expertise applied in product development to help innovators build industry-grade products that achieve Product-Market Fit in the shortest time, at the lowest cost, and with minimal risk.
                </p>
                <Tab3 />
            </div>
        </section>
    )
}

export default Acceleration
