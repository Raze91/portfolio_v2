import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="tmp-menu" data-state={isOpen}>
            <a href="index.html" className="home-link">
                Sami Hattab
            </a>

            <div className="site-links">
                <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="/" className="active">
                    Accueil
                </a>
                <a href="/presentation">Présentation</a>
                <a href="/competences">Compétences</a>
                <a href="/projets">Projets</a>
                <a href="CV_HATTAB_Sami.pdf" target="_blank">
                    CV
                </a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}
