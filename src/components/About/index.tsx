import styles from "./styles.module.css";

const About = () => {
    return (
        <div id="about" className={styles.about_container}>
            <h2 className={styles.about_heading}>ABOUT ME</h2>
            <p className={styles.about_content}>
                Passionate pront-end developer, I enjoy working on diverse
                projects using broad portfolio of technologies.
            </p>
        </div>
    );
};

export default About;
