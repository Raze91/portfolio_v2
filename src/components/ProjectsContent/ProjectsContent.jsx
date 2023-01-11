import "./ProjectsContent.css";
import LittleSimz from "../../assets/images/projets/Little_Simz.jpg";
import EarthToMoon from "../../assets/images/projets/EarthToMoon_1.jpg";
import XtremKappla from "../../assets/images/projets/XtremKappla.jpg";
import StarJourney from "../../assets/images/projets/StarJourney.jpg";

const ProjectsContent = () => {
    const projects = [
        {
            title: "Lab 201 Little Simz",
            src: LittleSimz,
            description: `Site internet évenementiel réalisé dans le cadre
            d'un projet de 3 semaines en collaboration avec 3 designeurs.`,
            projectHref: "",
            codeHref: "",
        },
        {
            title: "Earth To Moon",
            src: EarthToMoon,
            description: `Petit site de 3 pages réalisé dans le cadre d'un
            examen à l'École Multimédia.`,
            projectHref: "",
            codeHref: "",
        },
        {
            title: "Xtrem Kappla",
            src: XtremKappla,
            description: `Jeu d'empilement de bloc sur navigateur réalisé en
            duo avec pour contrainte l'utilisation du leap
            motion.`,
            projectHref: "",
            codeHref: "",
        },
        {
            title: "StarJourney",
            src: StarJourney,
            description: `Jeu 3d sur navigateur avec pour contrainte
            l'utilisation de modèles 3d réalisés lors du module
            précédent sur le logiciel Cinéma4d.`,
            projectHref: "",
            codeHref: "",
        },
    ];
    return (
        <main className="all-projects">
            <h2 className="tmp-title2">Tous mes projets</h2>

            <p>
                Sur cette page, vous trouverez la plupart des projets que j'ai
                pu effectuer.
            </p>

            <div className="projects">
                {projects.map((item, key) => (
                    <div className="project" key={key}>
                        <img
                            src={item.src}
                            alt={item.title}
                            className="img-responsive"
                        />
                        <div className="text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default ProjectsContent;
