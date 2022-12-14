import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PresentationContent from "../components/PresentationContent/PresentationContent";

const Presentation = () => {
    return (
        <>
            <Navbar active="presentation" />
            <PresentationContent />
            <Footer />
        </>
    );
};

export default Presentation;
