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
        </>
    );
};

export default Projects;
