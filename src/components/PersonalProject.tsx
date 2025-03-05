import styles from "./personalProject.module.css";

export function PersonalProject({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <article className={styles.personalProject}>
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
