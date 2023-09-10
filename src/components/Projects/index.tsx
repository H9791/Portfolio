import styles from "./styles.module.css";
import ProjectsCarousel from "../Carousel";

const Projects = () => {
    return (
        <>
            <section className={styles.section_carousel}>
                <h2 id="projects" className={styles.projects_heading}>
                    PROJECTS
                </h2>
                <ProjectsCarousel />
            </section>

            {/* <section className={styles.projects_container}>
                <h2 className={styles.projects_heading}>Projects</h2>
                <div className={styles.projects}>
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
                </div>
            </section> */}
        </>
    );
};

export default Projects;
