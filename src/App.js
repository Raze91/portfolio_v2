import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Presentation from "./pages/Presentation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/presentation" element={<Presentation />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
