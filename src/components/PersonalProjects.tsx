import GameCarProject from "@/assets/projects/gameCarProject.png";
import gepetto from "@/assets/projects/geppetoBar.png";
import LolGame from "@/assets/projects/lolGameTry.png";
import Nextjs from "@/assets/projects/NExtjs.png";
import PequenoCRM from "@/assets/projects/PequeñoCRM.png";
import PiedraPapelTijera from "@/assets/projects/PiedraPapelTijera.png";
import Tapamania from "@/assets/projects/tapamania.png";
import { PersonalProject } from "./PersonalProject";
import styles from "./personalProject.module.css";
export function PersonalProjects() {
  return (
    <section className={styles.personalProjectsContainer}>
      <PersonalProject
        title="BAR TAPAMANIA"
        linkToPage="https://tapamania.vercel.app"
        image={Tapamania}
      />
      <PersonalProject
        title="Bar Geppetto's"
        linkToPage="https://pizzeria-gepettos.vercel.app"
        image={gepetto}
      />
      <PersonalProject
        title="App Nextjs, Auth, Prisma, Charts"
        linkToPage="https://github.com/aleguztor/nextjs-tech-test"
        image={Nextjs}
        description="Web para ver ventas, estadísticas y listas de productos"
      />
      <PersonalProject
        title="Lol Hardcore app"
        linkToPage="https://lol-hardcore.netlify.app/"
        description="Web para hacer un reto en el videojuego de Leage of Legends"
        image={LolGame}
      />
      <PersonalProject
        title="Piedra, papel o tijeras"
        image={PiedraPapelTijera}
        linkToPage="https://aleguztor.github.io/Piedra-papel-o-tijeras/"
      />
      <PersonalProject
        title="Pequeño CRM"
        image={PequenoCRM}
        linkToPage="https://github.com/aleguztor/Little_crm_client_lead"
        description="Compuesto de Contactos, oportunnidades y clientes"
      />
      <div />
      <PersonalProject
        title="CarProject"
        image={GameCarProject}
        description="Juego hecho en Js y HTML en búsqueda del camino correcto con poca visibilidad"
      />
    </section>
  );
}
