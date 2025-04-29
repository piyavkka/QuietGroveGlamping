import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Houses from './pages/Houses';
import BathComplex from './pages/BathComplex';
import Entertainment from './pages/Entertainment';
import Events from './pages/Events';
import {Header} from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <Router>
            <Header />

            <main style={{ minHeight: '80vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/houses" element={<Houses />} />
                    <Route path="/bath-complex" element={<BathComplex />} />
                    <Route path="/entertainment" element={<Entertainment />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
}

export default App;
