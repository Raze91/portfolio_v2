import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Presentation from "./pages/Presentation";
import Skills from "./pages/Skills";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/presentation" element={<Presentation />} />
                    <Route path="/skills" element={<Skills/>} /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
