import styles from "./styles.module.css";
import data from "../../assets/data.json";

const About = () => {
    return (
        <div id="about" className={styles.about_container}>
            <h2 className={styles.about_heading}>ABOUT ME</h2>
            <p className={styles.about_content}>{data.me_description}</p>
        </div>
    );
};

export default About;
