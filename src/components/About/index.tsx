import styles from "./styles.module.css";
import data from "../../assets/data.json";

const About = () => {
    return (
        <div id="about" className={styles.about_container}>
            <h2 className={styles.about_heading}>ABOUT ME</h2>
            <p className={styles.about_content}>
                {data.me_description}
                {/* I am a passionate software engineer that specializes
                indeveloping modern, reponsive and SEO optimized websites with
                React and Typescript. Currently based in France I am looking for
                exciting opportunities in my home country or with foreign
                companies.
                I have successfully completed an associate's degree in the field of
                web development in France. */}
            </p>
        </div>
    );
};

export default About;
