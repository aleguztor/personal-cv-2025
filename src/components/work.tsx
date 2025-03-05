import { JSX } from "react";
import styles from "./work.module.css";
export function Work({
  company,
  title,
  description,
  image,
  date,
  techs,
}: {
  company: string;
  title: string;
  description: JSX.Element;
  image: string;
  date: string;
  techs: string;
}) {
  return (
    <article
      //   data-aos="fade-right"
      //   data-aos-easing="ease-in-sine"
      className={styles.workContainer}>
      <img
        src={image}
        loading="lazy"
      />
      <section className={styles.work}>
        <div className={styles.titleWork}>
          <h2>
            <strong> {title}</strong> {company}
          </h2>
          <h4>{date}</h4>
        </div>
        <div className={styles.description}> {description}</div>

        <h4 className={styles.techs}>{techs}</h4>
      </section>
    </article>
  );
}
