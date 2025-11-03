import "../src/style.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Common classes
  const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const navLinkClass = "text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium";
  const navLinkMobileClass =
    "text-gray-700 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium";
  const footerLinkClass = "text-gray-600 hover:text-blue-700";
  const footerHeadingClass = "text-lg font-semibold mb-4 text-blue-700";

  // Navigation items
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#unser-angebot", label: "Unser Angebot" },
    { href: "#ueber-uns", label: "Über Uns" },
  ];

  return (
    <>
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-300">
        <div className={containerClass}>
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-blue-700">1a Nachhilfe</h1>
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
        className="min-h-screen flex items-center pt-16 bg-cover bg-center bg-no-repeat relative bg-[url('/images/aussenansicht.jpg')]"
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className={`${containerClass} relative z-10 w-full`}>
          <div className="mx-auto lg:mx-0 text-center lg:text-left max-w-3xl backdrop-blur-sm bg-white/60 rounded-xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800">
              Individuelle Nachhilfe
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Von der Vorklasse bis zum Abitur.
              <br />
              Lernen leicht gemacht – mit 1a Nachhilfe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <a
                href="#unser-angebot"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold text-center"
              >
                Mehr erfahren
              </a>
              <a
                href="#ueber-uns"
                className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-lg font-semibold text-center"
              >
                Über uns
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="unser-angebot" className="bg-gray-100 py-10 md:py-20">
        <div className={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          <img
            src="/images/aussenansicht.jpg"
            aria-hidden="true"
            className="w-full h-full object-cover lg:[clip-path:polygon(0%_0%,85%_0%,100%_100%,0%_100%)] lg:order-1"
            alt=""
          />
          <div className="md:pt-20 lg:py-20 px-4 sm:px-6 lg:px-8 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">Unser Angebot</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bei 1a Nachhilfe steht der Schüler im Mittelpunkt. Unser Ziel ist es, individuelle
              Förderung zu bieten – genau so, wie sie gebraucht wird. Egal ob Einzel- oder
              Gruppenunterricht, online oder bei uns vor Ort: wir passen uns flexibel an die
              Bedürfnisse jedes Schülers an.
            </p>
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="bg-white py-10 md:py-20">
        <div className={`${containerClass} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          <div className="md:pt-20 lg:py-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
              Über unsere Nachhilfe
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Wir decken alle Fächer von der Vorklasse bis zum Abitur ab und unterstützen sowohl
              Privatkunden als auch Schüler im Rahmen von Bildung und Teilhabe (BuT). Unsere
              erfahrenen Nachhilfelehrer arbeiten strukturiert, verständlich und mit Geduld – damit
              Lernen wieder Spaß macht und schnelle Fortschritte sichtbar werden.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              👉 Starte jetzt mit 1a Nachhilfe – für bessere Noten, mehr Motivation und ein starkes
              Selbstvertrauen in der Schule.
            </p>
          </div>

          <img
            src="/images/aussenansicht.jpg"
            aria-hidden="true"
            className="w-full h-full object-cover lg:[clip-path:polygon(0%_0%,100%_0%,100%_100%,15%_100%)]"
            alt=""
          />
        </div>
      </section>

      <footer className="bg-gray-100 border-t border-gray-300">
        <div className={`${containerClass} py-12`}>
          <div>
            <h3 className={footerHeadingClass}>Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className={footerLinkClass}>
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          <p className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600">
            Lernen leicht gemacht – mit 1a Nachhilfe.
          </p>
        </div>
      </footer>
    </>
  );
}

const container = document.querySelector("#app")!;
const root = createRoot(container);
root.render(<App />);
