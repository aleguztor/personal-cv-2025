import personalProjects from "@/store/personalProjects";
import { sucessionOfColor } from "@/util";
import { PersonalProject } from "./PersonalProject";
import styles from "./personalProject.module.css";
export function PersonalProjects() {
  return (
    <section className={styles.personalProjectsContainer}>
      {personalProjects.map((personalProject, index) => {
        return (
          <PersonalProject
            key={index}
            background={sucessionOfColor(index, personalProjects.length)}
            title={personalProject.title}
            linkToPage={personalProject.linkToPage}
            image={personalProject.image}
            description={personalProject.description}
          />
        );
      })}
    </section>
  );
}
