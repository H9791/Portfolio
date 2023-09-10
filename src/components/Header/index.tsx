import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header_name}>JAN GREN - REACT DEVELOPER</h1>
            <nav className={styles.navigation}>
                <ul className={styles.navigation_list}>
                    <li>
                        <a href="#about">ABOUT ME</a>
                    </li>
                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#skills">SKILLS</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
