import "./Footer.css";

import CV from "../../assets/Cv_HATTAB_Sami.pdf";

export default function Footer() {
    return (
        <footer className="tmp-footer">
            <section className="contact">
                <h1>Sami Hattab</h1>
                <a href="mailto:hattab_sami@yahoo.fr">hattab_sami@yahoo.fr</a>
                <br />
                <a href="tel:+33674707163">06 74 70 71 63</a>
                <br />
                <a href="https://www.linkedin.com/in/sami-hattab-b4a379175/">
                    Suivez-moi sur <strong>Linkedin</strong>
                </a>
                <br />
                <a href="https://github.com/Raze91">
                    Suivez-moi sur <strong>Github</strong>
                </a>
            </section>

            <nav className="menu">
                <h2>Menu</h2>
                <div className="links">
                    <a href="/">Accueil</a>
                    <br />
                    <a href="/presentation">Présentation</a>
                    <br />
                    <a href="/competences">Compétences</a>
                    <br />
                    <a href="/projets">Projets</a>
                    <br />
                    <a href={CV} target="_blank" rel="noreferrer">
                        CV
                    </a>
                    <br />
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </footer>
    );
}
