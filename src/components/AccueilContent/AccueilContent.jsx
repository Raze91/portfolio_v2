import "./AccueilContent.css";

import Avatar from "../../assets/images/index/Sami_portfolio.png";
import PresentationSvg from "../../assets/images/index/presentation.svg";
import CompetencesSvg from "../../assets/images/index/skills.svg";
import ProjetsSvg from "../../assets/images/index/projects.svg";
import ImgLittleSimz from "../../assets/images/projets/Little_Simz.jpg";
import ImgEarthToMoon from "../../assets/images/projets/EarthToMoon_1.jpg";
import ImgXtremKappla from "../../assets/images/projets/XtremKappla.jpg";

export default function AccueilContent() {
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
                            href="CV_HATTAB_Sami_Alternance.pdf"
                            className="tmp-btn"
                            target="_blank"
                        >
                            Télécharger mon CV
                        </a>
                        <br />
                        <a href="contact.php" className="tmp-btn">
                            Me contacter
                        </a>
                    </div>
                </div>
            </header>

            <nav className="headings">
                <a href="presentation.html">
                    <img
                        src={PresentationSvg}
                        alt="Pictogramme représentant une carte d'identité"
                    />
                    <h2>Présentation</h2>
                    <p>
                        Mes renseignements personnels, mon parcours scolaire,
                        mes passions et mes hobbies
                    </p>
                </a>
                <a href="competences.html">
                    <img
                        src={CompetencesSvg}
                        alt="Pictogramme représentant un arc et une flêche"
                    />
                    <h2>Compétences</h2>
                    <p>
                        La liste de mes compétences en programmation et en
                        développement
                    </p>
                </a>
                <a href="Projets.html">
                    <img
                        src={ProjetsSvg}
                        alt="Pictogramme représentant une fusée encadrée"
                    />
                    <h2>Projets</h2>
                    <p>
                        Les projets les plus intéréssants sur lesquels j'ai pu
                        travailler
                    </p>
                </a>
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
                    <a href="little_simz.html" className="project">
                        <img
                            src={ImgLittleSimz}
                            alt="projet Little Simz"
                            className="img-responsive"
                        />
                        <div className="text">
                            <h3>Lab 201 Little Simz</h3>
                            <span>Mai 2019</span>
                            <p>
                                Site web évenementiel réalisé dans le cadre d'un
                                projet de 3 semaines en collaboration avec les
                                Créas.
                            </p>
                        </div>
                    </a>

                    <a href="earthToMoon.html" className="project">
                        <img
                            src={ImgEarthToMoon}
                            alt="projet StarJourney"
                            className="img-responsive"
                        />
                        <div className="text">
                            <h3>Earth To Moon</h3>
                            <span>Mai 2019</span>
                            <p>
                                Petit site de 3 pages réalisé dans le cadre d'un
                                examen.
                            </p>
                        </div>
                    </a>

                    <a href="XtremKappla.html" className="project">
                        <img
                            src={ImgXtremKappla}
                            alt="projet XtremKappla"
                            className="img-responsive"
                        />
                        <div className="text">
                            <h3>XtremKappla</h3>
                            <span>Mars 2019</span>
                            <p>
                                Jeu d'empilement de bloc sur navigateur réalisé
                                en duo avec pour contrainte l'utilisation du
                                leap motion.
                            </p>
                        </div>
                    </a>
                </div>

                <a href="Projets.html" className="tmp-btn">
                    Voir tous mes projets
                </a>
            </section>
        </main>
    );
}
