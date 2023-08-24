import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header_name}>Jan Gren - React Developer</h1>
            <nav className={styles.navigation}>
                <ul className={styles.navigation_list}>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
