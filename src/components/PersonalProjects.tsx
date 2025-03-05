import { PersonalProject } from "./PersonalProject";
import styles from "./personalProject.module.css";
export function PersonalProjects() {
  return (
    <section className={styles.personalProjectsContainer}>
      <PersonalProject title="Game" />
      <PersonalProject title="CRM NExtjs" />
      <PersonalProject title="CRM NExtjs" />
      <PersonalProject title="CRM NExtjs" />
    </section>
  );
}
