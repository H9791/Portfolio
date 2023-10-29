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
                    <a href="https://github.com/H9791" target="_blank">
                        <img
                            className={styles.github_img}
                            src={github_logo}
                            alt="github"
                        ></img>
                    </a>
                </a>
            </p>
            <h2 className={styles.footer_contact} id="contact">
                CONTACT
            </h2>
            <p className={styles.footer_tlf_email}>{data.me_contact.tlf}</p>
            <p className={styles.footer_tlf_email}>{data.me_contact.email}</p>
            <p className={styles.footer_content}>COPYRIGHT ©2023 JAN GREN</p>
        </footer>
    );
};

export default Footer;
