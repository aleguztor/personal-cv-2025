import styles from "./App.module.css";

function App() {
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
      <main>
        <section></section>
      </main>
    </>
  );
}

export default App;
