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
            <p>TEL: (+33) 123456789</p>
            <p>EMAIL: JAN.GREN[AT]MYMAIL[DOT]COM</p>
            <p className={styles.footer_content}>COPYRIGHT © JAN GREN</p>
        </footer>
    );
};

export default Footer;
