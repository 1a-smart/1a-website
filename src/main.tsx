import "./style.css";
import { createRoot } from "react-dom/client";

function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const btnClass = "px-10 py-5 rounded-md bg-black/50";
  const linkClass = "text-slate-900 hover:text-cyan-600";
  const footerSection = "text-lg font-semibold mb-4 text-slate-700";
  const footerContainer = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12";

  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: `url(${baseUrl}images/aussenansicht.jpg)` }}
        ></div>
        <div className="text-center space-y-8 relative z-10 px-6 py-12 bg-black/70 backdrop-blur-sm rounded-xl shadow-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">1A Smart</h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center text-lg font-semibold">
            <a href={`${baseUrl}1a-gamer-lounge/`} className={btnClass}>
              Zur 1A Gamer Lounge
            </a>
            <a href={`${baseUrl}1a-nachhilfe/`} className={btnClass}>
              Zur 1A Nachhilfe
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 border-t border-gray-300">
        <div className={footerContainer}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div></div>
            <div>
              <h3 className={footerSection}>Unsere Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`${baseUrl}1a-gamer-lounge/`} className={linkClass}>
                    1A Gamer Lounge
                  </a>
                </li>
                <li>
                  <a href={`${baseUrl}1a-nachhilfe/`} className={linkClass}>
                    1A Nachhilfe
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={footerSection}>Rechtliches</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className={linkClass}>
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="#" className={linkClass}>
                    Impressum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-900">
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
