// English site copy. `Dictionary` (derived from this file) is the shape the Spanish copy must match.
// Case studies are intentionally anonymized: no client names, logos or links.

const en = {
  meta: {
    title: 'Avila Systems — Software & AI Engineering',
    description:
      'Avila Systems is a software and AI engineering partner for US companies. We find the right solution, then design, build and run it in production.',
  },
  nav: {
    services: 'Services',
    process: 'Process',
    work: 'Work',
    about: 'About',
    faq: 'FAQ',
    cta: 'Book a call',
    menu: 'Toggle navigation menu',
    switchLabel: 'Ver en español',
    mainLabel: 'Main',
    footerLabel: 'Footer',
    skip: 'Skip to content',
    switchShort: 'ES',
  },
  hero: {
    eyebrow: 'Software & AI engineering studio',
    line1: 'The right solution,',
    line2: 'engineered to production.',
    sub: 'We partner with US companies to figure out where technology actually moves the business, then design, build and run it, from AI products to platforms that have outgrown their codebase.',
    primary: 'Book a call',
    secondary: 'See our work',
    badge: 'Remote from Venezuela · Working US business hours',
    scroll: 'Scroll',
  },
  stats: [
    { value: 25, suffix: '×', label: 'Event capacity growth for a ticketing client, from 1K to 25K attendees' },
    { value: 5, suffix: '+', label: 'Years shipping production software across web, backend and mobile' },
    { value: 5, suffix: '', label: 'Platforms delivered across live events, edtech, staffing and insurance' },
    { text: 'Daily', label: 'Production releases on active engagements' },
  ],
  problems: {
    eyebrow: 'Where we come in',
    title: 'Two conversations we have a lot',
    items: [
      {
        quote: '“We know AI could change our product. We just don’t know where it pays, or how to ship it reliably.”',
        body: 'We map where AI creates real value for your users and your margins, then build it with the evals and observability that keep it trustworthy in production.',
        proof: 'Built an AI classroom simulator and a personalized AI tutor',
      },
      {
        quote: '“Our platform got us here, but it won’t get us to the next stage.”',
        body: 'We modernize, optimize or replace systems that are holding the business back, without stopping the business while we do it.',
        proof: 'Took a ticketing platform from 1K to 25K-attendee events',
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'What we build',
    sub: 'One partner from the first whiteboard session to the production dashboard.',
    items: [
      {
        icon: 'ai',
        title: 'AI product engineering',
        body: 'LLM features, voice experiences and agents that hold up in production, not just in a demo.',
        points: ['OpenAI, Anthropic & Gemini', 'Real-time voice', 'RAG & retrieval', 'Evals & observability'],
      },
      {
        icon: 'modernize',
        title: 'Platform modernization',
        body: 'Replace legacy stacks or rebuild the parts of your codebase that slow you down, safely and incrementally.',
        points: ['Architecture & migrations', 'Performance & scale', 'Cloud infrastructure', 'AWS · GCP · Docker · Terraform'],
      },
      {
        icon: 'code',
        title: 'Custom software',
        body: 'Full-stack products across web, backend and mobile, built by engineers who ship to production every day.',
        points: ['Next.js & React', 'Django, FastAPI & Node', 'Postgres & Supabase', 'Mobile apps'],
      },
      {
        icon: 'flow',
        title: 'Automation & internal tools',
        body: 'Take the manual work out of operations with data pipelines, AI agents, CRMs and internal dashboards.',
        points: ['AI agents & workflows', 'Data pipelines (Airflow)', 'CRMs & back-office tools', 'Integrations'],
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'From problem to production',
    sub: 'Monthly engagements that can last from a single month to an ongoing partnership.',
    steps: [
      { title: 'Discover', body: 'We learn your business, your users and the problem behind the request, and find where technology actually pays.' },
      { title: 'Propose', body: 'You get a concrete plan: architecture, trade-offs, milestones and what we would not build.' },
      { title: 'Build', body: 'We ship in small, production-ready increments, often daily, so you see progress every week.' },
      { title: 'Evolve', body: 'We measure, iterate and maintain, and bring in more engineers and designers when the scope grows.' },
    ],
  },
  work: {
    eyebrow: 'Selected work',
    title: 'Systems running in production',
    sub: 'Client names are withheld for confidentiality. Happy to walk through any of these on a call.',
    outcomeLabel: 'Outcome',
    cases: [
      {
        key: 'ticketing',
        industry: 'Live events · Ticketing',
        title: 'Event ticketing platform',
        summary: 'A new multi-platform system replacing the legacy stack of a leading Latin American ticketing company, from sales to check-in at the door.',
        outcome: 'Biggest events grew from 1K to 25K attendees, and the client came back for more work.',
        stack: ['Django', 'Postgres', 'Docker', 'AWS'],
      },
      {
        key: 'classroom',
        industry: 'Edtech · Voice AI',
        title: 'AI classroom simulator',
        summary: 'Teachers rehearse real lessons in front of a classroom of AI students who listen, react and respond to their voice in real time.',
        outcome: 'A tool that didn’t exist before: a new product category for the edtech market.',
        stack: ['Next.js', 'Node.js', 'Supabase', 'OpenAI', 'Anthropic', 'Deepgram', 'Langfuse', 'PostHog'],
      },
      {
        key: 'tutor',
        industry: 'Edtech · LLM',
        title: 'Personalized AI tutor',
        summary: 'A learning platform where an AI guide adapts to each learner, with evals and observability keeping its guidance reliable.',
        outcome: 'A new way to personalize the learning experience for every student.',
        stack: ['Next.js', 'FastAPI', 'Supabase', 'Anthropic', 'Langfuse', 'PostHog'],
      },
      {
        key: 'workforce',
        industry: 'Staffing',
        title: 'Workforce time-tracking platform',
        summary: 'Clock-in and clock-out tracking for a staffing company’s workforce, giving operations one place to see who is on shift.',
        outcome: '',
        stack: [],
      },
      {
        key: 'crm',
        industry: 'Insurance · Construction',
        title: 'Call-center CRM',
        summary: 'A CRM built for US call centers serving insurance agencies in the construction industry.',
        outcome: '',
        stack: [],
      },
    ],
  },
  statsLabel: 'Highlights',
  stack: {
    label: 'Tools we ship with',
  },
  founder: {
    eyebrow: 'Founder',
    title: 'Senior engineering, from the person who answers your email',
    name: 'Alvaro Avila',
    role: 'Founder & Principal Engineer',
    bio: [
      'I’m a computer engineer (Universidad Simón Bolívar) who has spent the past years moving between data engineering, full-stack development and leading product teams. Today I focus on where those worlds meet: AI and software that has to work in production, not just in a demo.',
      'Avila Systems is how I work with clients directly. You talk to the engineer who designs and builds your system, and when a project needs more hands, I bring in a trusted network of developers and designers.',
    ],
    linkedin: 'Connect on LinkedIn',
    timeline: [
      { date: '2022 — Present', title: 'Software & AI Engineer · Moonshot Partners', body: 'Tech lead and engineer on AI products, including edtech platforms with voice and LLM features.' },
      { date: '2022 — 2024', title: 'Lead of Engineering · MdTicket', body: 'Designed and led the multi-platform system that replaced the company’s legacy stack.' },
      { date: '2022', title: 'Speaker · Airflow community', body: 'Gave a talk to the Apache Airflow community.' },
      { date: '2021', title: 'Data Engineer · Code for Venezuela  ·  Fullstack Developer · Cobuild Lab', body: 'Airflow pipelines, data quality and RAG work; React and serverless application delivery.' },
    ],
  },
  agencies: {
    eyebrow: 'For agencies & studios',
    title: 'Your senior engineering partner, under your brand',
    body: 'Agencies bring us into client projects when they need someone who can scope, build and ship without hand-holding. We work inside your process and your tools, and your client relationship stays yours.',
    cta: 'Partner with us',
    subject: 'Agency partnership',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions we hear often',
    items: [
      { q: 'How do engagements work?', a: 'We work in monthly engagements. Some clients need a single month to get a project unstuck, and others keep us on as their long-term engineering partner. We scope pricing together on the first call, based on what you need.' },
      { q: 'We don’t know exactly what we need yet. Is that a problem?', a: 'No. That’s usually where we start. Discovery exists to turn “we think AI could help” or “our system is slowing us down” into a concrete, prioritized plan.' },
      { q: 'Where are you based? Will time zones be an issue?', a: 'We work remotely from Venezuela, with hours that overlap US business hours. We work in English and Spanish.' },
      { q: 'Can you scale beyond one engineer?', a: 'Yes. Avila Systems is founder-led, and for larger scopes we assemble a team of trusted developers and designers we have shipped with before.' },
      { q: 'Do you work with agencies?', a: 'Yes. Agencies are some of our best partners. We can work under your brand as your senior engineering team.' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Have a problem worth solving?',
    body: 'Tell us what you’re trying to do. The first conversation is about your problem, not a sales pitch.',
    cta: 'Email us',
    subject: 'Project inquiry',
  },
  footer: {
    tagline: 'Software & AI engineering partner for US companies.',
    rights: 'All rights reserved.',
  },
}

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : T extends object
        ? { [K in keyof T]: Widen<T[K]> }
        : T

export type Dictionary = Widen<typeof en>
export default en as Dictionary
