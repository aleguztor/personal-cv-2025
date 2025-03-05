import freelance from "@/assets/freelance.png";
import innovationStrategiesSLU from "@/assets/innovationstrategies_logo.jpeg";
import soleraIcon from "@/assets/solera.png";
import vorticeSoft from "@/assets/vorticeSoft.jpeg";
import { Work } from "./work";
export function Works() {
  return (
    <>
      <Work
        date="OCT 2023 A ACTUALIDAD "
        company="Innovation strategies SLU"
        techs="Vue3, C#, .NET, TypeScript, React, PostgreeSQL, Azure DevOps, Microsoft Azure Sql, Zustand |
Git, Jquery, API"
        description={
          <>
            <ul>
              <li>
                Desarrollo de aplicación web para la gestión de residuos interna
                de una empresa internacional (MARS) con automatización de pdfs,
                login con Microsoft, diseño personalizado y complejo, control
                del estado, formularios, subida de archivos y descarga de ellos
                a través de Azure BlobStorage y la creación de su RESTful API.
                Además, estar en contacto con el cliente en inglés y ayudar a
                tomar decisiones de la aplicación entre otras.
              </li>
              <li>
                Desarrollo de micro-servicios para crear un CRM en la empresa de
                Iberostar. Tuvimos que pasar un código antiguo a este sistema
                además de implementarlo con tecnologías más modernas y robustas.
              </li>
              <li>
                Creación de parte de la pasarela de pago de Iberostar con un
                tipo especifico. Manejar código antiguo y analizar, para después
                poder implementar dicho pago.
              </li>
              <li>
                Control de versiones con Azure para su correcto desarrollo y
                lectura/confirmación de Pull Requests para que el código sea
                correcto.
              </li>
              <li>
                Ayuda al despliegue de aplicaciones tanto de front como back con
                el uso de Azure.
              </li>
            </ul>
          </>
        }
        image={innovationStrategiesSLU}
        title="SOFTWARE ENGINEER"
      />
      <Work
        date="ENE 2023 A FEB 2024"
        company="VorticeSoft"
        techs="PHP, Symfony, JavaScript, Vue2, HTML, CSS, Flutter, API, Vuex, Twig, PostgreeSQL, Git, API"
        description={
          <>
            <ul>
              <li>
                Desarrollo de CRM para una empresa emergente en España para
                gestionar clientes, haciendo que la API sirva tanto para el CRM
                como para el uso de los clientes en una app móvil.
              </li>
              <li>
                Automatización en la creación de pdfs directamente en el back y
                descarga y subida de ellos al servicio.
              </li>
              <li>
                Creación de MVC para gestión de clientes y productos con login
                personalizado.
              </li>
              <li>
                Lider en el desarrollo y diseño de app móvil con Flutter para
                diferentes clientes. Aquí me encargaba de desarrollar y
                desplegar la app en Google Apps. Esta app podía contratar
                seguros, ver precios, descarga de archivos y un sistema de
                complejo de paginado y menús que hacía su uso fácil y amigable
                al cliente.
              </li>
              <li>
                Creación de otras app móvil para gestionar paquetería y
                empleados, con firmas digitales entre otras características.
              </li>
            </ul>
          </>
        }
        image={vorticeSoft}
        title="FULL STACK"
      />
      <Work
        date="SEP 2022 A ENE 2023"
        company="SOLERA INC"
        techs="React, .NET, Spring Boot, JavaScript, Java, SqlLite, Git, Vue, API"
        description={
          <>
            <ul>
              <li>
                Desarrollo de aplicaciones web para clientes internacionales que
                servían para diferentes marcas de coches reconocidas además de
                ayudar a la gestión y desarrollo de tickets.
              </li>
              <li>
                Implementación y creación de BBDD con gestión roles y usuarios
                para luego usarse en diferentes backs.
              </li>
              <li>Testeo de aplicaciones con Selenium.</li>
            </ul>
          </>
        }
        image={soleraIcon}
        title="FULL STACK"
      />
      <Work
        date="MAY 2022 A SEP 2022"
        company="FREELANCER"
        techs="JavaScript, HTML, CSS, PHP"
        description={
          <>
            <ul>
              <li>
                Creación de la web de saltandobarreras.org.ar para una ONG
                Argentina. Usando herramientas sencillas para que cualquier
                usuario con conocimientos mínimos pudiera cambiar algo. Al ser
                para una ONG, estuve en contacto directo con el CEO y se
                desarrolló conforme a sus necesidades.
              </li>
            </ul>
          </>
        }
        image={freelance}
        title="SOFTWARE DEVELOPER"
      />
    </>
  );
}
