import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header_name}>
                <span className={styles.block_display}>JAN GREN</span>
                <span className={styles.block_display}>REACT DEVELOPER</span>
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
