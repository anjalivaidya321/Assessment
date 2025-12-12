import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Box from './Components/Box';
import Features from './Components/feature';
import TestimonialGrid from './Components/studentsay';
import CareerSection from './Components/carrersection';
import ProgramAccordion from './Components/curriculum';
import Footer from './Components/Footer';
import NumberBox from './Components/NumBox';
import Founders from './Components/Mentors';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignPage';
import ProfilePage from './Pages/ProfilePage';
import ScrollingLogos from './Components/Scroll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <ScrollingLogos />
              <Box />
              <Features />
              <Founders />
              <ProgramAccordion />
              <NumberBox />
              <TestimonialGrid />
              <CareerSection />
              <Footer />
            </div>
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Profile Page */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
