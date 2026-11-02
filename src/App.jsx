import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink, useLocation } from 'react-router-dom';
import './index.css';
import WebThreads from './components/WebThreads';
import ChatWidget from './components/ChatWidget';
import AboutPage from './pages/About';
import FeaturesPage from './pages/Features';
import FeatureDetail from './pages/FeatureDetail';
import WhyPage from './pages/Why';
import PricingPage from './pages/Pricing';
import { SectionHeader, Card, Button, Feature, Step, Stat, Quote, Reveal, Icon } from './components/ui/UI';
import { GradientText, RotatingText, Magnetic, TiltedCard, AnimatedTabs } from './components/ui/Effects';
import './styles/ui.css';
import { FEATURES } from './lib/features';
import logoWhite from './assets/logo.png';

const featuresMarquee = [...FEATURES, ...FEATURES, ...FEATURES, ...FEATURES];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

const TopBar = () => (
  <header className="topbar">
    <NavLink to="/" className="topbar__brand">
      <img className="brand-logo" src={logoWhite} alt="" />
      Assessitonium
    </NavLink>
    <nav className="topbar__nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'topbar__link is-active' : 'topbar__link'}>Home</NavLink>
      <NavLink to="/features" className={({ isActive }) => isActive ? 'topbar__link is-active' : 'topbar__link'}>Features</NavLink>
      <NavLink to="/why" className={({ isActive }) => isActive ? 'topbar__link is-active' : 'topbar__link'}>Why Us</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'topbar__link is-active' : 'topbar__link'}>About Us</NavLink>
      <NavLink to="/pricing" className={({ isActive }) => isActive ? 'topbar__link is-active' : 'topbar__link'}>Pricing</NavLink>
    </nav>
    <div className="topbar__actions">
      <a href="/buy" className="btn-nav-cta">Get Started</a>
    </div>
  </header>
);

