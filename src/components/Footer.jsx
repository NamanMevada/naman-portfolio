import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: 'https://www.linkedin.com/in/naman-mevada-a5778124a/', icon: 'fa-brands fa-linkedin' },
        { href: 'https://github.com/NamanMevada', icon: 'fa-brands fa-github' },
        { href: 'https://instagram.com/yourprofile', icon: 'fa-brands fa-instagram' },
        { href: 'mailto:namanmevadait@gmail.com', icon: 'fa-solid fa-envelope' }
    ];

    return (
        <footer className="footer">
            <div className="footer-socials">
                {socialLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.href} 
                        className="footer-social-link"
                        target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noreferrer"
                    >
                        <i className={link.icon}></i>
                    </a>
                ))}
            </div>
            <p>&copy; {currentYear} Naman Mevada. All rights reserved.</p>
        </footer>
    );
};

export default Footer;