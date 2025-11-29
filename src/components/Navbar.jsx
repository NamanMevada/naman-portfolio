import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll('section');
            let current = 'home';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#works', label: 'Works' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div 
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
                onClick={closeMenu}
            />
            <div className="navbar-container">
                <div className="logo">
                    <a href="#home">NAMAN</a>
                </div>

                <div 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item, index) => (
                        <li key={item.href} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                            <a 
                                href={item.href} 
                                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className="resume-item">
                        <a 
                            href="https://drive.google.com/drive/u/0/folders/1s_azBj2C-pZBpCVxEMNcV9xt729Y_kJC" 
                            className="resume-btn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                    <li className="theme-item">
                        <button 
                            className="theme-toggle" 
                            onClick={toggleTheme}
                            aria-label="Toggle Dark/Light Mode"
                        >
                            <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;