import "./style.css";
import { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  // Common classes - Light theme like 1A Nachhilfe
  const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const navLinkClass = "text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium";
  const navLinkMobileClass =
    "text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium";
  const footerLinkClass = "text-gray-600 hover:text-blue-700";
  const footerHeadingClass = "text-lg font-semibold mb-4 text-blue-700";

  // Navigation items
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#nachhilfe", label: "Nachhilfe" },
    { href: "#gaming", label: "Gaming" },
    { href: "#team", label: "Unser Team" },
  ];

  return (
    <>
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-300">
        <div className={containerClass}>
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-blue-700">1A Smart</h1>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className={navLinkClass}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <button
              className="md:hidden text-gray-700 hover:text-blue-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${mobileMenuOpen ? "" : "hidden"} bg-white border-t border-gray-300`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={navLinkMobileClass}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center md:items-start lg:pb-40 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${baseUrl}images/team.jpg)` }}
      >
        <div className={`${containerClass} relative z-10 w-full pt-8`}>
          <div className="mx-auto md:mx-0 text-center lg:text-left max-w-xl backdrop-blur-sm bg-white/70 rounded-xl p-6 shadow-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-blue-700">1A Smart</h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-4">
              Lernen & Gaming unter einem Dach
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Willkommen bei 1A Smart – deinem Ort für individuelle Nachhilfe und unvergessliche
              Gaming-Erlebnisse in Augsburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <a
                href="#nachhilfe"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold text-center"
              >
                Nachhilfe entdecken
              </a>
              <a
                href="#gaming"
                className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-lg font-semibold text-center"
              >
                Gaming entdecken
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="nachhilfe" className="py-20 bg-gray-100">
        <div className={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-700 font-semibold">Bildung</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
              1A Nachhilfe – Lernen leicht gemacht
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Bei 1A Nachhilfe steht der Schüler im Mittelpunkt. Wir bieten individuelle Förderung
              für alle Fächer – von der Vorklasse bis zum Abitur. Ob Einzel- oder Gruppenunterricht,
              online oder vor Ort: Wir passen uns flexibel an die Bedürfnisse jedes Schülers an.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Unsere erfahrenen Nachhilfelehrer arbeiten strukturiert, verständlich und mit Geduld –
              damit Lernen wieder Spaß macht und schnelle Fortschritte sichtbar werden.
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-blue-700 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Alle Fächer von Vorklasse bis Abitur</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-blue-700 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Einzel- und Gruppenunterricht</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-blue-700 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Bildung und Teilhabe (BuT) möglich</span>
              </li>
            </ul>
            <a
              href={`${baseUrl}1a-nachhilfe/`}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
            >
              Zur 1A Nachhilfe
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-20"></div>
              <img
                src={`${baseUrl}images/nachhilfe.jpg`}
                alt="1A Nachhilfe"
                className="relative rounded-2xl shadow-xl w-full max-w-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gaming" className="py-20 bg-white">
        <div className={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-20"></div>
              <img
                src={`${baseUrl}images/hero.jpg`}
                alt="1A Gamer Lounge"
                className="relative rounded-2xl shadow-xl w-full max-w-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <span className="text-cyan-700 font-semibold">Entertainment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-700">
              1A Gamer Lounge – Play. Compete. Chill.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Dein ultimatives Ziel für Gaming-Exzellenz in Augsburg! Die 1A Gamer Lounge bietet
              einen einladenden Raum, in dem Gamer sich vernetzen, konkurrieren und gemeinsam Spaß
              haben können.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Von Trading Card Games über Videospiele bis hin zu Brettspielen – wir haben für jeden
              Gamer das passende Angebot. Nimm an unseren regelmäßigen Turnieren teil oder genieße
              entspannte Gaming-Sessions mit Freunden.
            </p>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-cyan-700 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Trading Card Games (Pokémon, Yu-Gi-Oh!, One Piece, uvm.)</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-cyan-700 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Videospiele & E-Sports Turniere</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-cyan-700 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Brettspiele in gemütlicher Atmosphäre</span>
              </li>
            </ul>
            <a
              href={`${baseUrl}1a-gamer-lounge/`}
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
            >
              Zur 1A Gamer Lounge
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-gray-100">
        <div className={containerClass}>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-700 font-semibold">Das Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">Wir sind 1A Smart</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Unser leidenschaftliches Team vereint Bildung und Entertainment. Mit viel Herzblut
              schaffen wir einen Ort, an dem Lernen Spaß macht und Gaming-Träume wahr werden.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-2xl blur-xl opacity-15"></div>
            <img
              src={`${baseUrl}images/team.jpg`}
              alt="Das 1A Smart Team"
              className="relative rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 border-t border-gray-300">
        <div className={`${containerClass} py-12`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className={footerHeadingClass}>1A Smart</h3>
              <p className="text-gray-600">
                Lernen & Gaming unter einem Dach – dein Ort für Bildung und Entertainment in
                Augsburg.
              </p>
            </div>
            <div>
              <h3 className={footerHeadingClass}>Unsere Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`${baseUrl}1a-gamer-lounge/`} className={footerLinkClass}>
                    1A Gamer Lounge
                  </a>
                </li>
                <li>
                  <a href={`${baseUrl}1a-nachhilfe/`} className={footerLinkClass}>
                    1A Nachhilfe
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={footerHeadingClass}>Rechtliches</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`${baseUrl}datenschutz/`} className={footerLinkClass}>
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href={`${baseUrl}impressum/`} className={footerLinkClass}>
                    Impressum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600">
            1A Smart – Gaming & Education
          </p>
        </div>
      </footer>
    </>
  );
}

const container = document.querySelector("#app")!;
const root = createRoot(container);
root.render(<App />);
