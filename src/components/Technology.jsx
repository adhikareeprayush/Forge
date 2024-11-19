import Tab2 from "./Tab2"

const TechnologyInfrastructure = () => {
  return (
    <section className="technology d-flex flex-column gap-2 mx-2 my-4 rounded-4" id="technical_infrastructure">
      <div className="overlay z-0 rounded-4"></div>
      <div className="content z-1">
        <div className="head">TECHNOLOGY <br />
          <span className="text-white">INFRASTRUCTURE</span>
        </div>
        <p className="w-75 mx-auto text-center">
          Forge’s Technical Infrastructure includes the various machinery, equipment, and tools to help innovators design, build, test, and manufacture industrial tech solutions - this comprehensive infrastructure setup comprises 3 labs including Product Innovation Labs, Product Compliance Labs, and Pilot Production Facilities.
        </p>
        <Tab2 />
      </div>
    </section>
  )
}

export default TechnologyInfrastructure
