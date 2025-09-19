// src/App.js
import React, { useEffect, useState } from "react";

/*
  Polished App.js for "Astro Guru Goutam Chakraborty"
  - Tailwind classes assumed (you already use CDN or PostCSS).
  - Replace image files in /public/images/ as listed below.
  - After deploying Google Apps Script, paste the WEB APP URL into GOOGLE_SCRIPT_URL.
*/

/* ------------------------- ASSET PATHS ------------------------- */
const HERO_BG = "/images/hero-bg.jpg";        // large background (1920x1080 recommended)
const PROFILE = "/images/profile.png";        // portrait (transparent PNG preferred)
const HEADER_ICON = "/images/header-icon.png";// small logo (64x64 or 128x128)
const KURMA = "/images/kurma.png";
const SRI = "/images/sriyantra.png";
const GANESHA = "/images/ganesha.png";
const RASHI_LEFT = "/images/rashi-left.png";
const RASHI_RIGHT = "/images/rashi-right.png";

/* ------------------------- YOUTUBE IDS & DATA ------------------------- */
const VIDEOS = ["RSxekH9QtQY", "eAApZ9vZCFc", "ZkPJWMKsP8U"];

const RASHI = [
  { name: "Mesha (Aries)", symbol: "♈", traits: "Proactive, courageous, energetic." },
  { name: "Vrishabha (Taurus)", symbol: "♉", traits: "Stable, patient, values comfort." },
  { name: "Mithuna (Gemini)", symbol: "♊", traits: "Curious, communicative, versatile." },
  { name: "Karka (Cancer)", symbol: "♋", traits: "Nurturing, protective, intuitive." },
  { name: "Simha (Leo)", symbol: "♌", traits: "Confident, creative, expressive." },
  { name: "Kanya (Virgo)", symbol: "♍", traits: "Analytical, service-oriented, precise." },
  { name: "Tula (Libra)", symbol: "♎", traits: "Diplomatic, fairness-seeking." },
  { name: "Vrishchika (Scorpio)", symbol: "♏", traits: "Intense, resilient, transformative." },
  { name: "Dhanu (Sagittarius)", symbol: "♐", traits: "Philosophical, adventurous, optimistic." },
  { name: "Makara (Capricorn)", symbol: "♑", traits: "Responsible, disciplined, strategic." },
  { name: "Kumbha (Aquarius)", symbol: "♒", traits: "Innovative, humanitarian, independent." },
  { name: "Meena (Pisces)", symbol: "♓", traits: "Empathic, imaginative, spiritual." },
];

