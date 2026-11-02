import React, { useEffect, useRef, useState } from 'react';
import './Effects.css';

const reduceMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const GradientText = ({ children, className = '' }) => (
    <span className={`grad ${className}`}>{children}</span>
);

export const ShinyText = ({ children, className = '' }) => (
    <span className={`shiny ${className}`}>{children}</span>
);

export const RotatingText = ({ words, interval = 2200, className = '' }) => {
    const [i, setI] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setI((x) => (x + 1) % words.length), interval);
        return () => clearInterval(t);
    }, [words.length, interval]);
    return (
        <span className={`rt ${className}`} aria-live="off">
            <span key={i} className="rt__word">{words[i]}</span>
        </span>
    );
};

export const FlipText = ({ text, as: Tag = 'h2', className = '', delay = 0, stagger = 70 }) => {
    const words = text.split(' ');
    return (
        <Tag className={`ft ${className}`}>
            {words.map((w, i) => (
                <span key={i} className="ft__word" style={{ animationDelay: `${delay + i * stagger}ms` }}>{w}</span>
            ))}
        </Tag>
    );
};

export const CountUp = ({ end, prefix = '', suffix = '', decimals = 0, duration = 1.4, className = '' }) => {
    const ref = useRef(null);
    const started = useRef(false);
    const [val, setVal] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return;
                started.current = true;
                if (reduceMotion()) {
                    setVal(end);
                    io.disconnect();
                    return;
                }
                const t0 = performance.now();
                const step = (t) => {
                    const p = Math.min((t - t0) / (duration * 1000), 1);
                    const eased = p >= 1 ? end : end * (1 - Math.pow(2, -10 * p));
                    setVal(eased);
                    if (p < 1) requestAnimationFrame(step);
                    else io.disconnect();
                };
                requestAnimationFrame(step);
            },
            { threshold: 0.3 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref} className={`countup ${className}`}>
            {prefix}{val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
        </span>
    );
};

export const Magnetic = ({ children, strength = 0.28, className = '' }) => {
    const ref = useRef(null);
    const onMove = (e) => {
        if (reduceMotion() || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const reset = () => {
        if (ref.current) ref.current.style.transform = '';
    };
    return (
        <span ref={ref} className={`magnetic ${className}`} onMouseMove={onMove} onMouseLeave={reset}>
            {children}
        </span>
    );
};

export const TiltedCard = ({ children, className = '', max = 7 }) => {
    const ref = useRef(null);
    const glareRef = useRef(null);
    const onMove = (e) => {
        if (reduceMotion() || !ref.current) return;
        const el = ref.current;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (0.5 - py) * max;
        const ry = (px - 0.5) * max;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        if (glareRef.current) {
            glareRef.current.style.opacity = '1';
            glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.10), transparent 60%)`;
        }
    };
    const reset = () => {
        if (ref.current) ref.current.style.transform = '';
        if (glareRef.current) glareRef.current.style.opacity = '0';
    };
    return (
        <div ref={ref} className={`tilt ${className}`} onMouseMove={onMove} onMouseLeave={reset}>
            {children}
            <div ref={glareRef} className="tilt__glare" />
        </div>
    );
};

export const Spotlight = ({ children, className = '', size = 340 }) => {
    const ref = useRef(null);
    const onMove = (e) => {
        if (reduceMotion() || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        ref.current.style.setProperty('--sx', `${e.clientX - r.left}px`);
        ref.current.style.setProperty('--sy', `${e.clientY - r.top}px`);
    };
    return (
        <div ref={ref} className={`spotlight ${className}`} style={{ ['--spotlight-size']: `${size}px` }} onMouseMove={onMove}>
            {children}
        </div>
    );
};

export const HoverBorderGradient = ({ children, className = '' }) => (
    <div className={`hbg ${className}`}>
        <div className="hbg__inner">{children}</div>
    </div>
);

export const AnimatedTabs = ({ tabs, active = 0, onChange = () => {}, className = '' }) => (
    <div className={`atabs ${className}`} role="tablist">
        {tabs.map((t, i) => (
            <button
                key={t}
                role="tab"
                type="button"
                aria-selected={active === i}
                className={`atabs__tab${active === i ? ' is-active' : ''}`}
                onClick={() => onChange(i)}
            >
                {t}
            </button>
        ))}
    </div>
);