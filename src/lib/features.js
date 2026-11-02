/* Shared feature data — drives the /features hub and /features/:slug detail pages. */
export const FEATURES = [
  {
    slug: 'assessment-builder',
    icon: 'layers',
    title: 'Assessment Builder',
    tagline: 'Draft entire papers on a visual canvas by dragging in components — sections, questions, marks and instructions snap together in seconds.',
    body: 'Assessitonium replaces the blank Word page with a structured canvas built for the way examiners actually think. You start empty, drag in a section, drop in a question, assign marks and set instructions — the paper grows structurally instead of line by line.',
    points: [
      'Drag-and-drop question components',
      'Sections, marks and weightages visible in one view',
      'Live preview of the paper as you build',
      'Instructions and headers placed once, reused everywhere',
    ],
    benefits: [
      { title: 'Less formatting, always', text: 'Consistent headings, spacing and mark placement come from the structure — not from retyping.' },
      { title: 'Build the way you think', text: 'Section by section, question by question, the way a paper already forms in your head.' },
      { title: 'Reuse instead of rebuild', text: 'Start from a past paper or a saved template and adapt, rather than starting from zero.' },
    ],
    related: ['ai-question-generation', 'grammar-clarity-ai', 'ai-answer-keys'],
  },
  {
    slug: 'ai-question-generation',
    icon: 'bolt',
    title: 'Axiom Question Generation',
    tagline: 'Paste your syllabus or upload the portions and Axiom drafts a clean, balanced assessment that touches every required topic.',
    body: 'Give Assessitonium the topics you need to cover and Axiom returns a draft paper — not a generic list, but questions shaped around the portions you uploaded, aware of your coverage and balanced across the topics that matter.',
    points: [
      'Coverage checked against your uploaded portions',
      'Questions pitched at the right difficulty mix',
      'Ready-to-edit drafts, never flat text',
      'Regenerate a single question or the whole section',
    ],
    benefits: [
      { title: 'Syllabus-aware, not generic', text: 'Unlike a chatbot, it generates against your portions, not from a prompt about "a test".' },
      { title: 'Coverage you can see', text: 'A quick glance tells you every topic was touched before the paper ever leaves your hand.' },
      { title: 'A starting point, not a final answer', text: 'You keep the approval, the edit, and the final say.' },
    ],
    related: ['assessment-builder', 'grammar-clarity-ai', 'ai-answer-keys'],
  },
  {
    slug: 'approval-workflow',
    icon: 'shield',
    title: 'Approval Workflow',
    tagline: 'Route papers to higher authorities with a clear review flow. Status moves from pending to approved without chasing anyone.',
    body: 'Sending a paper for review should be one click, not an email thread. Assessitonium routes assessments to HODs and other reviewers with a clear status at every step — pending, returned with comments, or approved.',
    points: [
      'Send to reviewers in one click',
      'Track where every paper stands at a glance',
      'Comments attach to the specific question',
      'Approval history recorded against each reviewer',
    ],
    benefits: [
      { title: 'No more chasing', text: 'Status lives in the tool, so nobody has to ask "did you get my email?".' },
      { title: 'Feedback with context', text: 'Reviewers comment on the question itself, not in a separate email thread.' },
      { title: 'A clean hand-off', text: 'The approve button is the contract — and it is always recorded.' },
    ],
    related: ['audit-trail', 'assessment-builder', 'ai-answer-keys'],
  },
  {
    slug: 'ai-answer-keys',
    icon: 'check',
    title: 'Axiom Answer Keys',
    tagline: 'The approved paper turns into a structured, formatted answer key automatically — no retyping, no formatting battles.',
    body: 'Once a paper is approved, Assessing the answers is the next chore — and the most repetitive one. Axiom generates a structured answer key from the approved paper, aligned to the same marks and weightage you set.',
    points: [
      'Keys generated straight from the approved paper',
      'Marks aligned to the weightage you configured',
      'Structured, export-ready formatting',
      'Review the key question-by-question before it ships',
    ],
    benefits: [
      { title: 'One paper, two documents', text: 'The question paper and answer key stay in sync — no drift between the two.' },
      { title: 'Human review stays in charge', text: 'The key is a draft you verify; it is never handed out without a check.' },
      { title: 'Hours back every cycle', text: 'The most mechanical part of exam prep becomes a quick confirmation instead of an evening of work.' },
    ],
    related: ['assessment-builder', 'ai-question-generation', 'approval-workflow'],
  },
  {
    slug: 'grammar-clarity-ai',
    icon: 'wand',
    title: 'Axiom Grammar & Clarity',
    tagline: 'Polish every question as you write — clearer sentences, corrected spelling, and a consistent tone across the whole paper.',
    body: 'Weakly-worded questions produce weak answers and endless clarification emails. Axiom rewrites questions so the meaning is unambiguous — fixing spelling and grammar while keeping your wording intact.',
    points: [
      'One-click rephrase for clearer meaning',
      'Spelling and grammar fixed in place',
      'Consistent, professional tone across sections',
      'Compare the original and rewritten versions side by side',
    ],
    benefits: [
      { title: 'Fewer "what did you mean?" emails', text: 'Ambiguity is caught before the paper goes out, not after.' },
      { title: 'Your voice, sharper', text: 'The tool tightens your phrasing — it does not replace it with generic prose.' },
      { title: 'Consistency across long papers', text: 'Every section reads like it was written by the same careful hand.' },
    ],
    related: ['ai-question-generation', 'assessment-builder', 'ai-answer-keys'],
  },
  {
    slug: 'audit-trail',
    icon: 'history',
    title: 'Audit Trail',
    tagline: 'Every share, approval and edit is logged with who did it and when, giving you a complete, defensible record of the paper.',
    body: 'When a paper goes through several reviewers, someone eventually asks who approved what and when. The audit trail answers that instantly — a running log of every share, view, edit and approval, tied to a person and a timestamp.',
    points: [
      'Log of everyone the paper is shared with',
      'Timestamps on every action',
      'Approvals traced back to the approving reviewer',
      'The whole review history in one place',
    ],
    benefits: [
      { title: 'Defensible by default', text: 'For internal disputes or accreditation review, the record speaks for itself.' },
      { title: 'Accountability without effort', text: 'The trail writes itself while you work — nobody has to remember to log anything.' },
      { title: 'Privacy that is provable', text: 'The same log proves who was — and was not — given access.' },
    ],
    related: ['approval-workflow', 'ai-question-generation', 'assessment-builder'],
  },
];

/* Compact cards for the features hub (title, tagline, link). */
export const FEATURE_CARDS = FEATURES.map((f) => ({
  slug: f.slug,
  icon: f.icon,
  title: f.title,
  tagline: f.tagline,
}));

export const getFeature = (slug) => FEATURES.find((f) => f.slug === slug);