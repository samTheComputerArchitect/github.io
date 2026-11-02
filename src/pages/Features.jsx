import React from 'react';
import { NavLink } from 'react-router-dom';
import GhostFibers from '../components/GhostFibers';
import { SectionHeader, Icon, Button, Feature, Step, Reveal } from '../components/ui/UI';
import { FEATURES } from '../lib/features';
import '../styles/ui.css';

const detail = (f, i) => (
  <Reveal key={f.slug} delay={(i % 2) * 90}>
    <div className="ds-detail" style={{ justifyContent: 'space-between' }}>
      <div>
        <div className="ds-detail__head">
          <Icon name={f.icon} />
          <p><strong>{f.title}</strong> — {f.tagline}</p>
        </div>
        <ul className="ds-checks">
          {f.points.slice(0, 3).map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
      <p className="ds-more"><NavLink to={`/features/${f.slug}`}>Learn more →</NavLink></p>
    </div>
  </Reveal>
);

const FeaturesPage = () => {
  return (
    <div>
      <div className="hero-video-container">
        <div className="web-threads-wrapper">
          <GhostFibers
            lineColor="#052E16"
            glowColor="#10B981"
            speed={0.2}
            scale={2}
            rotationSpeed={0.25}
            layers={4}
            waveAmplitude={0.015}
            waveFrequency={3}
            waveSpeed={0.15}
            layerSpeed={0.08}
            twist={0.1}
            twistFrequency={5}
            twistSpeed={1.2}
            lineFrequency={5}
            lineSpacing={2}
            lineSharpness={16}
            glowFalloff={10}
            glowIntensity={1.6}
            brightness={2}
            greenBoost={1.25}
            vignette={0.8}
            grain={0.05}
          />
        </div>
        <div className="hero-video-overlay">
          <h1>Our Features</h1>
        </div>
      </div>
      <div className="page-content">
        <div className="ds-wrap" style={{ paddingTop: '8px' }}>
          <Reveal>
            <SectionHeader
              kicker="Features"
              title="Everything you need to build great assessments."
              sub="A connected suite of tools for creating, approving and formatting assessments — from the first draft to the final CO–PO matrix. Click any feature for the full story."
            />
          </Reveal>

          <div className="ds-grid ds-grid--bento">
            {FEATURES.slice(0, 6).map((f, i) => (
              <Reveal
                key={f.slug}
                className={
                  i === 0 ? 'ds-span-4 ds-row-2'
                  : i === 1 || i === 2 ? 'ds-span-2'
                  : i === 3 ? 'ds-span-2'
                  : 'ds-span-3'
                }
                delay={i * 90}
              >
                <div className={`ds-card${i === 0 || i === 3 ? ' ds-card--accent' : ''}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Icon name={f.icon} />
                  <h3>{f.title}</h3>
                  <p style={{ flex: 1 }}>{f.tagline}</p>
                  <p className="ds-more"><NavLink to={`/features/${f.slug}`}>Learn more →</NavLink></p>
                </div>
              </Reveal>
            ))}
          </div>

          <hr className="ds-rule" />

          <Reveal>
            <div style={{ textAlign: 'left' }}>
              <SectionHeader
                kicker="A closer look"
                title="Six features. One connected workflow."
                sub="Each piece feeds the next — the builder hands off to approval, approval feeds formatting, and everything stays traceable."
              />
            </div>
          </Reveal>

          <div className="ds-grid ds-grid--2" style={{ marginTop: '40px' }}>
            {FEATURES.map(detail)}
          </div>

          <hr className="ds-rule" />

          <Reveal>
            <div className="ds-split">
              <div style={{ textAlign: 'left' }}>
                <SectionHeader
                  kicker="The journey"
                  title="How a paper flows through Assessitonium."
                  sub="One continuous path from requirement list to an approved, formatted paper you can defend."
                />
              </div>
              <div className="ds-panel" style={{ textAlign: 'left' }}>
                <Step title="Draft">Drag components onto the canvas and shape the paper your way.</Step>
                <Step title="Approve">Send it to higher authorities and see it move toward sign-off.</Step>
                <Step title="Format">Get the question paper and Axiom answer key, perfectly formatted.</Step>
                <Step title="Prove">Export the CO–PO matrix and hand over the audit trail.</Step>
              </div>
            </div>
          </Reveal>

          <hr className="ds-rule" />

          <Reveal>
            <div className="ds-split">
              <div style={{ textAlign: 'left' }}>
                <SectionHeader
                  kicker="Capabilities"
                  title="Built around the assessment lifecycle."
                  sub="From the first draft to the approved paper, each capability connects to the next — no re-entry, no silos, no friction."
                />
              </div>
              <div className="ds-panel" style={{ textAlign: 'left' }}>
                <Feature title="Formatted question papers">Once approved, get a formatted, ready-to-use question paper.</Feature>
                <Feature title="Approval routing">Send assessments to higher authorities with a structured review flow.</Feature>
                <Feature title="Course outcome mapping">Axiom reads your paper and reports the CO level (CO1–CO6) for each question.</Feature>
                <Feature title="CO–PO matrix">Auto-generate the CO–PO matrix and save work, time and energy.</Feature>
              </div>
            </div>
          </Reveal>

          <div className="ds-section">
            <Reveal>
              <div className="ds-cta">
                <div style={{ textAlign: 'left' }}>
                  <h2>See it with your own paper.</h2>
                  <p>Bring a real assessment you care about — and watch it move from rough draft to approved, formatted paper in one sitting.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Button variant="primary" href="/pricing">View Pricing</Button>
                  <Button variant="ghost" href="/why-us">Why us</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;