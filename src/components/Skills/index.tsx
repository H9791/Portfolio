import styles from "./styles.module.css";
//import ReactIcon from "../../assets/React-icon.svg";
import data from "../../assets/data.json";

const Skills = () => {
    return (
        <>
            <section className={styles.skills_section}>
                <h2 className={styles.skills_heading}>Skills</h2>
                <div className={styles.skills}>
                    {data.skills.map((skill) => {
                        return (
                            <p className={styles.skill_item}>
                                <img
                                    className={styles.skill_img}
                                    src={skill.image}
                                ></img>
                            </p>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Skills;
