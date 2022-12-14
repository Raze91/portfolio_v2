import React from "react";
import Avatar from "../../assets/images/index/Sami_portfolio.png";
import Aside from "../Aside/Aside";

const PresentationContent = () => {
    return (
        <main className="tmp-main">
            <section className="presentation-content tmp-content">
                <header>
                    <h1 className="tmp-title1">Sami Hattab</h1>
                    <p>Développeur Front-End</p>
                </header>

                <div className="image">
                    <img src={Avatar} alt="Sami Hattab" />
                </div>

                <h2 className="tmp-title2">Ce que je recherche : </h2>

                <p className="pres-p">
                    Récemment diplomé d'un{" "}
                    <strong>Master en développement web</strong> à l'Ecv Digital
                    de Paris, je suis actuellement à la recherche d'un poste en{" "}
                    <strong>CDI</strong> en tant que{" "}
                    <strong>Développeur Front-End ReactJS</strong> afin de
                    continuer à acquérir de l'expérience et à monter en
                    compétence.
                </p>

                <h2 className="tmp-title2">Formations : </h2>

                <p>
                    2021 - 2022 : Mastère 2 Développement Web à l'Ecv Digital de
                    Paris.
                </p>

                <p>
                    2020 - 2021 : Mastère 1 Développeur Multimédia à l'École
                    Multimédia de Paris.
                </p>

                <p>
                    2017 - 2020 : Bachelor Développement front-end à l'École
                    Multimédia de Paris.
                </p>

                <p className="pres-p">
                    2017 : Baccalauréat Economique et Sociales (Spécialitée
                    Mathématiques)
                    <br /> Lycée Jean-Pierre Timbaud Brétigny sur Orge, France
                </p>

                <h2 className="tmp-title2">Mes centres d'intérêts :</h2>

                <p className="pres-p">
                    Je suis avant tout un grand passioné de jeux-vidéos, je joue
                    à tous les genres de jeux.
                    <br /> Je m'intèresse beaucoup aux nouvelles technologies.
                    <br /> J'aime également beaucoup les animaux.
                    <br /> Pour finir, je m'intéresse aussi à la culture
                    japonaise, je regarde des animés, je lis des mangas et je
                    trouve le folklore japonais très intéressant.
                </p>
            </section>

            <Aside />
        </main>
    );
};

export default PresentationContent;
