import styles from "./styles.module.css";
import github_logo from "../../assets/github-mark.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.github_container}>
                <a
                    className={styles.github_link}
                    target="_blank"
                    href="https://www.github.com"
                >
                    {
                        <img
                            className={styles.github_img}
                            src={github_logo}
                        ></img>
                    }
                </a>
            </p>
            <p className={styles.footer_content}>Copyright © Jan Gren</p>
        </footer>
    );
};

export default Footer;
