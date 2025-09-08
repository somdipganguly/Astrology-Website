import React, { useEffect, useState } from "react";

/* ========= Put these image files in /public/images/ =========
   hero-bg.jpg
   profile.png
   kurma.png
   sriyantra.png
   ganesha.png
============================================================ */

const HERO_BG = "/images/hero-bg.jpg";
const PROFILE = "/images/profile.png";
const KURMA = "/images/kurma.png";
const SRI = "/images/sriyantra.png";
const GANESHA = "/images/ganesha.png";

/* YouTube video IDs (keep as-is or update) */
const VIDEOS = ["RSxekH9QtQY", "eAApZ9vZCFc", "ZkPJWMKsP8U"];

/* Rashi data */
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

/* ---- Small icons as inline SVG components ---- */
const IconWhats = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}><path d="M16.1 3C9.4 3 4 8.3 4 15c0 2.5.7 4.8 2 6.8L4 29l7.5-1.9c1.9 1 4.1 1.5 6.4 1.5 6.7 0 12.1-5.4 12.1-12.1S22.8 3 16.1 3zm7 17.4c-.3.8-1.7 1.5-2.4 1.5-.6 0-1.3.2-4.4-1.4-3.7-1.8-6-6.1-6.2-6.4-.2-.3-1.5-2-1.5-3.8s1-2.6 1.4-3c.3-.4.7-.5 1-.5h.7c.2 0 .5 0 .7.6.3.7 1 2.4 1.1 2.6.1.2.1.4 0 .6-.2.5-.3.7-.5 1-.2.2-.4.5-.2.9.2.5.9 1.7 2 2.8 1.4 1.4 2.8 1.9 3.3 2.1.3.1.7.1 1-.1.3-.2 1.1-1.3 1.4-1.8.3-.4.6-.4.9-.3.2.1 2.2 1 2.5 1.2.4.2.6.3.7.5.2.1.2.9 0 1.3z"/></svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);

