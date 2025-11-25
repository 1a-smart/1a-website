import "../src/style.css";
import { createRoot } from "react-dom/client";

function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const footerLinkClass = "text-gray-600 hover:text-blue-700";
  const footerHeadingClass = "text-lg font-semibold mb-4 text-blue-700";

  return (
    <>
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-300">
        <div className={containerClass}>
          <div className="flex justify-between items-center h-16">
            <a href={`${baseUrl}`} className="text-xl font-bold text-blue-700 hover:text-blue-800">
              1A Smart
            </a>
          </div>
        </div>
      </nav>

      <section className="py-20 bg-white min-h-screen">
        <div className={containerClass}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-blue-700">Impressum</h1>

            <div className="bg-gray-100 rounded-lg p-8 space-y-6 text-gray-700">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">Angaben gemäß § 5 TMG</h2>
                <p className="mb-3">
                  <strong>1A Smart</strong>
                </p>
                <p className="mb-2">
                  <strong>Betreiber der Website „1a Gamer Lounge“</strong>
                  <br />
                  <strong className="mb-2 block">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                  </strong>
                  (1A Smart, Inh, Osman Yagci)
                  <br />
                  Schubertstr. 13
                  <br />
                  86462 Langweid am Lech
                  <br />
                  Deutschland
                  <br />
                  Telefon: 0821 999 515 95 <br />
                  E-Mail: 1asmartaugsburg@gmail.com
                  <br />
                  Vertreten durch: Osman Yagci
                  <br />
                  Umsatzsteuer-ID: DE402988799
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-700">Haftungsausschluss</h2>

                <h3 className="text-xl font-semibold mb-2 text-blue-700 mt-4">
                  Haftung für Inhalte
                </h3>
                <p className="mb-4">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                  Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-blue-700 mt-4">Haftung für Links</h3>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="text-xl font-semibold mb-2 text-blue-700 mt-4">Urheberrecht</h3>
                <p className="mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 border-t border-gray-300">
        <div className={`${containerClass} py-12`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            1a Smart - Gaming & Education
          </p>
        </div>
      </footer>
    </>
  );
}

const container = document.querySelector("#app")!;
const root = createRoot(container);
root.render(<App />);
