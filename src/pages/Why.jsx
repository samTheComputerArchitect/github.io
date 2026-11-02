import React from 'react';
import GradientWaves from '../components/GradientWaves';
import { SectionHeader, Button, Reveal } from '../components/ui/UI';
import '../styles/ui.css';

const objections = [
  {
    q: 'Why not just use ChatGPT or Gemini?',
    a: 'Because a chat box is not a workflow. ChatGPT writes words; it does not help you build a balanced paper, does not route it to an HOD for approval, does not format the question paper and answer key, and does not keep a traceable record of who approved what. Assessitonium is built around the actual job of assessment — creation, approval, formatting and mapping — so Axiom works inside your process, not instead of it.',
  },
  {
    q: 'How do I know my papers are secure?',
    a: 'Your assessment data stays inside your institution\'s workspace. Access is limited to the teacher and reviewer accounts you create — there are no public or anonymous views. Every share, edit and approval is recorded in the audit trail, so you can always see exactly who has seen a paper and when. You never paste your work into a public chat window.',
  },
  {
    q: 'What if I do not trust Axiom to write my papers?',
    a: 'You should not trust it to — and Assessitonium never asks you to. Axiom produces a structured draft; you review, edit and approve every question before anything goes anywhere. The approve button is the final gate, and it belongs to a human. On your first paper you can rewrite every suggestion and still come out ahead on time.',
  },
  {
    q: 'We already use spreadsheets and Word. Why change?',
    a: 'Because the real cost is not the tools — it is the glue. Re-typing the paper into formatting, chasing approvals by email, re-checking coverage topic by topic, building the CO–PO matrix by hand. Assessitonium removes the glue. Your existing documents still work: upload a paper or portions, and the relevant tool starts from there.',
  },
  {
    q: 'Do teachers lose time learning yet another tool?',
    a: 'No. The builder is drag-and-drop, like arranging cards. There are no templates to fill and no configuration to learn — you open the app and begin. Most examiners are comfortable within their first paper, and your reviewers never need to learn anything: they just open the link and approve.',
  },
  {
    q: 'What happens to my papers when I leave or the plan ends?',
    a: 'You export what you want — formatted question papers, answer keys, audit histories — whenever you like. Assessitonium is a tool for making your documents, not a vault that holds them hostage.',
  },
];

const x = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M20 6L9 17l-5-5" /></svg>;

const comparison = [
  { tool: 'Assessment workflow', ours: x, generic: 'None — every paper starts from a blank page' },
  { tool: 'Copies your syllabus / portions', ours: x, generic: 'Ignores them unless you prompt again' },
  { tool: 'Coverage check against the portions', ours: x, generic: 'You eyeball it' },
  { tool: 'Structured, formatted question paper', ours: x, generic: 'You format it yourself' },
  { tool: 'Axiom answer key from the approved paper', ours: x, generic: 'You build it by hand' },
  { tool: 'Send to HOD / reviewers for approval', ours: x, generic: 'Email and WhatsApp chains' },
  { tool: 'Audit trail (who, what, when)', ours: x, generic: 'Nothing to audit' },
  { tool: 'CO1–CO6 level mapping', ours: x, generic: 'Manual, per-question guesswork' },
  { tool: 'CO–PO matrix export', ours: x, generic: 'Hand-built spreadsheet' },
  { tool: 'Your data stays work-only', ours: x, generic: 'Everything is a public conversation' },
];

const WhyPage = () => {
  return (
    <div>
      <div className="hero-video-container">
        <div className="web-threads-wrapper">
          <GradientWaves
            horizonColor="#10B981"
            waveColor="#34D399"
            crestColor="#FFFFFF"
            speed={0.3}
            amplitude={2.6}
            waveScale={0.6}
            waveRatio={0.9}
            swell={38}
            turbulence={18}
            tilt={1.11}
            zoom={1.0}
            height={6}
            fogDepth={15}
            detail="medium"
            brightness={1.0}
            opacity={1.0}
            grain
            grainIntensity={0.05}
          />
        </div>
        <div className="hero-video-overlay">
          <h1>Why Assessitonium?</h1>
        </div>
      </div>

      <div className="page-content">
        <div className="ds-wrap" style={{ paddingTop: '8px' }}>
          <Reveal>
            <div style={{ textAlign: 'left' }}>
              <SectionHeader
                kicker="The honest questions"
                title="You asked them coming here. We will answer them now."
                sub="No fine print, no avoiding the obvious. Every objection below is one we have heard from examiners and HODs — and every one has a straight answer."
              />
            </div>
          </Reveal>

          <div className="ds-section">
            <Reveal>
              <div className="ds-split">
                <div style={{ textAlign: 'left' }}>
                  <SectionHeader kicker="vs. the chatbots" title="A chat box is not a workflow." sub="ChatGPT and Gemini are brilliant at words. They are useless at the five jobs an assessment actually needs: structure, coverage, approval, formatting and records." />
                  <div style={{ marginTop: '20px' }}>
                    <Button variant="primary" href="/features">See the features</Button>
                  </div>
                </div>
                <div className="ds-panel" style={{ textAlign: 'left', padding: 0 }}>
                  <div className="ds-table-wrap">
                    <table className="ds-table ds-table-alternating">
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'left' }}>Job it needs to do</th>
                          <th className="ds-col-ours">Assessitonium</th>
                          <th>ChatGPT / Gemini</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.map((row) => (
                          <tr key={row.tool}>
                            <td>{row.tool}</td>
                            <td className="ds-col-ours">{row.ours}</td>
                            <td className="ds-text-cell">{row.generic}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <hr className="ds-rule" />

          <Reveal>
            <div style={{ textAlign: 'left' }}>
              <SectionHeader kicker="Your data" title="How we handle the papers, and the people who write them." sub="Three commitments that cover the privacy questions you are probably thinking about right now." />
            </div>
          </Reveal>

          <div className="ds-grid ds-grid--3" style={{ marginTop: '20px' }}>
            {[
              { title: 'Work-only by default', text: 'Papers never leave your institution\'s workspace. Teacher codes, not personal accounts, are the unit of access, and reviewer roles — like HOD — are given out deliberately.' },
              { title: 'Every hand is logged', text: 'The audit trail records who shared what, who opened it and who approved it. If your accreditation review asks "who approved this paper?", you answer from the record — not from memory.' },
              { title: 'No public chat, ever', text: 'Nothing you build is pasted into a shared conversation. Axiom works inside your paper, on your portions, under your accounts.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="ds-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <hr className="ds-rule" />

          <Reveal>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              <SectionHeader kicker="Objections & answers" title="Everything else you were going to ask." />
            </div>
          </Reveal>

          <div className="ds-faq">
            {objections.map((o, i) => (
              <Reveal key={o.q} delay={(i % 3) * 80}>
                <details className="ds-faq__item">
                  <summary>{o.q}</summary>
                  <p>{o.a}</p>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="ds-section">
            <Reveal>
              <div className="ds-cta">
                <div style={{ textAlign: 'left' }}>
                  <h2>Still have a question?</h2>
                  <p>Good. Ask it before you sign up. Bring a paper you care about and a question we have not answered well enough — we will answer both.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Button variant="primary" href="/pricing">See Pricing</Button>
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

export default WhyPage;