/* ======================== Header with scroll behavior ======================== */
function Header({ scrolled }) {
  // scrolled = boolean controlling style
  return (
    <header className={`fixed w-full z-50 transition-colors ${scrolled ? "bg-white/95 shadow-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-300 via-pink-200 to-sky-200 inline-grid place-items-center">
            ✨
          </div>
          <div className={`${scrolled ? "text-slate-900" : "text-white"} flex flex-col`}>
  <div className="font-semibold text-sm md:text-base">Astro Guru Goutam Chakraborty</div>
  <div className="text-[10px] md:text-xs opacity-80">Vedic Astrology • Kolkata</div>
</div>

        </div>

        <nav className="hidden md:flex gap-6 text-sm items-center">
          <a href="#about" className={`${scrolled ? "text-slate-800 hover:text-amber-500" : "text-white hover:text-amber-200"} nav-link`}>About</a>
          <a href="#rashi" className={`${scrolled ? "text-slate-800 hover:text-amber-500" : "text-white hover:text-amber-200"} nav-link`}>Rashi</a>
          <a href="#videos" className={`${scrolled ? "text-slate-800 hover:text-amber-500" : "text-white hover:text-amber-200"} nav-link`}>Videos</a>
          <a href="#contact" className={`${scrolled ? "text-slate-800 hover:text-amber-500" : "text-white hover:text-amber-200"} nav-link`}>Contact</a>
        </nav>
      </div>

      <style>{`
        .nav-link { padding: 6px 8px; border-radius: 8px; transition: all .18s ease; }
        .nav-link:hover { transform: translateY(-2px); text-decoration: none; }
      `}</style>
    </header>
  );
}

/* ======================== Hero ======================== */
function Hero() {
  return (
    <section
      id="home"
      className="relative pt-16 min-h-[60vh] md:min-h-[78vh] flex items-center"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/25" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: card */}
        <div className="backdrop-blur-sm bg-white/10 border border-white/5 rounded-2xl p-6 md:p-8 text-white shadow-xl">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm bg-white/10 px-3 py-1 rounded-full mb-3">
            ✨ Trusted Guidance • 28+ Years
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Daily Rashifal • Remedies • Vedic Guidance</h1>

          <p className="mt-3 text-sm md:text-base text-white/90">
            28+ years of Astrology, Tantra, Mantra & Vastu experience — guiding everyday life.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#rashi" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-black font-semibold shadow hover:scale-[1.02] transition">
              🌟 Explore Rashi
            </a>

            <a href="#contact" className="px-6 py-2.5 rounded-xl border-2 border-purple-400 text-white hover:bg-purple-600/80 font-semibold transition">
              📅 Book Consultation
            </a>

            <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer"
               className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white inline-flex items-center gap-2 hover:scale-[1.03] transition">
              <IconWhats className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Guruji portrait */}
        <div className="relative flex justify-center md:justify-end items-center">
          {/* larger golden glow */}
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 opacity-30 -z-10 blur-3xl" />

          {/* decorative ring */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl overflow-visible">
            <div className="absolute inset-0 rounded-full border-4 border-amber-300/90 transform scale-105" />
            <div className="w-[86%] h-[86%] rounded-full overflow-hidden bg-amber-50 flex items-center justify-center">
              <img src={PROFILE} alt="Astro Guru Goutam Chakraborty" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* decorative Kurma (left & right faint) */}
      <img loading="lazy" src={KURMA} alt="Kurma Yantra" className="pointer-events-none absolute left-6 bottom-6 w-56" style={{ opacity: 0.20 }} />
      <img loading="lazy" src={KURMA} alt="" className="pointer-events-none absolute right-6 bottom-6 w-56" style={{ opacity: 0.18 }} />
    </section>
  );
}

/* ======================== Section utilities ======================== */
/* section-bg: gentle gradient to avoid stark white */
const SectionContainer = ({ id, children }) => (
  <section id={id} className="section-bg py-12">
    <div className="max-w-6xl mx-auto px-4">{children}</div>
  </section>
);

/* small decorative divider with sri yantra */
function SectionDivider({ title }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <img src={SRI} alt="Sri Yantra" className="w-12 h-12" style={{ opacity: 0.28 }} loading="lazy" />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <img src={SRI} alt="Sri Yantra" className="w-12 h-12" style={{ opacity: 0.28 }} loading="lazy" />
    </div>
  );
}

/* ======================== About ======================== */
function About() {
  return (
    <SectionContainer id="about">
      <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden">
        <h3 className="text-2xl font-semibold mb-3">About Astro Guru Goutam Chakraborty</h3>
        <p className="text-gray-700">
          With <strong>28+ years of experience</strong> in Vedic Astrology, Tantra, Mantra, Vastu Shastra, and Horoscope Reading,
          Guruji has been guiding people with peace, positivity and clarity.
        </p>

        <ul className="list-disc pl-5 text-sm text-gray-700 mt-4 grid sm:grid-cols-2 gap-2">
          <li>Daily Rashifal (in Bengali)</li>
          <li>Weekly & Monthly Predictions</li>
          <li>Astrology Tips & Remedies</li>
          <li>Festival Specials</li>
        </ul>

        {/* kurma watermark */}
        <img loading="lazy" src={KURMA} alt="Kurma watermark" className="absolute right-6 bottom-6 w-72 pointer-events-none" style={{ opacity: 0.22 }} />
      </div>
    </SectionContainer>
  );
}

/* ======================== Rashi Grid ======================== */
function RashiGrid() {
  return (
    <SectionContainer id="rashi">
      <SectionDivider title="⭐ Rashi Characteristics" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {RASHI.map((r) => (
          <div key={r.name} className="rounded-2xl p-5 bg-white shadow-sm transform transition hover:-translate-y-2 hover:shadow-2xl border hover:border-amber-300">
            <div className="flex items-center gap-4">
              <div className="text-3xl bg-gradient-to-tr from-amber-50 to-amber-100 p-3 rounded-lg text-amber-700">{r.symbol}</div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <p className="text-sm text-gray-600 mt-1">{r.traits}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

/* ======================== Videos ======================== */
function Videos() {
  return (
    <SectionContainer id="videos">
      <SectionDivider title="🎬 Popular Videos" />
      <div className="grid md:grid-cols-3 gap-6">
        {VIDEOS.map((id) => (
          <div key={id} className="aspect-video rounded-2xl overflow-hidden border bg-black/5 shadow-md">
            <iframe
  className="w-full h-full"
  src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`}
  title={`YouTube video ${id}`}
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

/* ======================== Contact ======================== */
function Contact() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    // this is placeholder — replace with your Google Apps Script web app URL if you want to save to Google Sheets
    const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL";

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      time: new Date().toISOString(),
    };

    try {
      if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_WEB_APP_URL") {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
      } else {
        // fallback: just log to console locally
        console.log("Form submitted:", data);
      }
      alert("Thank you — your message was submitted.");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    } finally {
      setSending(false);
    }
  }

  return (
    <SectionContainer id="contact">
      <SectionDivider title="📞 Contact / Book Consultation" />

      <div className="grid md:grid-cols-3 gap-6">
        {/* WhatsApp card */}
        <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer" className="rounded-2xl p-4 bg-emerald-50 border border-emerald-200 flex items-center gap-3">
          <div className="text-emerald-600"><IconWhats className="w-6 h-6" /></div>
          <div>
            <div className="font-semibold">WhatsApp</div>
            <div className="text-sm text-emerald-700">+91 9875605769</div>
          </div>
        </a>

        {/* Call card */}
        <a href="tel:+919748289424" className="rounded-2xl p-4 bg-indigo-50 border border-indigo-200 flex items-center gap-3">
          <div className="text-indigo-600"><IconPhone className="w-6 h-6" /></div>
          <div>
            <div className="font-semibold">Call Now</div>
            <div className="text-sm text-indigo-700">+91 9748289424</div>
          </div>
        </a>

        {/* Email card */}
        <a href="mailto:goutamchakraborty.astro@gmail.com" className="rounded-2xl p-4 bg-sky-50 border border-sky-200 flex items-center gap-3">
          <div className="text-sky-600"><IconMail className="w-6 h-6" /></div>
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-sm text-sky-700">goutamchakraborty.astro@gmail.com</div>
          </div>
        </a>
      </div>

      {/* contact form */}
      <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 grid gap-4">
        <input name="name" placeholder="Your Name" className="w-full p-3 border rounded-xl" required />
        <input name="email" type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" required />
        <input name="phone" type="tel" placeholder="Your Phone" className="w-full p-3 border rounded-xl" />
        <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 border rounded-xl"></textarea>
        <button type="submit" disabled={sending} className="px-6 py-3 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition">
          {sending ? "Sending..." : "Submit"}
        </button>
      </form>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer"
         className="fixed right-4 bottom-4 z-50 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 transition p-4 inline-flex items-center gap-2">
        <IconWhats className="w-5 h-5" />
        <span className="hidden sm:inline">Chat</span>
      </a>
    </SectionContainer>
  );
}

/* ======================== Footer ======================== */
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

      {/* Ganesha watermark */}
      <img loading="lazy" src={GANESHA} alt="Ganesha watermark" className="absolute left-6 bottom-6 w-44 pointer-events-none" style={{ opacity: 0.16 }} />
    </footer>
  );
}

/* ======================== App root with scroll handler ======================== */
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // header becomes solid after we scroll past 60px (hero area)
    function onScroll() {
      setScrolled(window.scrollY > 72);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Global styles for the theme and section backgrounds */}
      <style>{`
        :root{
          --cosmic-1: #0b1033;
          --cosmic-2: #3b0764;
          --gold: #F6C04A;
        }
        .section-bg {
          background: linear-gradient(180deg, rgba(250,250,252,1), rgba(245,243,250,1));
        }
        /* make sure small nav links have smooth hover */
        .nav-link { transition: all .18s ease; border-radius: 8px; padding: 6px 8px; }
      `}</style>

      <Header scrolled={scrolled} />
      <main>
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
