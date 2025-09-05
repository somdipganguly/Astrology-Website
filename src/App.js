import React from "react";

/* ===========================
   PREP: put these images into /public/images/
   - hero-bg.jpg
   - profile.png        (transparent PNG of Guruji)
   - kurma.png
   - sriyantra.png
   - ganesha.png
   =========================== */

const HERO_BG = "/images/hero-bg.jpg";
const PROFILE = "/images/profile.png";
const KURMA = "/images/kurma.png";
const SRI = "/images/sriyantra.png";
const GANESHA = "/images/ganesha.png";

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

/* simple svg icons */
const IconWhats = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}><path d="M16.1 3C9.4 3 4 8.3 4 15c0 2.5.7 4.8 2 6.8L4 29l7.5-1.9c1.9 1 4.1 1.5 6.4 1.5 6.7 0 12.1-5.4 12.1-12.1S22.8 3 16.1 3zm7 17.4c-.3.8-1.7 1.5-2.4 1.5-.6 0-1.3.2-4.4-1.4-3.7-1.8-6-6.1-6.2-6.4-.2-.3-1.5-2-1.5-3.8s1-2.6 1.4-3c.3-.4.7-.5 1-.5h.7c.2 0 .5 0 .7.6.3.7 1 2.4 1.1 2.6.1.2.1.4 0 .6-.2.5-.3.7-.5 1-.2.2-.4.5-.2.9.2.5.9 1.7 2 2.8 1.4 1.4 2.8 1.9 3.3 2.1.3.1.7.1 1-.1.3-.2 1.1-1.3 1.4-1.8.3-.4.6-.4.9-.3.2.1 2.2 1 2.5 1.2.4.2.6.3.7.5.2.1.2.9 0 1.3z"/></svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);

/* ---------------- Header (minimal) ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo only */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-200 via-pink-200 to-sky-200 inline-grid place-items-center">
            ✨
          </div>
        </div>

        {/* nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-amber-400 hover:underline decoration-amber-300 decoration-2">About</a>
          <a href="#rashi" className="hover:text-amber-400 hover:underline decoration-amber-300 decoration-2">Rashi</a>
          <a href="#videos" className="hover:text-amber-400 hover:underline decoration-amber-300 decoration-2">Videos</a>
          <a href="#contact" className="hover:text-amber-400 hover:underline decoration-amber-300 decoration-2">Contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      className="relative min-h-[520px] md:h-[78vh] flex items-center"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* left: translucent card with copy */}
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 md:p-8 text-white shadow-lg">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm bg-white/10 px-3 py-1 rounded-full mb-2">
            ✨ Trusted Guidance • 28+ Years
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Daily Rashifal • Remedies • Vedic Guidance</h1>

          <p className="mt-3 text-sm md:text-base text-white/90">
            28+ years of Astrology, Tantra, Mantra & Vastu experience — guiding everyday life.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#rashi" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow hover:shadow-lg">
              🌟 Explore Rashi
            </a>
            <a href="#contact" className="px-6 py-2.5 rounded-xl border-2 border-purple-400 text-white hover:bg-purple-600/80 font-semibold">
              📅 Book Consultation
            </a>
            <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white inline-flex items-center gap-2">
              <IconWhats className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>

        {/* right: guruji portrait with golden glow */}
        <div className="relative flex justify-center md:justify-end items-center">
          {/* golden glow behind portrait */}
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-amber-400/10 blur-3xl -z-10" />
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl">
            {/* subtle ring */}
            <div className="absolute -inset-[6px] rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 blur-[4px] -z-20" />
            <img src={PROFILE} alt="Guruji" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>

      {/* decorative left zodiac wheel emphasis (faint) */}
      <img src={KURMA} alt="" className="pointer-events-none absolute left-6 bottom-8 w-40 opacity-7 blur-sm" style={{opacity: 0.06}} />

      {/* floating whatsapp */}
      <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer" className="fixed right-4 bottom-4 z-50 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 transition p-4 inline-flex items-center gap-2">
        <IconWhats className="w-5 h-5" />
        <span className="hidden sm:inline">Chat</span>
      </a>
    </section>
  );
}

