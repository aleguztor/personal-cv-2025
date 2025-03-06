import { PersonalProjectComponent } from "@/interfaces";
import { useState } from "react";
import styles from "./personalProject.module.css";

export function PersonalProject({
  title,
  description,
  image,
  linkToPage,
  background,
}: PersonalProjectComponent) {
  const [userOnProject, setUserOnProject] = useState(false);
  return (
    <article data-aos="fade-up">
      <div
        style={{ background }}
        className={`${styles.personalProjectFront} ${
          userOnProject ? styles.personalProjectFrontRotated : ""
        } `}>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        <button
          onClick={() => setUserOnProject(!userOnProject)}
          className={styles.buttonOpen}>
          {!userOnProject ? "OPEN" : "CLOSE"}
        </button>
      </div>
      <div className={`${styles.personalProjectBack} `}>
        <img
          src={image}
          loading="lazy"
        />
        <button
          onClick={() =>
            linkToPage ? window.open(linkToPage, "_blank") : null
          }>
          {linkToPage && linkToPage.includes("github.com")
            ? "Ir a Github"
            : "Ir a la web"}
        </button>
      </div>
    </article>
  );
}
