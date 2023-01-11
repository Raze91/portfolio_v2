import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SkillsContent from "../components/SkillsContent/SkillsContent";

const Skills = () => {
    return (
        <>
            <Navbar active={"skills"} />
            <SkillsContent />
            <Footer />
        </>
    );
};

export default Skills;
