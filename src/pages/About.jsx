import React from 'react';
import Hyperspeed from '../components/Hyperspeed';
import { hyperspeedPresets } from '../lib/hyperspeedPresets';
import { SectionHeader, Card, Button, Reveal } from '../components/ui/UI';
import '../styles/ui.css';

const AboutPage = () => {
  return (
    <div>
      {/* Hyperspeed Animation Hero */}
      <div className="hero-video-container">
        <div className="web-threads-wrapper">
          <Hyperspeed effectOptions={hyperspeedPresets.cyberpunk} />
        </div>
        <div className="hero-video-overlay">
          <div className="ds-badge" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            padding: '6px 16px', 
            borderRadius: '100px', 
            fontSize: '12px', 
            fontWeight: '600', 
            color: 'var(--ds-accent-hi)', 
            background: 'rgba(16, 185, 129, 0.1)', 
            border: '1px solid rgba(16, 185, 129, 0.3)',
            marginBottom: '24px'
          }}>
            Our Mission & Philosophy
          </div>
          <h1>
            Empowering Teachers.<br />
            <span style={{ color: 'var(--ds-accent-hi)' }}>Reclaiming Weekends</span>.
          </h1>
          <p style={{ color: '#ececf0', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            We believe teaching is an art form, but test creation has become administrative overhead.
            Assessitonium combines pedagogical frameworks with generative intelligence to help educators craft high-impact worksheets in minutes instead of hours.
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="ds-wrap" style={{ paddingTop: '40px' }}>
          
          {/* Target Audience Section */}
          <Reveal>
            <SectionHeader 
              kicker="Who We Serve" 
              title="Designed for educational institutions of all levels." 
            />
          </Reveal>
          
          <div className="ds-grid ds-grid--3" style={{ margin: '44px 0' }}>
            <Reveal delay={100}>
              <Card icon="school" title="K-12 Schools">
                From elementary to high schools, we help formative assessments, standardized tests, and classroom warm-ups with engaging, structured question sets.
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card icon="graduation-cap" title="Colleges">
                Higher education institutions can create comprehensive exam papers, generate answer keys, and automate outcome mapping with academic integrity.
              </Card>
            </Reveal>
            <Reveal delay={300}>
              <Card icon="building" title="Educational Institutions">
                Universities, training centers, and exam preparation centers benefit from bulk question generation, CO-PO matrix generation, and enforcement of academic standards.
              </Card>
            </Reveal>
          </div>

          <hr className="ds-rule" />

          {/* Marketing Plan Section */}
          <Reveal>
            <SectionHeader 
              kicker="Our Strategy" 
              title="A targeted approach to reach and onboard institutions." 
            />
          </Reveal>

          <div className="ds-grid ds-grid--2" style={{ margin: '44px 0' }}>
            <Reveal delay={100}>
              <div className="ds-panel">
                <h3 className="bare">1. Direct Outreach</h3>
                <ul className="ds-checks" style={{ marginTop: '16px' }}>
                  <li>Contact schools and colleges directly</li>
                  <li>Schedule demos with department heads</li>
                  <li>Engage at Ed-Tech conferences</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="ds-panel">
                <h3 className="bare">2. Free Trial Program</h3>
                <ul className="ds-checks" style={{ marginTop: '16px' }}>
                  <li>7-day full access trial</li>
                  <li>Dedicated onboarding support</li>
                  <li>Zero-friction sign-up</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="ds-panel">
                <h3 className="bare">3. Feedback & Endorsements</h3>
                <ul className="ds-checks" style={{ marginTop: '16px' }}>
                  <li>Structured feedback surveys</li>
                  <li>Collect testimonials from faculty</li>
                  <li>Institutional endorsements</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="ds-panel">
                <h3 className="bare">4. Digital Growth</h3>
                <ul className="ds-checks" style={{ marginTop: '16px' }}>
                  <li>Targeted YouTube & Google Ads</li>
                  <li>LinkedIn B2B campaigns</li>
                  <li>Social proof via case studies</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <hr className="ds-rule" />

          {/* Business Model Section */}
          <Reveal>
            <SectionHeader 
              kicker="The Model" 
              title="A sustainable B2B SaaS approach." 
            />
          </Reveal>

          <div className="ds-grid ds-grid--2" style={{ margin: '44px 0' }}>
            <Reveal delay={100}>
              <Card icon="dollar-sign" title="B2B SaaS Subscription" accent={true}>
                A subscription model tailored to institutional needs, ensuring predictable revenue and scaling flexibility. Includes monthly/annual billing and volume-based pricing for large universities.
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card icon="target" title="Value-Based ROI">
                Pricing based on active users and generation volume. We focus on the ROI of time saved and accreditation support, offering specialized tiers for departments vs. full institutions.
              </Card>
            </Reveal>
          </div>

          <div className="ds-section" style={{ marginTop: '80px' }}>
            <Reveal>
              <div className="ds-cta">
                <div style={{ textAlign: 'left' }}>
                  <h2>Ready to transform your department?</h2>
                  <p>Start with our 7-day trial and reclaim your weekends.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Button variant="primary" href="/get_started">Get Started Now</Button>
                  <Button variant="ghost" href="/pricing">View Pricing</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
