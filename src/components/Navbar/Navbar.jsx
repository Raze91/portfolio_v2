import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ active }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="tmp-menu" data-state={isOpen}>
            <a href="/" className="home-link">
                Sami Hattab
            </a>

            <div className="site-links">
                <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a
                    href="/"
                    className={active === "accueil" ? "active" : undefined}
                >
                    Accueil
                </a>
                <a
                    href="/presentation"
                    className={active === "presentation" ? "active" : undefined}
                >
                    Présentation
                </a>
                <a
                    href="/skills"
                    className={active === "skills" ? "active" : undefined}
                >
                    Compétences
                </a>
                <a
                    href="/projets"
                    className={active === "projects" ? "active" : undefined}
                >
                    Projets
                </a>
                <a href="CV_HATTAB_Sami.pdf" target="_blank">
                    CV
                </a>
                {/* <a
                    href="/contact"
                    className={active === "contact" ? "active" : undefined}
                >
                    Contact
                </a> */}
            </div>
        </nav>
    );
}
