import { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [typeText, setTypeText] = useState('');
    const words = ["A Passionate Web Developer", "Frontend Developer", "React.js Developer"];

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout;

        const typeEffect = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setTypeText(currentWord.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypeText(currentWord.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                timeout = setTimeout(typeEffect, 3000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                timeout = setTimeout(typeEffect, 200);
            } else {
                timeout = setTimeout(typeEffect, isDeleting ? 100 : 150);
            }
        };

        timeout = setTimeout(typeEffect, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="home">
            <div className="bg-dots-grid"></div>
            <svg className="bg-squiggle" viewBox="0 0 100 20">
                <path 
                    d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" 
                    fill="none" 
                    stroke="#7C4DFF" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                />
            </svg>
            <div className="bg-capsule-small"></div>

            <span className="home-watermark">NAMAN</span>

            <div className="home-container">
                <div className="home-text">
                    <h1>Hello, I'm <span className="name-highlight">Naman Mevada</span></h1>
                    <h2 className="typewriter-code">
                        <span className="code-bracket">&lt;</span>
                        <span>{typeText}</span>
                        <span className="cursor">|</span>
                        <span className="code-bracket">/&gt;</span>
                    </h2>
                    <p className="home-desc">
                        I'm a passionate developer who specializes in building responsive and user-friendly web interfaces using React.js. I'm eager to collaborate and grow by turning ideas into clean, functional web applications!
                    </p>
                    <div className="btn-group">
                        <a href="#works" className="btn primary">View Work</a>
                        <a 
                            href="https://www.linkedin.com/in/naman-mevada-a5778124a/" 
                            className="btn secondary" 
                            target="_blank"
                            rel="noreferrer"
                        >
                            Check out my LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;