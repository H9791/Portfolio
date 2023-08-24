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
                            <article className={styles.project}>
                                {project.name}
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
