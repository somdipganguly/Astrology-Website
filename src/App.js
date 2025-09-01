import React from "react";

// Images (replace with your Postimages Direct Links)
const COVER_PHOTO = "/images/Cover Photo.png";
const PROFILE_PHOTO = "/images/Profile Photo.png";

// YouTube video IDs
const VIDEOS = ["RSxekH9QtQY", "eAApZ9vZCFc", "ZkPJWMKsP8U"];

// Rashi (Moon sign) characteristics
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

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-grid place-items-center w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-200 via-pink-200 to-sky-200 text-lg">✨</span>
          <div className="leading-tight">
            <h1 className="font-bold">Astro Guru Goutam Chakraborty</h1>
            <p className="text-xs text-gray-500">Vedic Astrology • Kolkata</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 text-sm">
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#rashi" className="hover:opacity-70">Rashi</a>
          <a href="#videos" className="hover:opacity-70">Videos</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative h-[68vh] min-h-[420px] grid place-items-center text-center text-white"
      style={{ backgroundImage: `url(${COVER_PHOTO})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative max-w-3xl px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Daily Rashifal • Remedies • Vedic Guidance
        </h2>
        <p className="mt-3 text-sm md:text-base opacity-95">
          28+ years of Astrology, Tantra, Mantra & Vastu experience — guiding everyday life.
        </p>
        <div className="mt-5 flex gap-3 justify-center">
          <a href="#rashi" className="px-5 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-600">Explore Rashi</a>
          <a href="#contact" className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600">Book Consultation</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-center">
      <img src={PROFILE_PHOTO} alt="Astro Guru" className="rounded-2xl shadow-xl object-cover w-full h-full" />
      <div className="md:col-span-2 space-y-3">
        <h3 className="text-2xl font-semibold">About Astro Guru Goutam Chakraborty</h3>
        <p className="text-gray-700">
          With <strong>28+ years of experience</strong> in Vedic Astrology, Tantra, Mantra, Vastu Shastra, and Horoscope Reading,
          Guruji has been guiding people with peace, positivity and clarity.
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          <li>Daily Rashifal (in Bengali)</li>
          <li>Weekly & Monthly Predictions</li>
          <li>Astrology Tips & Remedies</li>
          <li>Festival Specials</li>
        </ul>
      </div>
    </section>
  );
}

function RashiGrid() {
  return (
    <section id="rashi" className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-semibold">⭐ Rashi Characteristics</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {RASHI.map((r) => (
          <div key={r.name} className="border rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="text-3xl">{r.symbol}</div>
            <div className="font-medium mt-1">{r.name}</div>
            <p className="text-sm text-gray-600 mt-1">{r.traits}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section id="videos" className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-semibold">🎬 Popular Videos</h3>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {VIDEOS.map((id) => (
          <div key={id} className="aspect-video rounded-2xl overflow-hidden border bg-black/5">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}`}
              title={`YouTube video ${id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-semibold">Contact / Booking</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="space-y-3">
          <div className="rounded-2xl border p-4 bg-white">
            <div className="text-sm text-gray-500">WhatsApp Business</div>
            <div className="text-lg font-semibold">+91 9875605769</div>
            <a href="https://wa.me/919875605769" target="_blank" rel="noreferrer"
              className="inline-block mt-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white">Chat on WhatsApp</a>
          </div>

          <div className="rounded-2xl border p-4 bg-white">
            <div className="text-sm text-gray-500">Call</div>
            <div className="text-lg font-semibold">+91 9748289424</div>
            <a href="tel:+919748289424"
              className="inline-block mt-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white">Call Now</a>
          </div>

          <div className="rounded-2xl border p-4 bg-white">
            <div className="text-sm text-gray-500">Email</div>
            <div className="text-lg font-semibold break-all">goutamchakraborty.astro@gmail.com</div>
            <a href="mailto:goutamchakraborty.astro@gmail.com"
              className="inline-block mt-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white">Send Email</a>
          </div>

          {/* Facebook & Instagram */}
          <div className="rounded-2xl border p-4 bg-white">
            <div className="text-sm text-gray-500">Social Media</div>
            <div className="flex gap-3 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61579999105515" target="_blank" rel="noreferrer"
                 className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white">Facebook</a>
              <a href="http://instagram.com/goutam_chakraborty_astro/" target="_blank" rel="noreferrer"
                 className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold">Astro Guru Goutam Chakraborty</div>
          <p className="text-gray-600 mt-1">Traditional guidance, modern presentation.</p>
          <div className="flex gap-3 mt-3">
            <a href="https://www.facebook.com/profile.php?id=61579999105515" target="_blank" rel="noreferrer"
               className="text-blue-600 hover:underline">Facebook</a>
            <a href="http://instagram.com/goutam_chakraborty_astro/" target="_blank" rel="noreferrer"
               className="text-pink-500 hover:underline">Instagram</a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Kundali • Matchmaking • Muhurat</li>
            <li>Remedies • Gem consultation • Vastu</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Astro Guru Goutam Chakraborty. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <Hero />
      <main className="space-y-10">
        <About />
        <RashiGrid />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