/* small section divider with Sri image */
function SectionDivider({ title }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-center gap-4">
      <img src={SRI} alt="Sri Yantra" className="w-12 h-12 opacity-30" style={{opacity: 0.18}} />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <img src={SRI} alt="Sri Yantra" className="w-12 h-12 opacity-30" style={{opacity: 0.18}} />
    </div>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden">
          {/* kurma watermark */}
          <img src={KURMA} alt="" className="absolute right-6 bottom-6 w-56 opacity-10 pointer-events-none" style={{opacity: 0.08}} />
          <h3 className="text-2xl font-semibold mb-3">About Astro Guru Goutam Chakraborty</h3>
          <p className="text-gray-700 leading-relaxed">
            With <strong>28+ years of experience</strong> in Vedic Astrology, Tantra, Mantra, Vastu Shastra, and
            Horoscope Reading, Guruji has been guiding people with peace, positivity and clarity.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mt-4 text-gray-700">
            <li>• Daily Rashifal (in Bengali)</li>
            <li>• Weekly & Monthly Predictions</li>
            <li>• Astrology Tips & Remedies</li>
            <li>• Festival Specials</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Rashi grid ---------------- */
function RashiGrid() {
  return (
    <section id="rashi" className="bg-white">
      <SectionDivider title="⭐ Rashi Characteristics" />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RASHI.map(r => (
            <div key={r.name} className="rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition border">
              <div className="text-3xl">{r.symbol}</div>
              <div className="font-semibold mt-2">{r.name}</div>
              <p className="text-sm text-gray-600 mt-2">{r.traits}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Videos ---------------- */
function Videos() {
  return (
    <section id="videos" className="bg-gradient-to-b from-slate-50 to-white">
      <SectionDivider title="🎬 Popular Videos" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {VIDEOS.map(id => (
            <div key={id} className="aspect-video rounded-2xl overflow-hidden border bg-black/5 shadow">
              <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}`} title={id} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };
    try {
      await fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", { method: "POST", body: JSON.stringify(data) });
      alert("✅ Thank you! Your details have been submitted.");
      form.reset();
    } catch (err) {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <SectionDivider title="📞 Contact / Book Consultation" />

        <div className="grid md:grid-cols-3 gap-6">
          <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer" className="rounded-2xl p-4 bg-emerald-50 border border-emerald-200 flex items-center gap-3">
            <div className="text-emerald-600"><IconWhats className="w-6 h-6" /></div>
            <div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-emerald-700">+91 9875605769</div>
            </div>
          </a>

          <a href="tel:+919748289424" className="rounded-2xl p-4 bg-indigo-50 border border-indigo-200 flex items-center gap-3">
            <div className="text-indigo-600"><IconPhone className="w-6 h-6" /></div>
            <div>
              <div className="font-semibold">Call Now</div>
              <div className="text-sm text-indigo-700">+91 9748289424</div>
            </div>
          </a>

          <a href="mailto:goutamchakraborty.astro@gmail.com" className="rounded-2xl p-4 bg-sky-50 border border-sky-200 flex items-center gap-3">
            <div className="text-sky-600"><IconMail className="w-6 h-6" /></div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-sky-700">goutamchakraborty.astro@gmail.com</div>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 grid gap-4">
          <input name="name" placeholder="Your Name" className="w-full p-3 border rounded-xl" required />
          <input name="email" type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" required />
          <input name="phone" type="tel" placeholder="Your Phone" className="w-full p-3 border rounded-xl" />
          <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 border rounded-xl" required />
          <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">Submit</button>
        </form>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-indigo-950 to-purple-950 text-white">
      {/* subtle Ganesha watermark bottom-left */}
      <img src={GANESHA} alt="" className="absolute left-6 bottom-6 w-36 opacity-10 pointer-events-none" style={{opacity: 0.065}} />
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold">Astro Guru Goutam Chakraborty</div>
          <p className="mt-1 opacity-80">Traditional guidance, modern presentation.</p>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 opacity-80 space-y-1">
            <li>Kundali • Matchmaking • Muhurat</li>
            <li>Remedies • Gem consultation • Vastu</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 opacity-80 space-y-1">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#rashi" className="hover:underline">Rashi</a></li>
            <li><a href="#videos" className="hover:underline">Videos</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs opacity-70 pb-6">© {new Date().getFullYear()} Astro Guru Goutam Chakraborty. All rights reserved.</div>
    </footer>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <Hero />
      <main className="space-y-0">
        <About />
        <RashiGrid />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
