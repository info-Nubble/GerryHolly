
import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";
import SeoJsonLd from "./components/SeoJsonLd";

export default function Page() {
  return (
    <div id="top" className="min-h-screen">
      {/* SEO */}
      <SeoJsonLd />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Brand = Home */}
          <a
            href="#top"
            className="flex items-center gap-3 hover:opacity-90 transition"
            aria-label="Home"
          >
            <div className="h-10 w-10 rounded-xl overflow-hidden ring-1 ring-white/10 bg-transparent grid place-items-center shadow-lg shadow-cyan-500/20">
              <Image src="/logo_white_64.png" alt="GHL logo" width={28} height={28} />
            </div>
            <span className="font-bold tracking-wide">Coach Gerry Holly</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#top" className="hover:text-cyan-300">
              Home
            </a>
            <a href="#highlights" className="hover:text-cyan-300">
              Highlights
            </a>
            <a href="#roadmap" className="hover:text-cyan-300">
              Roadmap
            </a>
            <a href="#packages" className="hover:text-cyan-300">
              Packages
            </a>
            <a href="#sessions" className="hover:text-cyan-300">
              Sessions
            </a>
            <a href="#faq" className="hover:text-cyan-300">
              FAQ
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:brightness-110"
            >
              Apply
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden wave-top">
        <div className="absolute inset-0 hero-bg" />
        <div className="absolute inset-0 grid-overlay" />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28 relative">
          <Reveal>
            <div className="mb-4">
              <Image
                src="/logo_white_128.png"
                alt="Coach logo"
                width={96}
                height={96}
                className="drop-shadow-xl"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="small text-cyan-300/80">Lax 603 Evo • Specialized Training</p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="h1 mt-3">
              Elevate Your Game with{" "}
              <span className="text-cyan-400">Elite Off-Season Coaching</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl text-slate-300">
              Stop wishing. Start working. Transform into a complete lacrosse
              player with specialized, small-group training led by regionally
              renowned coach <span className="font-semibold">Gerry Holly</span>.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn btn-primary text-center">
                Apply for December–March Sessions
              </a>
              <a href="#highlights" className="btn btn-ghost text-center">
                See Program Highlights
              </a>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["The Fundamentals", "Master stickwork & footwork"],
              ["The Engine", "Endurance & conditioning"],
              ["The Edge", "Speed, agility, power"],
              ["Complete Player", "Offense & defense IQ"],
            ].map(([title, desc], i) => (
              <Reveal key={i} delay={100 + i * 80}>
                <div className="card">
                  <p className="text-sm text-cyan-300 font-semibold">{title}</p>
                  <p className="text-sm text-slate-300">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Program Highlights</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Elite small-group format for rapid development",
                "Progressive curriculum: skills → speed → strength → game IQ",
                "Video feedback & measurable goals each month",
                "College-level standards with age-appropriate progressions",
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="pill">Middle School Males — Personalized Coaching</span>
              <span className="pill">
                High School Males (Freshman–Senior) — Elite Group Training
              </span>
            </div>
          </div>

          <div className="card">
            <div className="glass rounded-2xl p-4">
              <p className="text-sm text-slate-400">
                “Coach Holly’s training gave my son the confidence and speed to make varsity.
                The attention to detail is next-level.”
              </p>
              <p className="mt-3 text-xs text-slate-500">— Parent, Class of 2026</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="glass rounded-xl p-4">
                <p className="text-3xl font-extrabold text-cyan-300">12</p>
                <p className="text-xs text-slate-400">Athletes per pod (max)</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-3xl font-extrabold text-cyan-300">4</p>
                <p className="text-xs text-slate-400">Monthly focus blocks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-16 bg-slate-900/40 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">December → March Roadmap</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              ["DEC", "Fundamentals Reset", "Stickwork, footwork, mechanics."],
              ["JAN", "Engine & Endurance", "Capacity, repeatability, core strength."],
              ["FEB", "Speed & Agility", "Explosive first step, COD, power."],
              ["MAR", "Game IQ & Edge", "Situational reads, offense/defense integration."],
            ].map(([m, title, desc], i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card text-sm">
                  <div className="text-xs tracking-widest text-cyan-300">{m}</div>
                  <div className="font-semibold mt-1">{title}</div>
                  <p className="text-slate-300 mt-2">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Packages</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["Survey & Plan", "Evaluation + custom plan", "Email summary & drills", "199"],
            ["Development Block", "4-week skill block", "Small group pods", "399"],
            ["Season Ready", "Monthly sessions", "Progress reports & video", "499"],
          ].map(([name, line1, line2, price], i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card p-6">
                <div className="text-cyan-300 font-semibold">{name}</div>
                <div className="mt-2 text-sm text-slate-300">• {line1}</div>
                <div className="text-sm text-slate-300">• {line2}</div>
                <div className="mt-4 text-3xl font-extrabold">${price}</div>
                <a href="#contact" className="mt-4 inline-block btn btn-primary">
                  Apply
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COACH BIO */}
      <section
        id="coach"
        className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-white/10"
      >
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/logo_white_128.png"
                alt="Coach icon"
                width={256}
                height={256}
                className="w-full h-auto object-contain bg-slate-950 p-10"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">About Coach Gerry Holly</h2>
              <p className="mt-4 text-slate-300">
                Regionally renowned lacrosse veteran with a track record of building confident,
                explosive athletes. Sessions emphasize perfect fundamentals, game-ready conditioning,
                and decision-making IQ.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="pill">Elite coaching</span>
                <span className="pill">Positive culture</span>
                <span className="pill">Outcome-driven</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SESSIONS */}
      <section id="sessions" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl glass p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Monthly Sessions • December — March
              </h3>
              <p className="mt-2 text-slate-300">
                38 Hampton Rd, Exeter, NH 03833 (off 101 via 95)
              </p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                <li>• Convenient indoor facility for winter training</li>
                <li>• Small groups organized by age & level</li>
                <li>• Progress reports and video feedback</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <p className="text-sm text-slate-400">Ready to raise your game?</p>
              <a
                href="#contact"
                className="mt-3 inline-block px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:brightness-110"
              >
                Apply for a Spot
              </a>
              <p className="mt-4 text-xs text-slate-500">
                Limited capacity. Acceptance prioritized for commitment and fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-y border-white/10"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Action and promo visuals. Add more photos anytime.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {["/flyer.png", "/logo_white_128.png", "/logo_white_64.png"].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src={src}
                  alt={`gallery ${i}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-16 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Location</h2>
          <p className="mt-2 text-slate-300">38 Hampton Rd, Exeter, NH 03833</p>

          <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=38%20Hampton%20Rd%2C%20Exeter%2C%20NH%2003833&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">FAQs</h2>

        <div className="mt-6 space-y-3">
          {[
            ["What ages do you accept?", "Middle school males and high school males (Freshman–Senior)."],
            ["How big are training groups?", "Pods are capped at 12 athletes for quality coaching."],
            ["Do you offer 1:1s?", "Yes—limited 1:1 slots are available by request."],
            ["What should players bring?", "Stick, gloves, indoor shoes, and water."],
          ].map(([q, a], i) => (
            <details key={i} className="rounded-xl glass p-4">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="mt-2 text-slate-300 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Apply / Contact</h2>
            <p className="mt-3 text-slate-300">Questions or ready to join? Email or DM on Instagram.</p>

            <div className="mt-6 space-y-3 text-slate-200">
              <a href="mailto:lax@603evo.com" className="flex items-center gap-3 hover:text-cyan-300">
                <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-white/10 border border-white/10">
                  @
                </span>
                lax@603evo.com
              </a>

              <a
                href="https://instagram.com/lax.603evo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-cyan-300"
              >
                <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-white/10 border border-white/10">
                  IG
                </span>
                @lax.603evo
              </a>
            </div>

            <p className="mt-8 text-xs text-slate-400">
              Middle School Males • High School Males (Freshman–Senior)
            </p>
          </div>

          {/* Formspree action is placeholder — replace with your real endpoint if needed */}
          <form
            className="rounded-2xl glass p-6 grid gap-4"
            action="https://formspree.io/f/mvoyzqjg"
            method="POST"
          >
            <div>
              <label className="text-sm text-slate-300">Athlete Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Parent Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Phone</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Age / Grade</label>
                <input
                  name="age"
                  className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Position</label>
                <input
                  name="position"
                  className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-300">Goals / Notes</label>
              <textarea
                name="notes"
                rows={4}
                className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <button
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:brightness-110"
              type="submit"
            >
              Submit Application
            </button>

            <p className="text-xs text-slate-500">
              Submitting sends details to the coaching staff for review. You’ll get a reply by email.
            </p>
          </form>
        </div>

        {/* Sticky mobile CTA */}
        <div className="sm:hidden sticky-apply mx-auto max-w-6xl px-4 mt-4">
          <a href="#contact" className="btn btn-primary w-full text-center">
            Apply Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Gerry Holly Lacrosse • Exeter, NH</p>
          <div className="flex items-center gap-4">
            <a href="mailto:lax@603evo.com" className="hover:text-cyan-300">
              lax@603evo.com
            </a>
            <span className="opacity-40">•</span>
            <a
              href="https://instagram.com/lax.603evo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              Instagram
            </a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-cyan-300">
              www.603evo.com
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-10 text-xs text-cyan-300 text-center">
          Designed by{" "}
          <a
            href="https://www.NubbleTechnology.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-200 underline decoration-cyan-400/40"
          >
            Nubble Technology
          </a>
        </div>
      </footer>
    </div>
  );
}

