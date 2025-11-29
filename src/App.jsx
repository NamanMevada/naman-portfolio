import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Works from './sections/Works';
import Contact from './sections/Contact';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme !== 'light';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <>
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <SocialSidebar />
            <Home />
            <About />
            <Experience />
            <Works />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default App;