import { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div 
            className={`back-to-top ${isVisible ? 'active' : ''}`}
            onClick={scrollToTop}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    );
};

export default BackToTop;