import AccueilContent from "../components/AccueilContent/AccueilContent";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Accueil = () => {
    return (
        <>
            <Navbar active="accueil" />

            <AccueilContent />

            <Footer />
        </>
    );
};

export default Accueil;
