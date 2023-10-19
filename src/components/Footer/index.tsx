import styles from "./styles.module.css";
import github_logo from "../../assets/github-mark.svg";
import data from "../../assets/data.json";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.github_container}>
                <a
                    className={styles.github_link}
                    target="_blank"
                    href="https://www.github.com"
                >
                    <a href="https://github.com/H9791">
                        <img
                            className={styles.github_img}
                            src={github_logo}
                            alt="github"
                        ></img>
                    </a>
                </a>
            </p>
            <h2 id="contact">CONTACT</h2>

            {/* <p>(+33) 123456789</p>
            <p>JAN.GREN[AT]MYMAIL[DOT]COM</p>
             */}

            <p>{data.me_contact.tlf}</p>
            <p>{data.me_contact.email}</p>
            <p className={styles.footer_content}>COPYRIGHT ©2023 JAN GREN</p>
        </footer>
    );
};

export default Footer;
