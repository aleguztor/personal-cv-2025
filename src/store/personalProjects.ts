import GameCarProject from "@/assets/projects/gameCarProject.png";
import gepetto from "@/assets/projects/geppetoBar.png";
import LolGame from "@/assets/projects/lolGameTry.png";
import Nextjs from "@/assets/projects/NExtjs.png";
import PequenoCRM from "@/assets/projects/PequeñoCRM.png";
import PiedraPapelTijera from "@/assets/projects/PiedraPapelTijera.png";
import Tapamania from "@/assets/projects/tapamania.png";
import { IPersonalProject } from "@/interfaces";

const personalProjects: IPersonalProject[] = [
  {
    title: "BAR TAPAMANIA",
    linkToPage: "https://tapamania.vercel.app",
    image: Tapamania,
  },
  {
    title: "Bar Geppetto's",
    linkToPage: "https://pizzeria-gepettos.vercel.app",
    image: gepetto,
  },
  {
    title: "App Nextjs, Auth, Prisma, Charts",
    linkToPage: "https://github.com/aleguztor/nextjs-tech-test",
    image: Nextjs,
    description: "Web para ver ventas, estadísticas y listas de productos",
  },
  {
    title: "Lol Hardcore app",
    linkToPage: "https://lol-hardcore.netlify.app/",
    description: "Web para hacer un reto en el videojuego de Leage of Legends",
    image: LolGame,
  },
  {
    title: "Piedra, papel o tijeras",
    image: PiedraPapelTijera,
    linkToPage: "https://aleguztor.github.io/Piedra-papel-o-tijeras/",
  },
  {
    title: "Pequeño CRM",
    image: PequenoCRM,
    linkToPage: "https://github.com/aleguztor/Little_crm_client_lead",
    description: "Compuesto de Contactos, oportunnidades y clientes",
  },
  {
    title: "CarProject",
    image: GameCarProject,
    linkToPage: "https://github.com/aleguztor/CarProyect",
    description:
      "Juego hecho en Js y HTML en búsqueda del camino correcto con poca visibilidad",
  },
];

export default personalProjects;
