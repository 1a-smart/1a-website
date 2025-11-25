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
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-blue-700">Datenschutz</h1>

            <div className="bg-gray-100 rounded-lg p-8 space-y-6 text-gray-700">
              <div>
                <p className="mb-4">
                  Hier folgt der Datenschutztext. Dieser wird später hinzugefügt.
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

