import data from "../../assets/data.json";
import styles from "./styles.module.css";

const Projects = () => {
    return (
        <>
            <section className={styles.projects_container}>
                <h2 className={styles.projects_heading}>Projects</h2>
                <div className={styles.projects}>
                    {/* <div className={styles.project}> */}
                    {data.projects.map((project) => {
                        return (
                            <article
                                className={styles.project}
                                key={project.url}
                            >
                                <a target="_blank" href={project.url}>
                                    <img
                                        className={styles.project_image}
                                        src={project.image}
                                    ></img>
                                </a>
                            </article>
                        );
                    })}
                    {/* </div> */}
                </div>
            </section>
        </>
    );
};

export default Projects;
