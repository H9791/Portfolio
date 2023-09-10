import styles from "./styles.module.css";
//import ReactIcon from "../../assets/React-icon.svg";
import data from "../../assets/data.json";

const Skills = () => {
    return (
        <>
            <section className={styles.skills_section}>
                <h2 id="skills" className={styles.skills_heading}>
                    SKILLS
                </h2>
                <div className={styles.skills}>
                    {data.skills.map((skill) => {
                        return (
                            <p className={styles.skill_item} key={skill.name}>
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
