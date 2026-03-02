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
import PrivatePage from "./pages/private";
import CertificatesPage from "./pages/certificates";

import ScrollToTop from "./components/Scroll";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/rastreio" element={<TrackPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/fretebot" element={<FreteBotPage />} />
        <Route path="/trabalheconosco" element={<CareersPage />} />
        <Route path="/privacidade" element={<PrivatePage />} />
        <Route path="/certificados" element={<CertificatesPage />} />
      </Routes>
      <Footer />
    </>
  );
}
