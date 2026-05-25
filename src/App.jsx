import { useState } from 'react';

const contact = {
  phoneDisplay: '226 507 7472',
  phoneHref: 'tel:2265077472',
  email: 'tyler.northboundcurrent@gmail.com',
  emailHref: 'mailto:tyler.northboundcurrent@gmail.com'
};

const logoAsset = '/northbound-mark.webp';

function handleLeadFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get('name') || '';
  const business = formData.get('business') || '';
  const phone = formData.get('phone') || '';
  const email = formData.get('email') || '';
  const message = formData.get('message') || '';

  const subject = `Free reputation checkup request from ${business || name || 'website lead'}`;
  const body = [
    'New Northbound Currents checkup request:',
    '',
    `Name: ${name}`,
    `Business name: ${business}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    '',
    'What they need help with:',
    message
  ].join('\n');

  window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Plans', href: '#plans' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

const problemCards = [
  {
    title: 'Missed Reviews',
    copy: 'Happy customers move on with their day before leaving the proof your next customer needs.'
  },
  {
    title: 'Missed Calls',
    copy: 'A busy truck, counter, chair, or job site can turn a ready lead into a lost conversation.'
  },
  {
    title: 'Weak Follow-Up',
    copy: 'Interested people cool off when nobody has a simple system for staying in touch.'
  }
];

const services = [
  {
    title: 'Google Review Automation',
    copy: 'We help you ask real customers for reviews right after the job, follow up automatically, and make the review process simple from their phone.'
  },
  {
    title: 'Missed-Call Text-Back',
    copy: 'When someone calls from Google, Facebook, or a referral and you miss it, they should not disappear. We send an instant text so the conversation keeps moving.'
  },
  {
    title: 'Simple Websites',
    copy: 'No bloated $5,000 brochure site. Just a clean, mobile-friendly site that tells nearby customers what you do, where you work, and how to contact you.'
  },
  {
    title: 'Social Proof Posting',
    copy: 'Good reviews should not sit hidden. We turn real customer feedback into simple Facebook and Instagram posts that make your local business look active and trusted.'
  },
  {
    title: 'Lead Capture Forms',
    copy: 'Capture name, phone number, email, and job details so potential customers are easier to follow up with.'
  },
  {
    title: 'Basic Follow-Up Automation',
    copy: 'Simple reminders and messages that help keep leads from going cold.'
  }
];

const reviewExamples = [
  {
    business: 'Aqua Force Pressure Washing',
    service: 'Driveway clean-up',
    customer: 'Mark',
    accent: 'from-blue-600 to-sky-400',
    reply: 'Absolutely. The driveway looks brand new. I will leave a review now.',
    link: 'g.page/aquaforcepw'
  },
  {
    business: 'Vibrant Painting Co.',
    service: 'Interior painting',
    customer: 'Stephanie',
    accent: 'from-current-500 to-north-500',
    reply: 'Thanks so much. We love how the rooms turned out.',
    link: 'g.page/vibrantpainting'
  },
  {
    business: 'Sparkle Carpet Cleaning',
    service: 'Carpet cleaning',
    customer: 'Tyler',
    accent: 'from-north-700 to-slate-500',
    reply: 'Great service from start to finish. Review coming right up.',
    link: 'g.page/sparklecarpet'
  }
];

const plans = [
  {
    name: 'Review Starter',
    price: '$149/mo',
    bestFor: 'Getting more Google reviews',
    cta: 'Start With Reviews',
    features: [
      'Review request automation',
      'Follow-up reminders',
      'Custom review request image',
      'Google review link setup',
      'Simple monthly reporting'
    ]
  },
  {
    name: 'Review + Social Proof',
    price: '$199/mo',
    bestFor: 'Reviews plus Facebook and Instagram content',
    cta: 'Build Social Proof',
    featured: true,
    features: [
      'Everything in Review Starter',
      'Facebook review posts',
      'Instagram review posts',
      'Custom branded social graphics',
      'Repurposed customer feedback',
      'Light monthly content scheduling'
    ]
  },
  {
    name: 'Lead Capture System',
    price: '$299/mo',
    bestFor: 'Website, reviews, follow-up, and missed-call recovery',
    cta: 'Build My System',
    features: [
      'Simple website or landing page',
      'Missed-call text-back',
      'Lead capture form',
      'Automated lead follow-up',
      'Review automation',
      'Facebook and Instagram review posts',
      'Basic CRM/pipeline setup'
    ]
  }
];

const processSteps = [
  {
    title: 'Free Checkup',
    copy: 'We look at your Google profile, reviews, website, and follow-up process.'
  },
  {
    title: 'Simple Setup',
    copy: 'We build your review, social proof, or lead capture system depending on your plan.'
  },
  {
    title: 'Launch + Improve',
    copy: 'You start using the system, and we keep improving it as your business grows.'
  }
];

const reasons = [
  'Simple systems, not confusing dashboards',
  'Affordable for small local businesses',
  'Built around real reviews and real customers',
  'No fake reviews',
  'Fast setup',
  'Clear communication'
];

const proofItems = [
  'Contractor website built',
  'Example review request graphics',
  'Sample automation flow',
  'Before and after Google profile audit',
  'Demo of missed-call text-back'
];

const faqs = [
  {
    q: 'Do I need a new website?',
    a: 'Not always. If your current site is fine, we can start with reviews and follow-up first.'
  },
  {
    q: 'Can you guarantee reviews?',
    a: 'No. We cannot guarantee what customers will do. We make it easier and more consistent to ask real customers.'
  },
  {
    q: 'Is this fake review stuff?',
    a: 'No. This is only for real customers who have actually worked with your business.'
  },
  {
    q: 'What happens if I cancel?',
    a: 'You keep your public reviews and social posts. Ongoing automations, CRM tools, and active systems may stop depending on the setup.'
  },
  {
    q: 'Who is this for?',
    a: 'Local businesses that get customers through calls, referrals, Google, Facebook, Instagram, or word of mouth.'
  },
  {
    q: 'How fast can this be set up?',
    a: 'Basic review systems are faster to set up than full website and lead capture systems. Timelines depend on the plan and how quickly business info is provided.'
  }
];

const statusItems = [
  { label: 'Review Request Sent', detail: 'Follow-up queued', tone: 'blue' },
  { label: 'Missed Call Text-Back', detail: 'Reply sent in 18 sec', tone: 'teal' },
  { label: 'New Lead Captured', detail: 'Job details saved', tone: 'blue' },
  { label: 'Google Review Posted', detail: 'New 5-star review', tone: 'teal' }
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <ReviewTextExamples />
        <Pricing />
        <Process />
        <WhyNorthbound />
        <ProofSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-14 place-items-center rounded-lg bg-white p-1 shadow-card ring-1 ring-north-100">
            <BrandMark className="h-full w-full" />
          </span>
          <span className="text-base font-bold tracking-wide text-north-900 sm:text-lg">
            Northbound Currents
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-north-700"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#contact" size="sm">
            Free Checkup
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-north-900 shadow-sm lg:hidden"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-card lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-north-50 hover:text-north-700"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="mt-2" onClick={closeMenu}>
              Free Checkup
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_10%,rgba(36,127,216,0.17),transparent_34%),linear-gradient(135deg,#f8fbff_0%,#eef7ff_48%,#ffffff_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-slate-50" />

      <SectionWrap className="grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <div>
          <Pill>Review systems, lead capture, and simple automation</Pill>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-north-950 sm:text-5xl lg:text-6xl">
            Turn happy customers into reviews, missed calls into conversations,
            and local traffic into leads.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Northbound Currents builds simple review, text-back, and lead capture
            systems for local service businesses without the bloated agency price tag.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Get a Free Reputation Checkup</Button>
            <Button href="#plans" variant="secondary">
              View Plans
            </Button>
          </div>
          <p className="mt-6 max-w-xl text-sm font-medium leading-6 text-slate-500">
            Built for contractors, cleaners, painters, auto shops, barbers, home
            services, and local owner-operated businesses.
          </p>
        </div>

        <HeroVisual />
      </SectionWrap>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-5 top-12 hidden h-28 w-28 rounded-full border border-north-200/80 bg-white/70 blur-sm sm:block" />
      <div className="absolute -right-4 bottom-12 h-24 w-24 rounded-full border border-current-500/20 bg-current-500/10 blur-sm" />
      <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-5 shadow-soft sm:p-6">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-north-700 via-north-500 to-current-500" />
        <div className="relative rounded-xl border border-white/70 bg-white/95 p-4 shadow-card">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-12 w-14 shrink-0 place-items-center rounded-lg bg-white p-1 shadow-sm ring-1 ring-north-100">
                <BrandMark className="h-full w-full" />
              </span>
              <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-north-600">
                Live local growth system
              </p>
              <h2 className="mt-2 text-xl font-bold text-north-950">
                Northbound Dashboard
              </h2>
              </div>
            </div>
            <span className="rounded-full bg-current-500/10 px-3 py-1 text-xs font-bold text-current-600">
              Active
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            {statusItems.map((item, index) => (
              <div
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
                key={item.label}
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold text-white ${
                    item.tone === 'teal' ? 'bg-current-500' : 'bg-north-600'
                  }`}
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                </div>
                <CheckIcon />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {['Reviews', 'Calls', 'Leads'].map((label, index) => (
            <div className="rounded-xl bg-north-50 p-3 text-center" key={label}>
              <p className="text-xl font-bold text-north-800">
                {index === 0 ? '+18' : index === 1 ? '24/7' : '3m'}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <Section id="problem">
      <SectionHeading
        eyebrow="The easy wins are already there"
        title="Most local businesses do not need complicated marketing. They need to stop leaking easy wins."
        copy="Your customers already like your work. The problem is they forget to leave reviews. Your leads already call. The problem is missed calls turn into missed jobs. Your business already has proof. The problem is nobody sees it."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {problemCards.map((card) => (
          <InfoCard key={card.title} title={card.title} copy={card.copy} />
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" className="bg-white">
      <SectionHeading
        eyebrow="Services"
        title="Simple systems that help local businesses look trusted and respond faster."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <InfoCard
            key={service.title}
            title={service.title}
            copy={service.copy}
            icon={<CompassIcon />}
          />
        ))}
      </div>
    </Section>
  );
}

function ReviewTextExamples() {
  return (
    <Section id="review-examples">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <Pill>Review request examples</Pill>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-north-950 sm:text-4xl">
            Make it easy for local customers to leave proof while the job is still fresh.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            After a good job, most customers are willing to help. They just need a
            clear text, a simple link, and a reminder that their review helps other
            local homeowners choose the right business.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              'Personalized text message sent after the job',
              'Direct Google review link included',
              'Friendly follow-up if they forget',
              'Works for trades, shops, clinics, salons, and home services'
            ].map((item) => (
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200" key={item}>
                <CheckIcon />
                <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviewExamples.map((example) => (
            <PhoneMockup example={example} key={example.business} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function PhoneMockup({ example }) {
  return (
    <article className="mx-auto w-full max-w-[19rem] rounded-[2rem] border-[10px] border-slate-950 bg-white p-3 shadow-soft">
      <div className="mx-auto mb-3 h-5 w-24 rounded-b-2xl bg-slate-950" />
      <div className="flex items-center justify-between text-xs font-semibold text-slate-950">
        <span>9:41</span>
        <span className="text-[10px] tracking-[0.12em] text-slate-500">SMS</span>
      </div>

      <div className="mt-4 text-center">
        <div className={`mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${example.accent} text-lg font-black text-white shadow-card`}>
          NC
        </div>
        <h3 className="mt-2 text-sm font-bold leading-5 text-slate-950">{example.business}</h3>
        <p className="text-xs font-medium text-slate-500">{example.service}</p>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl bg-slate-100">
        <div className={`h-28 bg-gradient-to-br ${example.accent} p-4 text-white`}>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
            Review request
          </p>
          <p className="mt-5 text-3xl font-black">{example.customer}</p>
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-800">
        <p>Hi {example.customer}. Thanks again for choosing {example.business}.</p>
        <p className="mt-3">
          A quick Google review helps other local customers find us.
        </p>
        <p className="mt-3 font-semibold text-north-700">Review us here: {example.link}</p>
      </div>

      <div className="ml-auto mt-3 max-w-[88%] rounded-2xl rounded-br-md bg-blue-600 p-3 text-sm leading-5 text-white">
        {example.reply}
      </div>
    </article>
  );
}

function Pricing() {
  return (
    <Section id="plans">
      <SectionHeading
        eyebrow="Plans"
        title="Start simple. Upgrade when you want the full system."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-card ${
              plan.featured
                ? 'border-north-300 ring-4 ring-north-100'
                : 'border-slate-200'
            }`}
            key={plan.name}
          >
            {plan.featured && (
              <span className="absolute right-5 top-5 rounded-full bg-north-700 px-3 py-1 text-xs font-bold text-white">
                Popular
              </span>
            )}
            <div className="pr-20">
              <h3 className="text-xl font-bold text-north-950">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-500">Best for: {plan.bestFor}</p>
            </div>
            <p className="mt-6 text-4xl font-bold text-slate-950">{plan.price}</p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li className="flex gap-3 text-sm leading-6 text-slate-600" key={feature}>
                  <CheckIcon className="mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="#contact" className="mt-8" variant={plan.featured ? 'primary' : 'secondary'}>
              {plan.cta}
            </Button>
          </article>
        ))}
      </div>
      <p className="mt-5 text-center text-sm font-medium text-slate-500">
        Early client pricing. No long-term contract required.
      </p>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" className="bg-white">
      <SectionHeading eyebrow="Process" title="How it works" />
      <div className="grid gap-5 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6" key={step.title}>
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-north-700 text-lg font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-5 text-xl font-bold text-north-950">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{step.copy}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function WhyNorthbound() {
  return (
    <Section id="why">
      <div className="rounded-3xl bg-gradient-to-br from-north-900 via-north-800 to-north-700 p-6 text-white shadow-soft sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Pill variant="light">Why Northbound Currents</Pill>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Built for small service businesses that want practical help.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4"
                key={reason}
              >
                <CheckIcon className="text-white" />
                <span className="text-sm font-semibold leading-6 text-white/90">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProofSection() {
  return (
    <Section id="proof" className="bg-white">
      <SectionHeading
        eyebrow="Early proof"
        title="Early proof, real systems."
        copy="We are currently working with early clients and building simple, practical systems that local businesses can actually use."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {proofItems.map((item, index) => (
          <article
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            key={item}
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-sm font-bold text-north-700 shadow-sm">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-5 text-base font-bold leading-6 text-slate-900">{item}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Straight answers before we talk." />
      <div className="mx-auto max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
        {faqs.map((faq) => (
          <details className="group p-5 open:bg-north-50/50 sm:p-6" key={faq.q}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-bold text-north-950">
              {faq.q}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-north-700 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Pill>Free reputation checkup</Pill>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-north-950 sm:text-4xl">
            Get a free reputation checkup
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Want to see where your business is leaking reviews, leads, or
            follow-up opportunities? Reach out and I will take a quick look.
          </p>

          <div className="mt-7 grid gap-4">
            <ContactLine label="Phone" value={contact.phoneDisplay} href={contact.phoneHref} />
            <ContactLine label="Email" value={contact.email} href={contact.emailHref} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={contact.emailHref}>Email Tyler</Button>
            <Button href={contact.phoneHref} variant="secondary">
              Call Now
            </Button>
          </div>
        </div>

        <form
          className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-card sm:p-6"
          onSubmit={handleLeadFormSubmit}
        >
          {/* Replace the mailto submit handler with backend or form-service integration when ready. */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" />
            <Field label="Business name" name="business" autoComplete="organization" />
            <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
            <Field
              label="What do you need help with?"
              name="message"
              textarea
              className="sm:col-span-2"
            />
          </div>
          <button
            className="mt-5 w-full rounded-lg bg-north-700 px-5 py-3 text-sm font-bold text-white shadow-card transition hover:bg-north-800 focus:outline-none focus:ring-4 focus:ring-north-200"
            type="submit"
          >
            Request Checkup
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-north-950 text-white">
      <SectionWrap className="py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-16 place-items-center rounded-lg bg-white p-1.5">
                <BrandMark className="h-full w-full" />
              </span>
              <span className="text-lg font-bold">Northbound Currents</span>
            </div>
            <p className="mt-4 max-w-md leading-7 text-white/70">
              Simple review and lead capture systems for local businesses.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Phone: <a className="hover:text-white" href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </p>
            <p className="mt-1 text-sm text-white/70">
              Email: <a className="hover:text-white" href={contact.emailHref}>{contact.email}</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Plans', href: '#plans' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <a className="text-sm font-semibold text-white/70 hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </SectionWrap>
    </footer>
  );
}

function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <SectionWrap>{children}</SectionWrap>
    </section>
  );
}

function SectionWrap({ className = '', children }) {
  return <div className={`mx-auto max-w-7xl px-5 lg:px-8 ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <Pill>{eyebrow}</Pill>}
      <h2 className="mt-5 text-3xl font-bold leading-tight text-north-950 sm:text-4xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-lg leading-8 text-slate-600">{copy}</p>}
    </div>
  );
}

function InfoCard({ title, copy, icon }) {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      {icon && <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-north-50 text-north-700">{icon}</div>}
      <h3 className="text-xl font-bold text-north-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{copy}</p>
    </article>
  );
}

function Field({ label, name, type = 'text', textarea = false, className = '', autoComplete }) {
  const baseClass =
    'mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-north-500 focus:ring-4 focus:ring-north-100';

  return (
    <label className={`block text-sm font-bold text-slate-700 ${className}`}>
      {label}
      {textarea ? (
        <textarea className={`${baseClass} min-h-32 resize-y`} name={name} />
      ) : (
        <input className={baseClass} name={name} type={type} autoComplete={autoComplete} />
      )}
    </label>
  );
}

function Button({ href, children, variant = 'primary', size = 'md', className = '', onClick }) {
  const styles =
    variant === 'secondary'
      ? 'border border-north-200 bg-white text-north-800 hover:border-north-300 hover:bg-north-50'
      : 'bg-north-700 text-white shadow-card hover:bg-north-800';
  const sizing = size === 'sm' ? 'px-4 py-2.5 text-sm' : 'px-5 py-3 text-sm';

  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg font-bold transition focus:outline-none focus:ring-4 focus:ring-north-200 ${styles} ${sizing} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

function Pill({ children, variant = 'default' }) {
  const className =
    variant === 'light'
      ? 'border-white/20 bg-white/10 text-white'
      : 'border-north-200 bg-white text-north-700';

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${className}`}>
      {children}
    </span>
  );
}

function ContactLine({ label, value, href }) {
  return (
    <a
      className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-north-200 hover:bg-north-50"
      href={href}
    >
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          {label}
        </span>
        <span className="mt-1 block font-bold text-north-950">{value}</span>
      </span>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-north-700 shadow-sm">
        <ArrowIcon />
      </span>
    </a>
  );
}

function BrandMark({ className = '' }) {
  return (
    <img
      alt="Northbound Currents mountain and current logo"
      className={`object-contain ${className}`}
      src={logoAsset}
    />
  );
}

function CheckIcon({ className = 'text-current-600' }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m5 12 4.2 4.2L19 6.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m15.5 8.5-2.1 5-4.9 2.1 2.1-5 4.9-2.1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default App;
