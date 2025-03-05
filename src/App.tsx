// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
import styles from "./App.module.css";
import { PersonalProjects } from "./components/PersonalProjects";

import { Works } from "./components/works";
function App() {
  // useEffect(() => {
  //   Aos.init();
  // });
  return (
    <>
      <div className={styles.auroraImageContainer} />
      <header className={styles.personalInfo}>
        <div className={styles.textPersonalInfoContainer}>
          <h2>FULL STACK DEVELOPER</h2>
          <p>Alejandro Guzmán Torres</p>
        </div>
        <p className={styles.introduction}>
          Desarrollador Full Stack con experiencia en el diseño, desarrollo y
          despliegue de aplicaciones web y móviles, incluyendo CRMs
          personalizados y proyectos completos desde su concepción hasta su
          implementación. Especializado en crear soluciones escalables y
          eficientes, combino habilidades en frontend y backend para ofrecer
          productos de calidad. Apasionado por la innovación, el aprendizaje
          continuo y la resolución de desafíos técnicos que aporten valor a los
          equipos y proyectos en los que participo.
        </p>
      </header>
      <main className={styles.experience}>
        <Works />
        <PersonalProjects />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
