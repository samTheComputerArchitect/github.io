import React from 'react';
import Hyperspeed from '../components/Hyperspeed';
import { hyperspeedPresets } from '../lib/hyperspeedPresets';
import { SectionHeader, Button, Badge, Reveal } from '../components/ui/UI';
import '../styles/ui.css';

const rupee = '₹';
const tiers = [
  {
    name: 'Basic',
    badge: 'Free trial',
    muted: true,
    price: 'Free',
    cycle: '7 days',
    sub: 'Full access for one week. No card required.',
    features: [
      'Create and manage assessments',
      'Limited Axiom (1–2 uses per tool)',
      'CO–PO matrix & Bloom’s taxonomy included',
    ],
    note: 'No HOD approval or audit trails on the free tier.',
    cta: 'Start Free Trial',
    primary: false,
  },
  {
    name: 'Standard',
    badge: 'For small faculties',
    muted: false,
    price: `${rupee}1,500`,
    cycle: '/ year',
    sub: 'or ₹899 for 6 months',
    features: [
      'Teacher allocation (subject assignment)',
      'Every Axiom tool 3× per week',
      'Send papers to HOD / reviewers',
      '10 teacher accounts incl. HOD',
    ],
    note: 'No monthly option. No audit trails on Standard.',
    cta: 'Choose Standard',
    primary: false,
  },
  {
    name: 'Professional',
    badge: 'Most popular',
    muted: false,
    price: `${rupee}7,000`,
    cycle: '/ year',
    sub: 'or ₹3,600 for 6 months',
    features: [
      'Everything in Standard',
      'Every Axiom feature 15× per week',
      'Audit trail review',
      'HOD approval workflow',
      '20 teachers incl. HOD',
    ],
    note: 'Extra batches of 10 teachers: ₹5,000/yr or ₹2,500/6mo.',
    cta: 'Get Started',
    primary: true,
  },
  {
    name: 'Enterprise',
    badge: 'For institutions',
    muted: false,
    price: `${rupee}15,000`,
    cycle: '/ year',
    sub: 'or ₹7,600 for 6 months',
    features: [
      'Everything in Professional',
      'Unlimited Axiom usage',
      'Bloom’s taxonomy support',
      'CO–PO matrix generation',
      '20 teachers incl. HOD',
    ],
    note: 'Extra batches of 10 teachers: ₹6,000/yr or ₹3,000/6mo.',
    cta: 'Contact Us',
    primary: false,
  },
];

const Tick = () => <span className="ds-tick">✓</span>;
const No = () => <span className="ds-no">—</span>;
const Value = ({ children }) => <span className="ds-text-cell ds-col-ours">{children}</span>;

const comparison = [
  { feature: 'Create assessments', basic: <Tick />, std: <Tick />, pro: <Tick />, ent: <Tick /> },
  { feature: 'Teacher allocation (subjects)', basic: <No />, std: <Tick />, pro: <Tick />, ent: <Tick /> },
  { feature: 'HOD / reviewer approval', basic: <No />, std: <Tick />, pro: <Tick />, ent: <Tick /> },
  { feature: 'Audit trail', basic: <No />, std: <No />, pro: <Tick />, ent: <Tick /> },
  { feature: 'Axiom usage per tool', basic: <Value>1–2 total</Value>, std: <Value>3× / week</Value>, pro: <Value>15× / week</Value>, ent: <Value>Unlimited</Value> },
  { feature: 'Bloom’s taxonomy', basic: <Tick />, std: <No />, pro: <No />, ent: <Tick /> },
  { feature: 'CO–PO matrix', basic: <Tick />, std: <No />, pro: <No />, ent: <Tick /> },
  { feature: 'Teachers (incl. HOD)', basic: <Value>Trial</Value>, std: <Value>10</Value>, pro: <Value>20</Value>, ent: <Value>20</Value> },
  { feature: 'Add-on teachers', basic: <No />, std: <Value>+10</Value>, pro: <Value>+10</Value>, ent: <Value>+10</Value> },
];

const faqs = [
  { q: 'Why is there no monthly option on Standard?', a: 'Standard is priced for a full teaching cycle — six months or a year — so the per-teacher cost stays low. Professional and Enterprise keep the same rule to hold pricing simple.' },
  { q: 'What does "Axiom 3× per week" actually mean?', a: 'It means each Axiom tool in the Standard tier can be used three times a week, and the quota resets every week. Basic gives you a couple of uses per tool to try the experience; Professional raises that to fifteen uses with unlimited on Enterprise.' },
  { q: 'Which tier includes HOD approval?', a: 'Standard and above. Approval routing is how your institution stays in control of what gets published — it arrives the moment you move past the free trial.' },
  { q: 'What do Bloom’s taxonomy and the CO–PO matrix cost?', a: 'Nothing extra — they are bundled. They are included in the Basic trial and in Enterprise; Standard and Professional focus on workflow and auditing instead.' },
  { q: 'Can teachers be added without changing the whole plan?', a: 'Yes. In batches of ten at a fixed sliding rate: ₹5,000/yr (or ₹2,500/6mo) on Professional, ₹6,000/yr (or ₹3,000/6mo) on Enterprise.' },
  { q: 'Can I try an upgrade before buying it?', a: 'The 7-day trial is the honest answer — everything you would get in a paid plan, including Axiom’s usage limits, is on the table for one week. Buy after you have touched the real workflow.' },
];

