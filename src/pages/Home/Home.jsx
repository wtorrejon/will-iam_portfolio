import Skills from "../../components/skills/Skills";
import Banner from "../../components/Banner/Banner.jsx";
import Work from "../../components/Work/Work.jsx";
import Cards from "../../components/cards/Cards.jsx";

function Home() {
  return (
    <div>
      <Banner />
      <Skills />
      <Cards />
      <Work />
    </div>
  );
}
export { Home };
