import { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const headerRef = useRef(null);
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === headerRef.current) setHeaderVisible(true);
                        if (entry.target === formRef.current) setFormVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (formRef.current) observer.observe(formRef.current);

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <div className="contact-wrapper">
                <span className="watermark">CONTACT</span>
                <div 
                    ref={headerRef}
                    className={`contact-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">Contact Me</h2>
                </div>
                <p className={`contact-intro animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
                    Let's connect! I'm eager to learn, collaborate, and contribute to new opportunities.<br />
                    Please fill out the form below and I will get back to you!
                </p>
                <form 
                    ref={formRef}
                    className={`contact-form animate-on-scroll ${formVisible ? 'visible' : ''}`}
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            rows="4" 
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;