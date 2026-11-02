import React, { useEffect, useRef } from 'react';

export const Kicker = ({ children }) => <p className="ds-kicker">{children}</p>;

export const SectionHeader = ({ kicker, title, sub }) => (
    <header>
        {kicker && <Kicker>{kicker}</Kicker>}
        {title && <h2 className="ds-title">{title}</h2>}
        {sub && <p className="ds-sub">{sub}</p>}
    </header>
);

export const Button = ({ variant = 'primary', href = '#', children }) => (
    <a href={href} className={`ds-btn ds-btn--${variant}`}>{children}</a>
);

export const Badge = ({ muted, children }) => (
    <span className={`ds-badge${muted ? ' ds-badge--muted' : ''}`}>{children}</span>
);

const icons = {
    shield: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
    bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
    check: <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />,
    layers: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    star: <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.2 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z" />,
    users: <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.5a4 4 0 0 1 0 7.8" />,
    lock: <path d="M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4" />,
    spark: <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8z" />,
    globe: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />,
    tool: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
    file: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />,
    wand: <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M15 9h0M17.8 6.2L19 5M12.2 6.2L11 5M3 21l9-9M12.2 12.2L11 13" />,
    history: <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5" />,
};

export const Icon = ({ name = 'spark' }) => (
    <div className="ds-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {icons[name] || icons.spark}
        </svg>
    </div>
);

export const Card = ({ icon = 'spark', title, children, accent, className = '', style }) => (
    <div
        className={`ds-card${accent ? ' ds-card--accent' : ''} ${className}`}
        style={style}
    >
        <Icon name={icon} />
        <h3>{title}</h3>
        <p>{children}</p>
    </div>
);

export const Stat = ({ value, label }) => (
    <div className="ds-stat">
        <b>{value}</b>
        <span>{label}</span>
    </div>
);

export const Feature = ({ title, children }) => (
    <div className="ds-feature">
        <span className="ds-feature__mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
            </svg>
        </span>
        <div>
            <h4>{title}</h4>
            <p>{children}</p>
        </div>
    </div>
);

export const Step = ({ title, children }) => (
    <div className="ds-step">
        <h4>{title}</h4>
        <p>{children}</p>
    </div>
);

export const Quote = ({ text, author, role }) => (
    <figure className="ds-quote">
        <blockquote>{text}</blockquote>
        <figcaption><b>{author}</b>{role && <span>{role}</span>}</figcaption>
    </figure>
);

/* Scroll-triggered reveal wrapper. Adds `is-visible` when it enters the
   viewport; the fade/rise is handled entirely by CSS in ui.css. */
export const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible');
                    io.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <Tag ref={ref} className={`ds-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </Tag>
    );
};