import styles from "./App.module.css";
import CVESPANOL from "./assets/CV/CVALEJANDROGTESPAÑOL.pdf";
import GitHubIcon from "./assets/icons/githubIcon.png";
import linkdinIcon from "./assets/icons/linkdinIcon.png";

import { PersonalProjects } from "./components/PersonalProjects";
import { Works } from "./components/works";
function App() {
  return (
    <>
      <div className={styles.auroraImageContainer} />
      <header>
        <section className={styles.personalInfo}>
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
            continuo y la resolución de desafíos técnicos que aporten valor a
            los equipos y proyectos en los que participo.
          </p>
        </section>
        <nav>
          <button
            onClick={() =>
              window.open("https://github.com/aleguztor", "_blank")
            }
            className={`${styles.buttonIconGithub} ${styles.buttonIcon}`}>
            <img
              src={GitHubIcon}
              alt="github"
            />
          </button>
          <button
            className={`${styles.buttonIconLinkedin} ${styles.buttonIcon}`}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alejandro-g-a766091b0/",
                "_blank"
              )
            }>
            <img
              src={linkdinIcon}
              alt="linkedin"
            />
          </button>
          <a
            href={CVESPANOL}
            target="_blank"
            rel="noopener noreferrer"
            download="CVALEJANDROGTESPANOL.pdf">
            Descargar CV
          </a>
        </nav>
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