const HomePage = () => {
  const [tab, setTab] = useState(0);

  return (
  <div>
    <div className="hero-video-container">
      <div className="web-threads-wrapper">
        <WebThreads
          color1="#10B981"
          color2="#34D399"
          color3="#FFFFFF"
          speed={0.2}
          threadCount={6}
          frequency={5}
          spread={0.18}
          taper={1}
          position={0.5}
          fanMode="center"
          glow={0.02}
          falloff={0.6}
          thickness={1.1}
          brightness={0.6}
          opacity={1}
          mirror
          shimmer={false}
          grain
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={0.1}
        />
      </div>
      <div className="hero-video-overlay">
        <h1>Assessitonium</h1>
        <p className="hero-subtitle"><RotatingText words={['Create.', 'Approve.', 'Assess.']} /></p>
      </div>
    </div>
    <div className="page-content">
      <div className="product-strip">
        <div className="product-strip__track">
          {featuresMarquee.map((f, i) => (
            <div className="product-strip__item" key={`${f.slug}-${i}`}>
              <Icon name={f.icon} />
              <span>{f.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-wrap" style={{ marginTop: '72px' }}>
        <Reveal>
          <div style={{ textAlign: 'left', maxWidth: 720 }}>
            <SectionHeader
              kicker="Assessitonium"
              title={<GradientText>Create, manage and format assessments — all in one place.</GradientText>}
              sub="Drag components onto a canvas, route your work through approvals, and generate question papers, answer keys and CO–PO matrices on demand."
            />
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Magnetic><Button variant="primary" href="/features">Explore Features</Button></Magnetic>
              <Magnetic><Button variant="ghost" href="/pricing">View Pricing</Button></Magnetic>
            </div>
          </div>
        </Reveal>

        <div className="ds-grid ds-grid--3" style={{ marginTop: '48px' }}>
          <Reveal delay={0}>
            <TiltedCard>
              <Card icon="layers" title="Drag-and-drop canvas">Build your assessment by dragging components directly onto the assessment canvas.</Card>
            </TiltedCard>
          </Reveal>
          <Reveal delay={90}>
            <TiltedCard>
              <Card icon="bolt" title="Axiom at every step" accent>Axiom generates assessments from your portions, polishes your questions and produces answer keys automatically.</Card>
            </TiltedCard>
          </Reveal>
          <Reveal delay={180}>
            <TiltedCard>
              <Card icon="lock" title="Complete audit trail">Track every share, approval and edit with one unified log of people, times and dates.</Card>
            </TiltedCard>
          </Reveal>
        </div>

        <hr className="ds-rule" />

        <div className="ds-split">
          <Reveal>
            <div style={{ textAlign: 'left' }}>
              <SectionHeader
                kicker="Why Assessitonium"
                title="Assessments, without the clutter."
                sub="From first draft to formatted paper, everything is connected, tracked and Axiom-assisted — so you never rebuild work by hand."
              />
              <Feature title="Axiom-generated question papers">Upload your portions and let Axiom build a clean, optimized assessment covering every topic.</Feature>
              <Feature title="One approval pipeline">Send assessments to higher authorities and get a formatted question paper plus Axiom answer key once approved.</Feature>
              <Feature title="Outcome-level clarity">Axiom maps every question to its Course Outcome (CO1–CO6) and auto-generates the CO–PO matrix.</Feature>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="ds-panel" style={{ textAlign: 'left' }}>
              <h3 className="bare">How it works</h3>
              <Step title="Create">Build your assessment by dragging components onto the canvas.</Step>
              <Step title="Approve">Send it to higher authorities and track the review.</Step>
              <Step title="Format">Get a formatted question paper and Axiom answer key, hassle free.</Step>
              <Step title="Audit">Review the full trail of shares, approvals and dates in one place.</Step>
            </div>
          </Reveal>
        </div>

        <hr className="ds-rule" />

        <div className="ds-stats" style={{ margin: '0 0 12px' }}>
          <Reveal delay={0}><Stat value="Drag & drop" label="Assessment canvas" /></Reveal>
          <Reveal delay={80}><Stat value="CO1–CO6" label="Course outcome mapping" /></Reveal>
          <Reveal delay={160}><Stat value="Axiom" label="Answer keys & CO–PO" /></Reveal>
          <Reveal delay={240}><Stat value="1" label="Unified audit trail" /></Reveal>
        </div>

        <hr className="ds-rule" />

        <Reveal>
          <div className="ds-split">
            <div style={{ textAlign: 'left' }}>
              <SectionHeader
                kicker="Take a closer look"
                title="What Axiom does at each step."
                sub="One AI, three jobs on the paper. Pick a step."
              />
              <div style={{ marginTop: '24px' }}>
                <AnimatedTabs tabs={['Draft', 'Polish', 'Prove']} active={tab} onChange={setTab} />
              </div>
            </div>
            <div className="ds-panel" style={{ textAlign: 'left' }}>
              <div className="tabswap" key={tab}>
                {tab === 0 && <Feature title="Draft the paper">Paste your portions and Axiom drafts a balanced paper that touches every required topic — coverage you can see before it leaves your hand.</Feature>}
                {tab === 1 && <Feature title="Polish every question">One click fixes grammar, wording and tone, so nothing ships worded in a way someone will misread.</Feature>}
                {tab === 2 && <Feature title="Prove the outcomes">Axiom maps each question to CO1–CO6, generates the CO–PO matrix and formats the answer key — ready for review.</Feature>}
              </div>
            </div>
          </div>
        </Reveal>

        <hr className="ds-rule" />

        <Reveal>
          <div className="ds-split">
            <div style={{ textAlign: 'left' }}>
              <SectionHeader
                kicker="For institutions"
                title="Adopted by exam cells, trusted by faculty."
                sub="Assessitonium fits the way departments already work — paper by paper, reviewer by reviewer — without new process overhead."
              />
              <ul className="ds-checks">
                <li>Department-level approvals route papers to the right authority in one click.</li>
                <li>Every reviewer, share and timestamp is recorded for a defensible trail.</li>
                <li>Consistent, publication-ready formatting across every paper a department produces.</li>
                <li>CO–PO-ready papers from the very first draft, not after painful retrofits.</li>
                <li>Role-based access keeps teachers, HODs and admins exactly where they belong.</li>
              </ul>
            </div>
            <div className="ds-panel" style={{ textAlign: 'left' }}>
              <h3 className="bare">What reviewers get</h3>
              <Feature title="A paper they can trust">Formatting, marks and coverage are consistent before it ever reaches their desk.</Feature>
              <Feature title="Context, not clutter">Comments attach to specific questions, so feedback never gets lost in email threads.</Feature>
              <Feature title="A record that protects everyone">The audit trail answers every 'who approved what, and when' question instantly.</Feature>
            </div>
          </div>
        </Reveal>

        <hr className="ds-rule" />

        <Reveal>
          <div style={{ textAlign: 'left', marginBottom: '36px' }}>
            <SectionHeader
              kicker="From the field"
              title="Quietly changing exam week."
              sub="The workflows behind a calmer, cleaner assessment cycle — told by the people who live it."
            />
          </div>
        </Reveal>
        <div className="ds-quotes">
          <Reveal delay={0}>
            <Quote
              text="The first time a formatted paper and answer key appeared from a draft, the room went quiet. That is exactly what exam week is supposed to feel like."
              author="HOD, Computer Science"
            />
          </Reveal>
          <Reveal delay={120}>
            <Quote
              text="Approvals that used to take a week of reminders now get signed off before lunch. The trail writes itself."
              author="Exam Cell Coordinator"
            />
          </Reveal>
          <Reveal delay={240}>
            <Quote
              text="I stopped worrying about whether every topic was covered. The CO map tells me in one glance — before the paper is even sent."
              author="Assistant Professor"
            />
          </Reveal>
        </div>

        <div className="ds-section">
          <Reveal>
            <div className="ds-cta">
              <div style={{ textAlign: 'left' }}>
                <h2>Your next paper, ready in minutes.</h2>
                <p>From a rough topic list to an approved, formatted question paper and answer key — Assessitonium carries the work while you keep the control.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Magnetic><Button variant="primary" href="/pricing">Start Building</Button></Magnetic>
                <Magnetic><Button variant="ghost" href="/features">Explore Features</Button></Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="min-h-screen">
        <TopBar />
        <main className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/features/:slug" element={<FeatureDetail />} />
            <Route path="/why" element={<WhyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/products" element={<Navigate to="/features" replace />} />
          </Routes>
        </main>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
