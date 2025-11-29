import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/developer-animation.json';
import './About.css';

const About = () => {
    const [visualVisible, setVisualVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const visualRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === visualRef.current) setVisualVisible(true);
                        if (entry.target === contentRef.current) setContentVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (visualRef.current) observer.observe(visualRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => observer.disconnect();
    }, []);

    const skills = [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
    ];

    return (
        <section id="about">
            <div className="about-container">
                <div 
                    ref={visualRef} 
                    className={`about-visual animate-left ${visualVisible ? 'visible' : ''}`}
                >
                    <div className="deco-bar bar-1"></div>
                    <div className="deco-bar bar-2"></div>
                    <Lottie 
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', maxWidth: '450px', height: 'auto' }}
                    />
                </div>
                <div 
                    ref={contentRef} 
                    className={`about-content animate-right ${contentVisible ? 'visible' : ''}`}
                >
                    <span className="about-watermark">ABOUT</span>
                    <h2 className="section-title">Know Me More</h2>
                    <p className="about-desc">
                        Hi, I'm <strong>Naman Mevada</strong>, a passionate Frontend Developer focused on building responsive, user-friendly web applications. I love translating designs into clean, efficient code.
                    </p>
                    <div className="education-box">
                        <h4 className="edu-degree">B.Tech in Information Technology</h4>
                        <span className="edu-school">@ Sankalchand Patel College of Engineering, Visnagar</span>
                        <div className="edu-year">Oct 2021 - Apr 2025</div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0 }}>
                            Successfully completed my B.Tech with a 7.3 CGPA.
                        </p>
                    </div>
                    <h3 className="skills-title">My Skills</h3>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div 
                                key={index} 
                                className={`skill-item animate-scale ${contentVisible ? 'visible' : ''}`}
                                title={skill.name}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;