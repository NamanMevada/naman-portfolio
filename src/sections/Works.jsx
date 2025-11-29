import { useEffect, useRef, useState } from 'react';
import './Works.css';

const Works = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setHeaderVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: 'Furneo',
            description: 'Have a look at a full furniture e-commerce website design.',
            image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            link: 'https://furneo.netlify.app/'
        },
        {
            title: 'CloudyBuddy',
            description: 'Have a look at simple weather forecast website with live updates.',
            image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            link: 'https://cloudybuddy.netlify.app/'
        },
        {
            title: 'My Portfolio',
            description: 'This is my personal portfolio showcasing my projects and skills.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            link: 'https://naman-mevada.netlify.app/'
        }
    ];

    return (
        <section id="works">
            <div className="works-wrapper">
                <span className="watermark">PORTFOLIO</span>
                <div 
                    ref={headerRef}
                    className={`works-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">My Works</h2>
                </div>
                <div className="works-container">
                    {projects.map((project, index) => (
                        <WorkCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const WorkCard = ({ project, index }) => {
    const [cardVisible, setCardVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setCardVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`work-card animate-on-scroll ${cardVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            <a href={project.link} target="_blank" rel="noreferrer">
                <div className="work-img-wrapper">
                    <img src={project.image} alt={project.title} className="work-img" />
                    <div className="overlay"><span>Click to View</span></div>
                </div>
            </a>
            <div className="work-content">
                <h3>{project.title}</h3>
                <div className="project-detail-container">
                    <span className="detail-arrow">→</span>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Works;