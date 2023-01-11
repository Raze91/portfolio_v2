import Footer from "../components/Footer/Footer";
import ProjectsContent from "../components/ProjectsContent/ProjectsContent";
import Navbar from "../components/Navbar/Navbar";

const Projects = () => {
    return (
        <>
            <Navbar active={"projects"} />
            <ProjectsContent />
            <Footer />
        </>
    );
};

export default Projects;
