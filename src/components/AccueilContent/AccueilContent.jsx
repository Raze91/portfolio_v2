import "./AccueilContent.css";

import Avatar from "../../assets/images/index/Sami_portfolio.png";
import PresentationSvg from "../../assets/images/index/presentation.svg";
import CompetencesSvg from "../../assets/images/index/skills.svg";
import ProjetsSvg from "../../assets/images/index/projects.svg";
import ImgLittleSimz from "../../assets/images/projets/Little_Simz.jpg";
import ImgEarthToMoon from "../../assets/images/projets/EarthToMoon_1.jpg";
import ImgXtremKappla from "../../assets/images/projets/XtremKappla.jpg";
import Cv from "../../assets/Cv_HATTAB_Sami.pdf";

export default function AccueilContent() {
    const headings = [
        {
            href: "/presentation",
            src: PresentationSvg,
            alt: "Pictogramme représentant une carte d'identité",
            title: "Présentation",
            description:
                "Mes renseignements personnels, mon parcours scolaire, mes expériences professionnelles ainsi que mes passions et hobbies",
        },
        {
            href: "/competences",
            src: CompetencesSvg,
            alt: "Pictogramme représentant un arc et une flêche",
            title: "Compétences",
            description:
                "La liste des compétences en programmation et en développement que j'ai pu acquérir au fil de mes formations et expériences professionnelles",
        },
        {
            href: "/projets",
            src: ProjetsSvg,
            alt: "Pictogramme représentant une fusée encadrée",
            title: "Projets",
            description:
                "Les projets les intéressants sur lesquels j'ai pu travailler",
        },
    ];

    const lastProjects = [
        {
            href: "/",
            src: ImgLittleSimz,
            alt: "Projet Little Simz",
            title: "Lab 201 Little Simz",
            description:
                "Site web évenementiel réalisé dans le cadre d'un projet de fin d'année de 3 semaines en collaboration avec les designeurs.",
        },
        {
            href: "/",
            src: ImgEarthToMoon,
            alt: "Projet EarthToMoon",
            title: "EarthToMoon",
            description:
                "Petit site de 3 pages réalisé dans le cadre d'un examen.",
        },
        {
            href: "/",
            src: ImgXtremKappla,
            alt: "Projet XtremKappla",
            title: "XtremKappla",
            description:
                "Jeu d'empilement de bloc sur navigateur réalisé en duo avec pour contrainte l'utilisation du leap motion.",
        },
    ];
    return (
        <main className="tmp-main home">
            <header>
                <div className="image">
                    <img
                        src={Avatar}
                        alt="Sami Hattab"
                        className="img-responsive"
                    />
                </div>

                <div className="text">
                    <h1 className="tmp-title1">Sami Hattab</h1>
                    <p>
                        23 ans <span className="picto-location"></span>
                        Brétigny sur Orge, Île de France
                        <br />
                        Diplomé d'un Master en Développement Web à L’Ecv
                        Digitale de Paris
                        <br />
                        Développeur front-end
                    </p>
                    <div className="buttons">
                        <a
                            href={Cv}
                            className="tmp-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Télécharger mon CV
                        </a>
                        <br />
                        <a href="/contact" className="tmp-btn">
                            Me contacter
                        </a>
                    </div>
                </div>
            </header>

            <nav className="headings">
                {headings.map((item, key) => (
                    <a href={item.href} key={key}>
                        <img src={item.src} alt={item.alt} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </a>
                ))}
            </nav>

            <section className="last-projects">
                <h2 className="tmp-title2">Derniers Projets</h2>

                <p>
                    Voici un aperçu des trois derniers projets que j'ai réalisé.
                    <br />
                    N'hésitez pas à aller voir les autres projets en cliquant
                    sur "Voir tous mes projets" !
                </p>

                <div className="projects">
                    {lastProjects.map((item, key) => (
                        <a href={item.href} className="project" key={key}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="img-responsive"
                            />
                            <div className="text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <a href="/projets" className="tmp-btn">
                    Voir tous mes projets
                </a>
            </section>
        </main>
    );
}
