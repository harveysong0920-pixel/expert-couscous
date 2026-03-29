import Link from 'next/link';

const ticketPlans = [
  {
    name: 'Standard Pass',
    price: '$99',
    badge: 'Popular',
    description: 'Perfect for individual attendees who want full access to the main conference experience.',
    features: [
      'Access to all keynote sessions',
      'Entry to exhibition area',
      'Coffee breaks and networking',
      'Digital event materials',
    ],
  },
  {
    name: 'VIP Pass',
    price: '$199',
    badge: 'Best Value',
    description: 'For professionals who want premium access, priority seating, and exclusive networking opportunities.',
    features: [
      'Everything in Standard',
      'Priority front-row seating',
      'VIP networking lounge',
      'Exclusive partner dinner',
      'Fast-track check-in',
    ],
  },
  {
    name: 'Group Pass',
    price: '$399',
    badge: 'Team Choice',
    description: 'Designed for teams and companies attending together with better value and brand visibility.',
    features: [
      '5 attendee passes included',
      'Reserved team seating zone',
      'Company name on attendee list',
      'Shared networking access',
      'Priority support',
    ],
  },
];

export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[18%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
              AI
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Future Mobility
              </div>
              <div className="text-base font-semibold text-white">Summit 2026</div>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
            Tickets & Registration
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Choose your pass and secure your seat.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join industry leaders, innovators, and decision-makers for two days of keynotes,
            networking, and future-focused discussions.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-slate-300 sm:flex-row">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              26–27 March 2026
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Grand Harbor Convention Center
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ticketPlans.map((plan, index) => {
            const featured = index === 1;

            return (
              <div
                key={plan.name}
                className={`relative rounded-[2rem] border p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${
                  featured
                    ? 'border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 to-indigo-500/10 shadow-2xl shadow-cyan-950/30'
                    : 'border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold text-white">{plan.name}</div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] ${
                      featured
                        ? 'bg-cyan-400 text-slate-950'
                        : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    {plan.badge}
                  </div>
                </div>

                <div className="mt-6 text-5xl font-semibold text-white">{plan.price}</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{plan.description}</p>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <p className="text-sm leading-6 text-slate-200">{feature}</p>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${
                    featured
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                      : 'bg-white text-slate-950 hover:bg-slate-200'
                  }`}
                >
                  Buy {plan.name}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Registration Information
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              What happens after you purchase?
            </h2>
            <div className="mt-8 space-y-4">
              {[
                'You receive a confirmation email with your ticket details.',
                'Our team sends event updates and important reminders before the summit.',
                'You can check in on-site using your confirmation email or QR code.',
                'VIP and Group attendees receive additional onboarding details separately.',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-base leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 backdrop-blur-sm">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Need help?
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Contact our registration team
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              For invoice requests, partnership packages, accessibility support, or group
              registration assistance, reach out to us directly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="text-sm text-slate-400">Email</div>
                <div className="mt-1 text-lg font-medium text-white">
                  tickets@futuremobilitysummit.com
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="text-sm text-slate-400">Phone</div>
                <div className="mt-1 text-lg font-medium text-white">+1 (555) 240-2026</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <div className="text-sm text-slate-400">Support Hours</div>
                <div className="mt-1 text-lg font-medium text-white">
                  Monday – Friday, 9:00 AM – 6:00 PM
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="mt-8 inline-block rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
