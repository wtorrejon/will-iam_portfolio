import CardWorks from "../CardWorks/CardWorks"
import "./Work.css"

const dataWorks = [
  {
    id: 1,
    tittle: "Zeta innovation",
    skills: "WEB DESING",
    link: "https://wtorrejon.github.io/zetabioinnovacion.github.io/?#nosotros",
    image: "https://github.com/wtorrejon/assets/blob/main/imgWorks/ZetainnovationWeb.PNG?raw=true"
  },
  {
    id: 2,
    tittle: "Zeta innovation",
    skills: "HTML, CSS, JS",
    link: "https://wtorrejon.github.io/zetabioinnovacion.github.io/?#nosotros",
    image: "https://github.com/wtorrejon/assets/blob/main/imgWorks/ZetainnovationWeb.PNG?raw=true"
  },
  {
    id: 3,
    tittle: "Zeta innovation",
    skills: "HTML, CSS, JS",
    link: "https://wtorrejon.github.io/zetabioinnovacion.github.io/?#nosotros",
    image: "https://github.com/wtorrejon/assets/blob/main/imgWorks/ZetainnovationWeb.PNG?raw=true"
  },
  {
    id: 4,
    tittle: "Zeta innovation",
    skills: "HTML, CSS, JS",
    link: "https://wtorrejon.github.io/zetabioinnovacion.github.io/?#nosotros",
    image: "https://github.com/wtorrejon/assets/blob/main/imgWorks/ZetainnovationWeb.PNG?raw=true"
  },

]

const Work = () => {
  return (
    <section className="sectionWork flex flex-col ">
      <div>
        <h1 className=" text-sm text-[#DAC5A799]">
          Work
        </h1>
      </div>
      <div className="framerWork">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {
            dataWorks.map((work) => (
              <CardWorks
                key={work.id}
                tittle={work.tittle}
                skills={work.skills}
                link={work.link}
                image={work.image}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Work