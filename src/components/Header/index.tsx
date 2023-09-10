import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header_name}>
                <p>JAN GREN</p>
                <p>REACT DEVELOPER</p>
            </h1>
            <nav className={styles.navigation}>
                <ul className={styles.navigation_list}>
                    <li>
                        <a className={styles.a_link} href="#about">
                            ABOUT ME
                        </a>
                    </li>
                    <li>
                        <a className={styles.a_link} href="#projects">
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a className={styles.a_link} href="#skills">
                            SKILLS
                        </a>
                    </li>
                    <li>
                        <a className={styles.a_link} href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
