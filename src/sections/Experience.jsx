import { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [timelineVisible, setTimelineVisible] = useState(false);
    const headerRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === headerRef.current) setHeaderVisible(true);
                        if (entry.target === timelineRef.current) setTimelineVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (timelineRef.current) observer.observe(timelineRef.current);

        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            role: 'React JS Trainee',
            company: 'Softs Solution Service, Ahmedabad',
            year: 'Feb 2025 – Present',
            description: [
                'Learned basics of C and C++ to understand programming fundamentals and object-oriented concepts.',
                'Practiced HTML, CSS, and JavaScript for building simple and responsive web pages.',
                'Started working with React.js to develop user interfaces and understand component-based development.',
                'Gained exposure to writing clean code and following best practices in front-end development.'
            ]
        }
    ];

    return (
        <section id="experience">
            <div className="exp-container">
                <span className="watermark">EXPERIENCE</span>
                <div 
                    ref={headerRef} 
                    className={`exp-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">My Experience</h2>
                </div>
                <div className="timeline" ref={timelineRef}>
                    {experiences.map((exp, index) => (
                        <div 
                            key={index}
                            className={`timeline-item animate-on-scroll ${timelineVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-content">
                                <div className="job-role">{exp.role}</div>
                                <span className="job-company">{exp.company}</span>
                                <span className="job-year">{exp.year}</span>
                                <ul className="job-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;