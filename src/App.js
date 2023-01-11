import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Presentation from "./pages/Presentation";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/presentation" element={<Presentation />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
