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
                    <img className={styles.github_img} src={github_logo}></img>
                </a>
            </p>
            <h2 id="contact">CONTACT</h2>
            <p>(+33) 123456789</p>
            <p>JAN.GREN[AT]MYMAIL[DOT]COM</p>
            <p className={styles.footer_content}>COPYRIGHT ©2023 JAN GREN</p>
        </footer>
    );
};

export default Footer;
