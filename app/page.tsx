import Link from 'next/link';
'use client';

const navItems = [
  'Summit',
  'Agenda',
  'Speakers',
  'Partners',
  'About',
  'Contact',
];

const speakers = [
  {
    name: 'Elena Fischer',
    role: 'Chief Digital Officer',
    company: 'Nova Mobility',
  },
  {
    name: 'Daniel Park',
    role: 'VP, Connected Platforms',
    company: 'Apex Automotive',
  },
  {
    name: 'Mina Laurent',
    role: 'Head of AI Products',
    company: 'DriveOS Labs',
  },
  {
    name: 'Jonas Weber',
    role: 'Director, Software-Defined Vehicle',
    company: 'Urban Motion Group',
  },
  {
    name: 'Sophia Romano',
    role: 'Global Engineering Lead',
    company: 'Forward Systems',
  },
  {
    name: 'Leo Bennett',
    role: 'CEO',
    company: 'VectorFleet',
  },
];

const agenda = [
  {
    time: '09:00',
    title: 'Opening Keynote: Reinventing Mobility with AI',
    meta: 'Main Stage · 35 min',
  },
  {
    time: '10:15',
    title: 'From Connected Cars to Intelligent Fleets',
    meta: 'Executive Panel · 45 min',
  },
  {
    time: '13:30',
    title: 'Building the Software-Defined Vehicle Stack',
    meta: 'Technical Forum · 40 min',
  },
  {
    time: '15:00',
    title: 'Partner Showcase & Networking Session',
    meta: 'Expo Hall · 60 min',
  },
];

const partnerTiers = [
  {
    label: 'Platinum Partners',
    brands: ['Nexora', 'Voltis', 'AutonIQ', 'Syntra'],
  },
  {
    label: 'Gold Partners',
    brands: ['CloudArc', 'MotionGrid', 'Qubit Drive', 'Terra Systems', 'Pilot AI', 'Mapline'],
  },
  {
    label: 'Media & Community',
    brands: ['Mobility Weekly', 'Tech Horizon', 'Drive Future', 'Startup Track'],
  },
];

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
      {children}
    </div>
  );
}

function SpeakerCard({
  speaker,
}: {
  speaker: { name: string; role: string; company: string };
}) {
  const initials = speaker.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 text-lg font-semibold text-white">
        {initials}
      </div>
      <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
      <p className="mt-2 text-sm font-medium text-cyan-300">{speaker.role}</p>
      <p className="mt-1 text-sm text-slate-400">{speaker.company}</p>
    </div>
  );
}

function PartnerBox({ name }: { name: string }) {
  return (
    <div className="flex min-h-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm font-semibold tracking-wide text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/10">
      {name}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[25%] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#summit" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
              AI
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Future Mobility
              </div>
              <div className="text-base font-semibold text-white">Summit 2026</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Get Tickets
          </a>
        </div>
      </header>

      <section
        id="summit"
        className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-20"
      >
        <div className="flex flex-col justify-center">
          <SectionTag>Conference landing page</SectionTag>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl xl:text-7xl">
            AI reshapes the next era of automotive innovation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A premium summit homepage inspired by modern mobility and technology events. Use it for conferences, industry forums, partner showcases, or executive networking programs.
          </p>

          <div className="mt-8 flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              26–27 March 2026
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Grand Harbor Convention Center
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Reserve your seat
            </a>
            <a
              href="#agenda"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              View agenda
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Attendees', value: '1,500+' },
              { label: 'Speakers', value: '40' },
              { label: 'Partners', value: '25+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-2xl shadow-cyan-950/30">
            <div className="border-b border-white/10 p-5">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-400/80" />
                <div className="h-3 w-3 rounded-full bg-amber-300/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-6">
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                  Featured 2026 Theme
                </div>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  From experimentation to strategic advantage.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Showcase your event theme with a premium visual panel, brief conference summary, sponsor highlights, and strong call-to-action.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-medium text-cyan-300">Executive audience</div>
                    <p className="mt-2 text-sm text-slate-400">
                      OEMs, suppliers, software leaders, startups, and investors.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-medium text-cyan-300">Partner visibility</div>
                    <p className="mt-2 text-sm text-slate-400">
                      Premium placements, expo presence, and branded networking moments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Quick access</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Agenda 2026</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Preview curated tracks, breakout sessions, and executive panels.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Partner zone</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Become a sponsor</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Promote your brand with high-impact conference exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            'In partnership with leading mobility innovators',
            'Enterprise networking and executive insights',
            'Panels, keynote sessions, and partner showcases',
            'Single-page premium event homepage',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="speakers" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <SectionTag>Featured speakers</SectionTag>
          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            A speaker grid that feels premium and easy to scan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Replace these placeholders with your real guests, titles, companies, and profile photos. The layout is designed to resemble a modern summit homepage while staying generic and brand-safe.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>
      </section>

      <section id="agenda" className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:pb-24">
        <div>
          <SectionTag>Agenda preview</SectionTag>
          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            Highlight the day in a clean, executive-friendly layout.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The original reference site gives agenda access high visibility. This version mirrors that intent with a simplified preview block and a stronger reading hierarchy.
          </p>
          <Link
  href="/tickets"
  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
>
  Get Tickets
</Link>
        </div>

        <div className="space-y-4">
          {agenda.map((item) => (
            <div
              key={item.time + item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="min-w-20 rounded-2xl bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-300">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.meta}</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="partners" className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <SectionTag>Partners</SectionTag>
          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            Structured partner sections inspired by conference sponsor walls.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Instead of copying logos from the reference site, this template uses clean placeholder tiles so you can plug in your own sponsors safely.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {partnerTiers.map((tier) => (
            <div key={tier.label}>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                {tier.label}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
                {tier.brands.map((brand) => (
                  <PartnerBox key={brand} name={brand} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
          <SectionTag>Context & vision</SectionTag>
          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            Explain why the event matters, not just what happens there.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The reference homepage spends real space on industry context and strategic relevance. This section follows that same pattern: start with the bigger market shift, then connect it to the audience, then make the conference feel essential.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-400">
            You can replace this text with your own industry narrative, event mission, or brand story without borrowing the source site’s wording.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
          <SectionTag>Partner with us</SectionTag>
          <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
            A strong sponsor CTA turns the homepage into a sales asset.
          </h2>
          <div className="mt-6 space-y-4 text-slate-300">
            {[
              'Showcase innovation with tailored on-site brand presence.',
              'Meet decision-makers across enterprise and mobility ecosystems.',
              'Amplify reach with editorial, social, and community exposure.',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <p className="text-base leading-7">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Download partner brochure
            </a>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-indigo-400/10 to-fuchsia-400/10 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">Ready to launch</div>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Use this as your new event homepage foundation.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Swap in your brand, event title, speakers, partners, and registration link. The layout is already structured to feel polished, modern, and commercially usable.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start customization
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Request brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
              Future Mobility Summit
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Built for premium conference and event brands.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              This homepage is inspired by the structure of a modern automotive summit site, but rewritten with original layout details, placeholder content, and reusable Next.js sections.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-300">
            <div>hello@futuremobilitysummit.com</div>
            <div>+1 (555) 240-2026</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