/* ------------------------- HELPERS ------------------------- */
/** ImgWithFallback - prevents broken images from breaking layout */
function ImgWithFallback({ src, alt = "", className = "", fallback = null }) {
  const [errored, setErrored] = useState(false);
  if (!src) return fallback;
  return errored ? fallback : (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}

/* ------------------------- HEADER ------------------------- */
function Header({ scrolled }) {
  return (
    <header
      className={`fixed w-full z-50 transition-colors ${scrolled ? "bg-white/95 shadow-md" : "bg-transparent"}`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ImgWithFallback
            src={HEADER_ICON}
            alt="Astro Guru logo"
            className="w-8 h-8 rounded-full object-cover"
            fallback={<div className="w-8 h-8 rounded-full bg-amber-300 inline-grid place-items-center text-sm">✨</div>}
          />
          <div className={`${scrolled ? "text-slate-900" : "text-white"} leading-tight`}>
            <div className="font-semibold text-sm md:text-base">Astro Guru Goutam Chakraborty</div>
            <div className="text-[10px] md:text-xs opacity-80">Vedic Astrology • Kolkata</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm" aria-label="Primary">
          <a href="#about" className={`${scrolled ? "text-slate-800" : "text-white"} hover:text-amber-300`}>About</a>
          <a href="#rashi" className={`${scrolled ? "text-slate-800" : "text-white"} hover:text-amber-300`}>Rashi</a>
          <a href="#videos" className={`${scrolled ? "text-slate-800" : "text-white"} hover:text-amber-300`}>Videos</a>
          <a href="#contact" className={`${scrolled ? "text-slate-800" : "text-white"} hover:text-amber-300`}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------- HERO ------------------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative pt-16 min-h-[66vh] md:min-h-[78vh] grid place-items-center text-white"
      style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="backdrop-blur-sm bg-white/8 border border-white/5 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm bg-white/10 px-3 py-1 rounded-full mb-3">
            ✨ Trusted Guidance • 28+ Years
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Daily Rashifal • Remedies • Vedic Guidance
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/90">
            28+ years of Astrology, Tantra, Mantra & Vastu experience — guiding everyday life.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#rashi" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-semibold shadow hover:scale-[1.02] transition">
              🌟 Explore Rashi
            </a>
            <a href="#contact" className="px-6 py-2.5 rounded-xl border-2 border-purple-300 text-white hover:bg-purple-600/80 font-semibold transition">
              📅 Book Consultation
            </a>
            <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white inline-flex items-center gap-2 hover:scale-[1.03] transition">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end items-center">
          <div className="absolute -z-10 w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 opacity-28 blur-3xl" />

          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 rounded-full border-4 border-amber-300/90" />
            <ImgWithFallback
              src={PROFILE}
              alt="Astro Guru Goutam Chakraborty"
              className="w-[86%] h-[86%] object-cover rounded-full"
              fallback={<div className="w-full h-full flex items-center justify-center bg-amber-50 rounded-full text-3xl">👳</div>}
            />
          </div>
        </div>
      </div>

      {/* decorative kurma - subtle left + right */}
      <ImgWithFallback src={KURMA} alt="" className="pointer-events-none absolute left-6 bottom-8 w-48 hidden md:block" fallback={null} />
      <ImgWithFallback src={KURMA} alt="" className="pointer-events-none absolute right-6 bottom-8 w-48 hidden md:block" fallback={null} />
    </section>
  );
}

/* ------------------------- ABOUT ------------------------- */
function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-3 bg-white rounded-2xl p-6 shadow">
          <h3 className="text-2xl font-semibold">About Astro Guru Goutam Chakraborty</h3>
          <p className="text-gray-700">
            With <strong>28+ years of experience</strong> in Vedic Astrology, Tantra, Mantra, Vastu Shastra, and Horoscope Reading,
            Guruji has been guiding people with peace, positivity and clarity.
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 mt-3">
            <li>Daily Rashifal (in Bengali)</li>
            <li>Weekly & Monthly Predictions</li>
            <li>Astrology Tips & Remedies</li>
            <li>Festival Specials</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-xl overflow-hidden flex items-center justify-center p-6 bg-amber-50">
          <ImgWithFallback src={PROFILE} alt="Guruji portrait" className="w-44 h-44 rounded-full object-cover" fallback={<div className="w-44 h-44 rounded-full bg-amber-200" />} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------- RASHI GRID ------------------------- */
function RashiGrid() {
  return (
    <section id="rashi" className="relative py-12 section-bg">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex items-center justify-center gap-3 mb-6">
          <ImgWithFallback src={SRI} alt="Sri Yantra" className="w-12 h-12" fallback={<div className="w-12 h-12" />} />
          <h2 className="text-2xl font-semibold">⭐ Rashi Characteristics</h2>
          <ImgWithFallback src={SRI} alt="Sri Yantra" className="w-12 h-12" fallback={<div className="w-12 h-12" />} />
        </div>

        {/* decorative side images - desktop only and fully visible */}
        <ImgWithFallback src={RASHI_LEFT} alt="decor left" className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-28 z-0" fallback={null} />
        <ImgWithFallback src={RASHI_RIGHT} alt="decor right" className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-28 z-0" fallback={null} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {RASHI.map((r) => (
            <article key={r.name} className="rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg transition border hover:border-amber-200" aria-label={r.name}>
              <div className="flex items-center gap-4">
                <div className="text-3xl p-3 rounded-lg bg-gradient-to-tr from-amber-50 to-amber-100 text-amber-700">{r.symbol}</div>
                <div>
                  <h3 className="font-semibold">{r.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{r.traits}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- VIDEOS ------------------------- */
function Videos() {
  return (
    <section id="videos" className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold mb-6">🎬 Popular Videos</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {VIDEOS.map((id) => (
          <div key={id} className="aspect-video rounded-2xl overflow-hidden border bg-black/5 shadow-md">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`}
              title={`YouTube video ${id}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------- CONTACT (form wiring + anti-abuse client checks) ------------------------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  // <<< REPLACE THIS with Apps Script Web App URL after you deploy the script >>>
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwtX5jWy5AzW8u6MbScaRJEXi_L3MUDi0FlQYVsQwVX5-qq-tHzdlNtLhbUJ4Ihigef/exec";

  // client-side rate limit (30s)
  const canSendNow = () => {
    try {
      const last = localStorage.getItem("lastSubmitTime");
      if (!last) return true;
      return (Date.now() - Number(last)) > 30 * 1000;
    } catch {
      return true;
    }
  };
  const markSent = () => { try { localStorage.setItem("lastSubmitTime", String(Date.now())); } catch {} };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSendNow()) { setMessage("Please wait 30 seconds before sending another message."); return; }

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const userMessage = form.message.value.trim();
    const hp = form.hp ? form.hp.value : "";
    const ts = Number(form.ts ? form.ts.value : Date.now());

    if (!name || !email || !userMessage) { setMessage("Please fill Name, Email and Message."); return; }
    if (hp && hp.trim() !== "") { setMessage("Submission blocked."); return; }

    setSending(true); setMessage("");

    const payload = { name, email, phone, message: userMessage, hp, ts, source: "Website" };

    try {
      if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE_SCRIPT_WEB_APP_URL")) {
        console.log("Form local:", payload);
        setMessage("Form captured locally (no Apps Script URL set).");
        form.reset();
        markSent();
        setSending(false);
        return;
      }

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => null);

      if (json && json.status === "success") {
        setMessage("✅ Thank you — your message was submitted.");
        form.reset();
        markSent();
      } else {
        const err = (json && json.message) || "Submission failed — try again later.";
        setMessage("❌ " + err);
      }
    } catch (err) {
      console.error("submit error:", err);
      setMessage("❌ Network error — please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 section-bg">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6">📞 Contact / Book Consultation</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer" className="rounded-2xl p-4 bg-emerald-50 border border-emerald-200 flex items-center gap-3">
            <div className="text-emerald-600">WA</div>
            <div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-emerald-700">+91 9875605769</div>
            </div>
          </a>

          <a href="tel:+919748289424" className="rounded-2xl p-4 bg-indigo-50 border border-indigo-200 flex items-center gap-3">
            <div className="text-indigo-600">📞</div>
            <div>
              <div className="font-semibold">Call Now</div>
              <div className="text-sm text-indigo-700">+91 9748289424</div>
            </div>
          </a>

          <a href="mailto:goutamchakraborty.astro@gmail.com" className="rounded-2xl p-4 bg-sky-50 border border-sky-200 flex items-center gap-3">
            <div className="text-sky-600">✉️</div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-sky-700">goutamchakraborty.astro@gmail.com</div>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 grid gap-4">
          <input name="name" placeholder="Your Name" className="w-full p-3 border rounded-xl" required />
          <input name="email" type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" required />
          <input name="phone" type="tel" placeholder="Your Phone (optional)" className="w-full p-3 border rounded-xl" />
          <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 border rounded-xl" required />

          {/* Hidden anti-spam fields */}
          <input name="hp" type="text" autoComplete="off" defaultValue="" style={{ display: "none" }} />
          <input name="ts" type="hidden" defaultValue={Date.now()} />

          <button type="submit" disabled={sending} className="px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition">
            {sending ? "Sending..." : "Submit"}
          </button>

          <div className="text-sm text-gray-600 mt-2">{message}</div>
        </form>
      </div>

      {/* floating WhatsApp CTA */}
      <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer" className="fixed right-4 bottom-4 z-50 rounded-full bg-emerald-500 text-white shadow-xl p-4 inline-flex items-center gap-2 hover:bg-emerald-600 transition">
        <span className="text-white">💬</span>
        <span className="hidden sm:inline">Chat</span>
      </a>
    </section>
  );
}

/* ------------------------- FOOTER ------------------------- */
function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-purple-900 to-indigo-950 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm relative z-10">
        <div>
          <div className="font-semibold">Astro Guru Goutam Chakraborty</div>
          <p className="mt-1 text-gray-300">Traditional guidance, modern presentation.</p>
        </div>

        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Kundali • Matchmaking • Muhurat</li>
            <li>Remedies • Gem consultation • Vastu</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#rashi" className="hover:underline">Rashi</a></li>
            <li><a href="#videos" className="hover:underline">Videos</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 pb-6 relative z-10">© {new Date().getFullYear()} Astro Guru Goutam Chakraborty. All rights reserved.</div>

      {/* subtle ganesha watermark */}
      <ImgWithFallback src={GANESHA} alt="Ganesha" className="absolute left-6 bottom-6 w-44 pointer-events-none opacity-20" fallback={null} />
    </footer>
  );
}

/* ------------------------- APP ROOT ------------------------- */
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 72); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* small global styles for section backgrounds */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .section-bg { background: linear-gradient(180deg, rgba(250,250,252,1), rgba(245,243,250,1)); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header scrolled={scrolled} />
      <main className="mt-0">
        <Hero />
        <About />
        <RashiGrid />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
