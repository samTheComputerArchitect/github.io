import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import WebThreads from '../components/WebThreads';
import GhostFibers from '../components/GhostFibers';
import GradientWaves from '../components/GradientWaves';
import Hyperspeed from '../components/Hyperspeed';
import { hyperspeedPresets } from '../lib/hyperspeedPresets';
import { SectionHeader, Button, Feature, Icon, Reveal } from '../components/ui/UI';
import { getFeature } from '../lib/features';
import '../styles/ui.css';

const heroes = {
  'assessment-builder': (key) => (
    <GhostFibers key={key} lineColor="#052E16" glowColor="#10B981" speed={0.2} scale={1.6} rotationSpeed={0.25} layers={3} waveAmplitude={0.015} waveFrequency={3} waveSpeed={0.15} layerSpeed={0.08} twist={0.1} lineFrequency={5} lineSpacing={2} lineSharpness={16} glowFalloff={10} glowIntensity={1.5} brightness={2} greenBoost={1.25} grain={0.05} />
  ),
  'ai-question-generation': (key) => (
    <GradientWaves key={key} horizonColor="#10B981" waveColor="#34D399" crestColor="#FFFFFF" speed={0.4} amplitude={2.5} waveScale={0.6} waveRatio={0.9} swell={35} turbulence={20} tilt={1.11} zoom={1.0} height={5.5} fogDepth={15} detail="medium" brightness={1.0} opacity={1.0} grain={true} grainIntensity={0.05} />
  ),
  'approval-workflow': (key) => (
    <Hyperspeed key={key} effectOptions={hyperspeedPresets.cyberpunk} />
  ),
  'ai-answer-keys': (key) => (
    <GhostFibers key={key} lineColor="#052E16" glowColor="#34D399" speed={0.2} scale={1.8} rotationSpeed={0.2} layers={3} waveAmplitude={0.012} waveFrequency={3.5} waveSpeed={0.12} layerSpeed={0.06} twist={0.08} lineFrequency={4} lineSpacing={2.2} lineSharpness={14} glowFalloff={9} glowIntensity={1.5} brightness={2} greenBoost={1.2} grain={0.05} />
  ),
  'grammar-clarity-ai': (key) => (
    <GradientWaves key={key} horizonColor="#10B981" waveColor="#6EE7B7" crestColor="#FFFFFF" speed={0.35} amplitude={2.2} waveScale={0.6} waveRatio={0.9} swell={30} turbulence={16} tilt={1.11} zoom={1.0} height={5.5} fogDepth={15} detail="medium" brightness={1.0} opacity={1.0} grain={true} grainIntensity={0.05} />
  ),
  'audit-trail': (key) => (
    <WebThreads key={key} color1="#10B981" color2="#34D399" color3="#FFFFFF" speed={0.2} threadCount={5} frequency={4} spread={0.18} taper={1} position={0.5} fanMode="center" glow={0.02} falloff={0.6} thickness={1.1} brightness={0.6} opacity={1} mirror shimmer={false} grain grainIntensity={0.05} />
  ),
};

const FeatureDetail = () => {
  const { slug } = useParams();
  const feature = getFeature(slug);

  if (!feature) return <Navigate to="/features" replace />;

  const related = feature.related
    .map((s) => getFeature(s))
    .filter(Boolean);

  return (
    <div>
      <div className="sub-hero">
        <div className="web-threads-wrapper">{heroes[feature.slug]?.(slug) || heroes['assessment-builder'](slug)}</div>
        <div className="sub-hero__content">
          <nav className="ds-breadcrumb" aria-label="Breadcrumb" style={{ justifyContent: 'center' }}>
            <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/features">Features</NavLink></li>
              <li className="is-current" aria-current="page">{feature.title}</li>
            </ol>
          </nav>
          <h1>{feature.title}</h1>
        </div>
      </div>

      <div className="page-content">
        <div className="ds-wrap" style={{ paddingTop: '28px', paddingBottom: '24px' }}>
          <NavLink to="/features" className="ds-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All features
          </NavLink>

          <Reveal>
            <div className="ds-split">
              <div style={{ textAlign: 'left' }}>
                <SectionHeader kicker="Feature" title={feature.tagline} sub={feature.body} />
                <h3 className="bare" style={{ marginBottom: '14px' }}>What you get</h3>
                <ul className="ds-checks">
                  {feature.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>

              <div className="ds-panel" style={{ textAlign: 'left' }}>
                <h3 className="bare">Why it matters</h3>
                {feature.benefits.map((b) => (
                  <Feature key={b.title} title={b.title}>{b.text}</Feature>
                ))}
              </div>
            </div>
          </Reveal>

          <hr className="ds-rule" />

          <Reveal>
            <div style={{ textAlign: 'left', marginBottom: '28px' }}>
              <SectionHeader kicker="Keep exploring" title="It works best as a set." />
            </div>
          </Reveal>

          <div className="ds-grid ds-grid--3">
            {related.map((f, i) => (
              <Reveal key={f.slug} delay={i * 90}>
                <div className="ds-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Icon name={f.icon} />
                    <h3>{f.title}</h3>
                    <p>{f.tagline}</p>
                  </div>
                  <p className="ds-more"><NavLink to={`/features/${f.slug}`}>Learn more →</NavLink></p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="ds-section">
            <Reveal>
              <div className="ds-cta">
                <div style={{ textAlign: 'left' }}>
                  <h2>See {feature.title.toLowerCase()} on your paper.</h2>
                  <p>Bring a real assessment and watch the feature pay for itself by the first approval. Start free for 7 days.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Button variant="primary" href="/pricing">See Pricing</Button>
                  <Button variant="ghost" href="/features">All Features</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;