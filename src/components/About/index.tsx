import styles from "./styles.module.css";

const About = () => {
    return (
        <div id="about" className={styles.about_container}>
            <h2 className={styles.about_heading}>ABOUT ME</h2>
            <p className={styles.about_content}>
                I am a passionate software engineer that specializes
                indeveloping modern, reponsive and SEO optimized websites with
                React and Typescript. Currently based in France I am looking for
                exciting opportunities in my home country or with foreign
                companies.
            </p>
        </div>
    );
};

export default About;
