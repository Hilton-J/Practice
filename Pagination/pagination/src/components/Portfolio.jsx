import Card from "./Card"
import HeaderTitle from "./HeaderTitle"
import portfolioData from "../portfolioData"

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen">
      <div className=" py-10 sm:py-16 md:py-20 container mx-auto ">
        <HeaderTitle title={'Portfolio'} text={'My Recent Work'} />
        <div className="px-12 py-6 w-full grid grid-cols-3 justify-center gap-10">
          {portfolioData.map((data, index) =>
            < Card key={index} image={data.image} title={data.title} github={data.github} demo={data.demo} />
          )}
          {portfolioData.map((data, index) =>
            < Card key={index} image={data.image} title={data.title} github={data.github} demo={data.demo} />
          )}
          {portfolioData.map((data, index) =>
            < Card key={index} image={data.image} title={data.title} github={data.github} demo={data.demo} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio