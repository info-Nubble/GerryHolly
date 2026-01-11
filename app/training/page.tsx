import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

const ACUITY_URL =
  "https://app.acuityscheduling.com/schedule/c5d9ab33?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnz_feF0WRCcArm0iZ2mtC2Mv0Ld1Ic-QSLxSEjII6Xv2kUhHh01hyK9jPa9I_aem_V7q-xCsdnliTWIEIKoGjcA";

const IG_URL =
  "https://www.instagram.com/603evo?igsh=ZmZ3OG9rYTI5dWxy&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnt6L-UCop9sP0cKMAoxXohB6rx_2iCqvHWFURWMKhHP9wjcwPgWvT1TMj59U_aem_v15ixo1f6sGUk6fapIbyXQ";

type Video = {
  title: string;
  note?: string;
  provider: "vimeo" | "youtube";
  id: string;
  duration?: string;
  tags?: string[];
};

const VIDEOS: Video[] = [
  {
    title: "Warmup: Stickwork Fundamentals",
    note: "Do this before every session.",
    provider: "vimeo",
    id: "123456789", // replace
    duration: "10:12",
    tags: ["Warmup", "Stickwork"],
  },
  {
    title: "Footwork: Ladder + Change of Direction",
    provider: "youtube",
    id: "dQw4w9WgXcQ", // replace
    duration: "08:40",
    tags: ["Footwork", "Speed"],
  },
];

function Embed({ v }: { v: Video }) {
  const src =
    v.provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`
      : `https://player.vimeo.com/video/${v.id}`;

  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-950">
      <div className="aspect-video w-full">
        <iframe
          title={v.title}
          src={src}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function TrainingPage() {
  return (
    <div id="top" className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition" aria-label="Home">
            <div className="h-10 w-10 rounded-xl overflow-hidden ring-1 ring-white/10 bg-transparent grid place-items-center shadow-lg shadow-cyan-500/20">
              <Image src="/logo_white_64.png" alt="GHL logo" width={28} height={28} />
            </div>
            <span className="font-bold tracking-wide">Coach Gerry Holly</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <a href="#library" className="hover:text-cyan-300">Library</a>
            <a href={ACUITY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
              Scheduling
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
              Instagram
            </a>
            <a
              href={ACUITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:brightness-110"
            >
              Book
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
          <Reveal>
            <p className="text-cyan-300/80 text-sm">Training Vault</p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Training Videos</h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 max-w-2xl text-slate-300">
              Public for now (Phase 1). Replace the placeholder video IDs with Gerry’s real Vimeo/YouTube IDs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LIBRARY */}
      <section id="library" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {VIDEOS.map((v, i) => (
            <Reveal key={`${v.provider}-${v.id}-${i}`} delay={i * 60}>
              <div className="rounded-3xl glass p-4 md:p-5">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                {v.note ? <p className="mt-1 text-sm text-slate-300">{v.note}</p> : null}

                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  {v.duration ? (
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {v.duration}
                    </span>
                  ) : null}
                  <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {v.provider.toUpperCase()}
                  </span>
                  {(v.tags || []).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <Embed v={v} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Gerry Holly Lacrosse • Exeter, NH</p>
          <Link href="/" className="hover:text-cyan-300">Home</Link>
        </div>
      </footer>
    </div>
  );
}
