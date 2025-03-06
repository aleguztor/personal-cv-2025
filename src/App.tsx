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
          <p>alejandrogtdev@gmail.com</p>
          <p>+34 626591157</p>
          <p className={styles.name}>Alejandro Guzmán Torres</p>

          <section className={styles.containerNavButtons}>
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
          </section>
        </nav>
      </header>
      <div
        style={{
          position: "relative",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <main className={styles.experience}>
          <h1>EXPERIENCIA</h1>
          <Works />
          <h1>PROYECTOS</h1>
          <PersonalProjects />
        </main>
        <div className={styles.fondomarino} />
      </div>

      <footer>
        <p>
          Web created with React by <strong>Alejandro Guzmán Torres.</strong>
        </p>
      </footer>
    </>
  );
}

export default App;
