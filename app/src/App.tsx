import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import TrackPage from "./pages/track";
import ContactPage from "./pages/contact";
import ServicesPage from "./pages/services";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import FreteBotPage from "./pages/fretebot";
import CareersPage from "./pages/careers";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/rastreio" element={<TrackPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/fretebot" element={<FreteBotPage />} />
        <Route path="/trabalheconosco" element={<CareersPage />} />
      </Routes>
      <Footer />
    </>
  );
}
