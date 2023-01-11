import "./Aside.css";
import React from "react";

const Aside = () => {
    const lastProjects = [
        {
            title: "Générateur de conseils",
            description: `Projet de FrontEnd Mentor de construction d'un composant
            générateur de conseils aléatoires avec l'api Advice Slip.`,
            isOnline: true,
            href: "https://raze91.github.io/advice-generator-app/",
        },
        {
            title: "BeerShop",
            description:
                "Partie front d'un site de vente en ligne de bierres avec paginations, page de détails et système de panier.",
            isOnline: false,
            href: "https://github.com/Raze91/Katas-ExaltIt/tree/master/beer-shop",
        },
        {
            title: "Composant QR Code",
            description:
                "Projet de FrontEnd Mentor de construction d'un composant carte contenant un qr code.",
            isOnline: true,
            href: "https://raze91.github.io/QR-Code-Component/",
        },
    ];

    return (
        <aside className="tmp-aside">
            <section className="infos">
                <h2 className="tmp-title2">Qui suis-je ?</h2>
                <p>
                    <strong>Sami Hattab</strong>, 23 ans
                    <br />
                    Habitant à Brétigny sur Orge en Île de France
                    <br />
                    Diplomé d'un Master en Développement Web à L’Ecv Digital de
                    Paris
                    <br />
                    Développeur front-end
                    <br />
                    Recherche un poste en CDI
                </p>
                <a
                    target="_blank"
                    href="CV_HATTAB_Sami_Alternance.pdf"
                    className="tmp-btn-small"
                >
                    Télécharger mon CV
                </a>
                {/* <br />
                <a href="contact.php" className="tmp-btn-small">
                    Me contacter
                </a> */}
            </section>

            <section className="projects">
                <h2 className="tmp-title2">Mes derniers projets</h2>

                {lastProjects.map((item, key) => (
                    <React.Fragment key={key}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.href} target="_blank" rel="noreferrer">
                            {item.isOnline
                                ? "Voir le projet"
                                : "Voir sur github"}
                        </a>
                    </React.Fragment>
                ))}
            </section>
        </aside>
    );
};

export default Aside;