const PricingPage = () => {
  return (
    <div>
      <div className="hero-video-container">
        <div className="web-threads-wrapper">
          <Hyperspeed effectOptions={hyperspeedPresets.cyberpunk} />
        </div>
        <div className="hero-video-overlay">
          <h1>Simple, honest pricing.</h1>
        </div>
      </div>

      <div className="page-content">
        <div className="ds-wrap" style={{ paddingTop: '8px' }}>
          <Reveal>
            <SectionHeader
              kicker="Pricing"
              title="Four ways in. One way up."
              sub="Start free, move only when it saves you time. Every tier is priced per year or per six months — the two rhythms that match an academic calendar."
            />
          </Reveal>

          <div className="ds-pricing">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div className={`ds-card${t.primary ? ' ds-card--accent' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <Badge muted={t.muted}>{t.badge}</Badge>
                    <div className="ds-price">
                      {t.price} <small>{t.cycle}</small>
                    </div>
                    <p className="ds-price-sub">{t.sub}</p>
                    <ul style={{ marginTop: '20px' }}>
                      {t.features.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <p className="ds-price-note">{t.note}</p>
                    <Button variant={t.primary ? 'primary' : 'ghost'} href="/why-us">
                      {t.cta}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <hr className="ds-rule" />

          <Reveal>
            <div style={{ textAlign: 'left', marginBottom: '36px' }}>
              <SectionHeader
                kicker="Compare"
                title="What each plan unlocks."
                sub="No surprise upsells — read exactly what changes as you move up."
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="ds-table-wrap">
              <table className="ds-table ds-table-alternating">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th className="ds-col-ours">Professional</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td>{row.basic}</td>
                      <td>{row.std}</td>
                      <td className="ds-col-ours">{row.pro}</td>
                      <td>{row.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <hr className="ds-rule" />

          <Reveal>
            <div className="ds-split">
              <div style={{ textAlign: 'left' }}>
                <SectionHeader
                  kicker="What matters"
                  title="What the tiers are actually about."
                  sub="Pricing is a conversation about workload, not features. Pick the tier that removes the most of your least enjoyable work."
                />
              </div>
              <div className="ds-panel" style={{ textAlign: 'left' }}>
                <p><strong>Basic</strong> proves the workflow works with your paper in a week.</p>
                <p><strong>Standard</strong> is for the day-to-day paper machine — allocation, Axiom assist, and reviewers without the audit layer.</p>
                <p><strong>Professional</strong> adds the audit trail and heavier Axiom limits for faculties that want oversight and volume.</p>
                <p><strong>Enterprise</strong> is the full accreditation-friendly stack: unlimited Axiom, Bloom’s and the CO–PO matrix.</p>
              </div>
            </div>
          </Reveal>

          <hr className="ds-rule" />

          <Reveal>
            <div className="ds-grid ds-grid--2">
              <div className="ds-panel" style={{ textAlign: 'left' }}>
                <h3 className="bare">Frequently asked</h3>
                {faqs.map((f) => (
                  <details key={f.q} className="ds-faq__item" style={{ marginBottom: '10px' }}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
              <div style={{ display: 'grid', gap: '20px', alignContent: 'start' }}>
                <div className="ds-panel" style={{ textAlign: 'left' }}>
                  <h3 className="bare">Not sure which tier?</h3>
                  <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--ds-text-2)', margin: '0 0 20px' }}>
                    If you do not know whether your faculty is Standard or Professional, that is your answer: start with the 7-day trial and let the workflow tell you.
                  </p>
                  <Button variant="primary" href="/features">See the Features</Button>
                </div>
                <div className="ds-panel" style={{ textAlign: 'left', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.3)' }}>
                  <h3 className="bare">Wondering how we keep it secure?</h3>
                  <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--ds-text-2)', margin: '0 0 8px' }}>
                    Papers stay inside your workspace, every hand is logged in the audit trail, and nothing is sent to a public chat. The full answer lives on the Why page.
                  </p>
                  <Button variant="ghost" href="/why-us">How do you keep it secure?</Button>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="ds-section">
            <Reveal>
              <div className="ds-cta">
                <div style={{ textAlign: 'left' }}>
                  <h2>Start free. Upgrade when it saves you a week.</h2>
                  <p>Every paid plan begins as a 7-day trial. Bring a real assessment with you and see the difference before the first approval.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Button variant="primary" href="/why-us">Why Us</Button>
                  <Button variant="ghost" href="/features">Explore Features</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;