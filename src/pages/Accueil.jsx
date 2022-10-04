import AccueilContent from "../components/AccueilContent/AccueilContent";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Accueil() {
    return (
        <>
            <Navbar active="accueil" />

            <AccueilContent />

            <Footer />
        </>
    );
}
