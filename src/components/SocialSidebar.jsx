import './SocialSidebar.css';

const SocialSidebar = () => {
    const socialLinks = [
        {
            href: 'https://www.linkedin.com/in/naman-mevada-a5778124a/',
            icon: 'fa-brands fa-linkedin',
            title: 'LinkedIn'
        },
        {
            href: 'https://github.com/NamanMevada',
            icon: 'fa-brands fa-github',
            title: 'GitHub'
        },
        {
            href: 'https://instagram.com/yourprofile',
            icon: 'fa-brands fa-instagram',
            title: 'Instagram'
        },
        {
            href: 'mailto:namanmevadait@gmail.com',
            icon: 'fa-solid fa-envelope',
            title: 'Email'
        }
    ];

    return (
        <div className="social-sidebar">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noreferrer"
                    className="social-link"
                    title={link.title}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                    <i className={link.icon}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialSidebar;