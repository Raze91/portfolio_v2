import "./SkillsContent.css";
import Aside from "../Aside/Aside";

import ReactIcon from "../../assets/images/skills/reactjs.png";
import JsIcon from "../../assets/images/skills/javascript.png";
import HtmlIcon from "../../assets/images/skills/html.png";
import CssIcon from "../../assets/images/skills/css.png";
import XStateIcon from "../../assets/images/skills/xstate.png";
import StyledIcon from "../../assets/images/skills/styled.png";
import StorybookIcon from "../../assets/images/skills/storybook.png";
import GitIcon from "../../assets/images/skills/git.png";
import TsIcon from "../../assets/images/skills/typescript.png";
import ReduxIcon from "../../assets/images/skills/redux.png";
import IonicIcon from "../../assets/images/skills/ionic.png";
import FlutterIcon from "../../assets/images/skills/flutter.png";
import VueIcon from "../../assets/images/skills/vue.png";
import JestIcon from "../../assets/images/skills/jest.png";
import CypressIcon from "../../assets/images/skills/cypress.png";
import JiraIcon from "../../assets/images/skills/jira.png";
import PhpIcon from "../../assets/images/skills/php.png";
import LaravelIcon from "../../assets/images/skills/laravel.png";
import SymfonyIcon from "../../assets/images/skills/symfony.png";
import ApiIcon from "../../assets/images/skills/apiplatform.svg";
import NodeIcon from "../../assets/images/skills/node.png";
import ExpressIcon from "../../assets/images/skills/express.png";

const SkillsContent = () => {
    return (
        <main className="tmp-main">
            <section className="competences-content tmp-content">
                <header>
                    <h1 className="tmp-title1">Mes compétences</h1>
                    <p>
                        Dans cette page, je vous présente les compétences que
                        j'ai appris tout au long de mes formations.
                    </p>
                </header>

                <h2 className="tmp-title2">Compétences informatiques</h2>

                <div className="skills-section">
                    <h3 className="tmp-title3">
                        Technologies les mieux maitrisées :
                    </h3>

                    <div className="skills-icons-list">
                        <div>
                            <img
                                src={ReactIcon}
                                alt="ReactJS"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={JsIcon}
                                alt="JavaScript"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={HtmlIcon}
                                alt="HTML5"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={CssIcon}
                                alt="CSS3"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={XStateIcon}
                                alt="XState"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={StyledIcon}
                                alt="Styled-Components"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={StorybookIcon}
                                alt="Storybook"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={GitIcon}
                                alt="Git"
                                className="img-responsive"
                            />
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h3 className="tmp-title3">
                        Technologies en cours de maitrises :{" "}
                    </h3>

                    <div className="skills-icons-list">
                        <div>
                            <img
                                src={TsIcon}
                                alt="Typescript"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={ReduxIcon}
                                alt="Redux"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={IonicIcon}
                                alt="Ionic"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={FlutterIcon}
                                alt="Flutter"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={VueIcon}
                                alt="VueJs"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={JestIcon}
                                alt="Jest"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={CypressIcon}
                                alt="Cypress"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={JiraIcon}
                                alt="Jira"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={PhpIcon}
                                alt="Php"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={LaravelIcon}
                                alt="Laravel"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={SymfonyIcon}
                                alt="Symfony"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={ApiIcon}
                                alt="Api Platform"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={NodeIcon}
                                alt="NodeJS"
                                className="img-responsive"
                            />
                        </div>
                        <div>
                            <img
                                src={ExpressIcon}
                                alt="Express"
                                className="img-responsive"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="tmp-title2">Compétences linguistiques</h2>

                <ul className="languages-list">
                    <li>Anglais : B2 - C1</li>
                </ul>
            </section>

            <Aside />
        </main>
    );
};

export default SkillsContent;
