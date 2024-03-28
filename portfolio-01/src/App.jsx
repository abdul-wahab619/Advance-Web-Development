import "./App.css";

import EducationalHistory from "./components/EducationalHistory/EducationalHistory";
import EffortsForCountry from "./components/EffortsForCountry/EffortsForCountry";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hobbies from "./components/Hobbies/Hobbies";
import LifeAmbitions from "./components/LifeAmbitions/LifeAmbitions";
import Navigation from "./components/Navigation/Navigation";
import ProfessionalProjects from "./components/ProfessionalProjects/ProfessionalProjects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <EducationalHistory />
      <Skills />
      <ProfessionalProjects />
      <Hobbies />
      <LifeAmbitions />
      <EffortsForCountry />
      <Footer />
    </>
  );
}

export default App;
