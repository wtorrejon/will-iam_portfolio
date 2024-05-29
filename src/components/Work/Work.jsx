import CardWorks from "../CardWorks/CardWorks";
import "./Work.css";

const dataWorks = [
  {
    id: 1,
    tittle: "Zeta innovation",
    skills: "WEB DESING",
    link: "https://wtorrejon.github.io/zetabioinnovacion.github.io/?#nosotros",
    image:
      "https://github.com/wtorrejon/assets/blob/main/imgWorks/ZetainnovationWeb.PNG?raw=true",
  },
  {
    id: 2,
    tittle: "Zeta innovation",
    skills: "HTML, CSS, JS",
    link: "https://wtorrejon.github.io/zetabioinnovacion.github.io/?#nosotros",
    image:
      "https://github.com/wtorrejon/assets/blob/main/imgWorks/ZetainnovationWeb.PNG?raw=true",
  },
  {
    id: 3,
    tittle: "Zeta innovation",
    skills: "HTML, CSS, JS",
    link: "https://wtorrejon.github.io/zetabioinnovacion.github.io/?#nosotros",
    image:
      "https://github.com/wtorrejon/assets/blob/main/imgWorks/ZetainnovationWeb.PNG?raw=true",
  },
  {
    id: 4,
    tittle: "Zeta innovation",
    skills: "HTML, CSS, JS",
    link: "https://wtorrejon.github.io/zetabioinnovacion.github.io/?#nosotros",
    image:
      "https://github.com/wtorrejon/assets/blob/main/imgWorks/ZetainnovationWeb.PNG?raw=true",
  },
];

const Work = () => {
  return (
    <section className="sectionWork flex flex-col ">
      <div className=" wrapperTittleWork flex flex-row items-center justify-between pl-4 pr-4">
        <h1 className="tittleWork text-5xl text-[#DAC5A799]">
          Trabajos Destacados
        </h1>
        <button className="viewAll flex flex-row items-center justify-between text-base text-[#DAC5A799]">
          <div className="flecha45">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_118_222)">
                <rect
                  x="0.529297"
                  y="0.52832"
                  width="32"
                  height="32"
                  rx="16"
                  fill="#DAC5A7"
                  fillOpacity="0.05"
                />
                <g clipPath="url(#clip0_118_222)">
                  <path
                    d="M21.4513 12.0284V19.3414C21.4513 19.4534 21.4068 19.5607 21.3277 19.6398C21.2485 19.719 21.1412 19.7634 21.0293 19.7634C20.9174 19.7634 20.81 19.719 20.7309 19.6398C20.6517 19.5607 20.6073 19.4534 20.6073 19.3414V13.0484L12.3243 21.3234C12.2445 21.3938 12.141 21.4312 12.0347 21.4279C11.9283 21.4246 11.8273 21.3809 11.7521 21.3057C11.6769 21.2304 11.6331 21.1294 11.6298 21.0231C11.6265 20.9168 11.6639 20.8132 11.7343 20.7334L20.0093 12.4504H13.7163C13.6044 12.4504 13.497 12.406 13.4179 12.3268C13.3387 12.2477 13.2943 12.1404 13.2943 12.0284C13.2943 11.9165 13.3387 11.8092 13.4179 11.73C13.497 11.6509 13.6044 11.6064 13.7163 11.6064H21.0293C21.0847 11.6064 21.1396 11.6174 21.1908 11.6386C21.242 11.6598 21.2885 11.6909 21.3277 11.73C21.3669 11.7692 21.398 11.8158 21.4192 11.867C21.4404 11.9182 21.4513 11.973 21.4513 12.0284Z"
                    fill="#DAC5A7"
                  />
                </g>
                <rect
                  x="1.0293"
                  y="1.02832"
                  width="31"
                  height="31"
                  rx="15.5"
                  stroke="#DAC5A7"
                  strokeOpacity="0.15"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_118_222"
                  x="-14.4707"
                  y="-14.4717"
                  width="62"
                  height="62"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_118_222"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_118_222"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_118_222">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(7.5293 7.52832)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p>Ver mas</p>
        </button>
      </div>
      <div className="framerWork">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {dataWorks.map((work) => (
            <CardWorks
              key={work.id}
              tittle={work.tittle}
              skills={work.skills}
              link={work.link}
              image={work.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
