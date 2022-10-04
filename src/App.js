import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
