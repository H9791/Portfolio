import styles from "./styles.module.css";
//import ReactIcon from "../../assets/React-icon.svg";
import data from "../../assets/data.json";
import hand from "../../../public/hand-point-right-solid.svg";
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
                                    title={skill.name}
                                    alt={skill.name}
                                ></img>
                            </p>
                        );
                    })}
                </div>

                {/* {
                    <ul className={styles.skills_other}>
                        <li>
                            {data.skills_text.map((skill) => {
                                return <li>{skill}</li>;
                            })}
                        </li>
                    </ul>
                } */}

                <div className={styles.skills_justified}>
                    {data.skills_text.map((skill) => {
                        return (
                            <>
                                {" "}
                                <img
                                    className={styles.skills_hand}
                                    src={hand}
                                    alt="hand pointer"
                                ></img>{" "}
                                {skill}
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Skills;
