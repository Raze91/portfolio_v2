import "./Footer.css";

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
                    <a href="index.html">Accueil</a>
                    <br />
                    <a href="presentation.html">Présentation</a>
                    <br />
                    <a href="competences.html">Compétences</a>
                    <br />
                    <a href="Projets.html">Projets</a>
                    <br />
                    <a href="CV_Alternance_2019_SamiHattab.pdf" target="_blank">
                        CV
                    </a>
                    <br />
                    <a href="contact.php">Contact</a>
                </div>
            </nav>
        </footer>
    );
}
