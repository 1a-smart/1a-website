(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <nav class="top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 border-b border-slate-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg class="h-10 w-10 text-cyan-400" viewbox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="30" r="15" />
              <rect x="35" y="45" width="30" height="20" rx="5" />
              <rect x="25" y="70" width="50" height="15" rx="7" />
              <circle cx="35" cy="55" r="3" fill="#1e293b" />
              <circle cx="65" cy="55" r="3" fill="#1e293b" />
            </svg>
          </div>
          <div class="ml-3">
            <h1 class="text-xl font-bold text-cyan-400 neon-text">1a Gamer Lounge</h1>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#home" class="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#services" class="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#tcg-games" class="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium">TCG</a>
            <a href="#about" class="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium">Über Uns</a>
          </div>
        </div>
        <div class="md:hidden">
          <button id="mobile-menu-btn" class="text-gray-300 hover:text-cyan-400">
            <svg class="h-6 w-6" fill="none" viewbox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="md:hidden hidden bg-slate-800 border-t border-slate-700">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#home" class="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#services" class="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Services</a>
        <a href="#tcg-games" class="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">TCG</a>
        <a href="#about" class="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Über Uns</a>
      </div>
    </div>
  </nav>

  <section id="home" class="min-h-screen flex items-center pt-16 bg-cover bg-center bg-no-repeat relative bg-[url('/images/hero.jpg')]">
    <div class="absolute inset-0 bg-slate-900/60"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="mx-auto lg:mx-0 text-center lg:text-left max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 [text-shadow:0_0_10px_rgba(0,255,255,0.5)]">Play. Compete. Chill.<br> Alles in der 1a Gamer Lounge.</h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">Dein Wohnzimmer für Gaming, TCG & Turniere!</p>
        <div class="space-x-2">
          <a href="#services" class="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold shadow-neon">Mehr erfahren</a>
          <a href="#about" class="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold">Über uns</a>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="py-20 bg-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-cyan-400 [text-shadow:0_0_10px_rgba(0,255,255,0.5)]">Unsere Gaming Services</h2>
        <p class="text-xl text-gray-300">Entdecke das perfekte Gaming-Erlebnis für dich</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-slate-700 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-hover">
          <div class="mb-6">
            <svg class="w-16 h-16 mx-auto text-purple-400" viewbox="0 0 100 100" fill="currentColor">
              <rect x="20" y="15" width="60" height="70" rx="5" fill="currentColor" />
              <rect x="25" y="20" width="50" height="30" rx="3" fill="#1e293b" />
              <rect x="30" y="55" width="40" height="3" rx="1" fill="#1e293b" />
              <rect x="30" y="62" width="25" height="3" rx="1" fill="#1e293b" />
              <rect x="30" y="69" width="35" height="3" rx="1" fill="#1e293b" />
              <circle cx="45" cy="35" r="8" fill="#8b5cf6" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-purple-400">Trading Card Games</h3>
          <p class="text-gray-300 mb-6">Erlebe den Nervenkitzel von TCG-Turnieren, Deck-Building und kompetitivem Spiel mit anderen Enthusiasten.</p>
        </div>

        <div class="bg-slate-700 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-hover">
          <div class="mb-6">
            <svg viewBox="0 5 32 22" class="w-16 h-16 mx-auto text-cyan-400" fill="currentColor">
                <path d="m31.812 18.406-2.127-9.255A5.98 5.98 0 0 0 24 5a5.93 5.93 0 0 0-4.449 2h-7.102A5.93 5.93 0 0 0 8 5a5.97 5.97 0 0 0-5.684 4.151L.188 18.41A7 7 0 0 0 0 20c0 3.86 3.14 7 7 7a7.01 7.01 0 0 0 6.319-4h5.363a7.01 7.01 0 0 0 6.319 4c3.86 0 7-3.14 7-7a7 7 0 0 0-.189-1.594M25 26a6 6 0 0 1-5.651-4h-6.698A5.997 5.997 0 0 1 1 20c0-.471.06-.927.162-1.366l2.104-9.173C3.919 7.458 5.779 6 8 6c1.63 0 3.065.792 3.977 2h8.045C20.935 6.792 22.37 6 24 6c2.221 0 4.081 1.458 4.733 3.461l2.104 9.173c.103.439.163.895.163 1.366a6 6 0 0 1-6 6m-5-15a2 2 0 1 0-.001 3.999A2 2 0 0 0 20 11m0 3c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1m5-4a2 2 0 1 0-.001 3.999A2 2 0 0 0 25 10m0 3c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1m-5 3a2 2 0 1 0-.001 3.999A2 2 0 0 0 20 16m0 3c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1m5-4a2 2 0 1 0-.001 3.999A2 2 0 0 0 25 15m0 3c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1m-14-5h-1v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 3H9v2H7v-2H5v-2h2v-2h2v2h2z"
                fill="currentColor" />
            </svg>
          </div>

          <h3 class="text-2xl font-bold mb-4 text-cyan-400">Videospiele</h3>
          <p class="text-gray-300 mb-6">Tauche ein in die neuesten Videospiele mit High-End Gaming-Setups und Multiplayer-Turnieren.</p>
        </div>

        <div class="bg-slate-700 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-hover">
          <div class="mb-6">
            <svg class="w-16 h-16 mx-auto text-green-400" viewbox="0 0 100 100" fill="currentColor">
              <rect x="20" y="20" width="60" height="60" rx="5" fill="currentColor" />
              <rect x="25" y="25" width="50" height="50" rx="3" fill="#1e293b" />
              <rect x="30" y="30" width="10" height="10" fill="#10b981" />
              <rect x="45" y="30" width="10" height="10" fill="#f59e0b" />
              <rect x="60" y="30" width="10" height="10" fill="#ef4444" />
              <rect x="30" y="45" width="10" height="10" fill="#8b5cf6" />
              <rect x="45" y="45" width="10" height="10" fill="#06b6d4" />
              <rect x="60" y="45" width="10" height="10" fill="#f97316" />
              <circle cx="40" cy="65" r="4" fill="#fbbf24" />
              <circle cx="60" cy="65" r="4" fill="#ec4899" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-green-400">Brettspiele</h3>
          <p class="text-gray-300 mb-6">Genieße klassische und moderne Brettspiele in einer gemütlichen sozialen Umgebung, perfekt für Gruppen.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="tcg-games" class="py-20 bg-slate-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 md:mb-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-purple-400 [text-shadow:0_0_10px_rgba(139,92,246,0.5)]">Unsere TCG Auswahl</h2>
        <p class="text-xl text-gray-300">Entdecke eine große Vielfalt an Trading Card Games in unserem Store</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
        <div class="bg-white rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/20">
          <img src="/images/cardback/one-piece.png" alt="One Piece Card Game" class="w-40 h-20 mx-auto object-contain">
        </div>
          
        <div class="bg-white rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-400/20">
          <img src="/images/cardback/yugioh.jpg" alt="Yu-Gi-Oh!" class="w-40 h-20 mx-auto object-contain">
        </div>
          
        <div class="bg-white rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/20">
          <img src="/images/cardback/magic.png" alt="Magic the Gathering" class="w-40 h-20 mx-auto object-contain">
        </div>

        <div class="bg-white rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20">
          <img src="/images/cardback/pokemon.png" alt="Pokémon" class="w-40 h-20 mx-auto object-contain">
        </div>

        <div class="bg-white rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/20">
          <img src="/images/cardback/gundam.png" alt="Gundam Card Game" class="w-40 h-20 mx-auto object-contain">
        </div>

        <div class="bg-white rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-400/20">
          <img src="/images/cardback/lorcana.jpg" alt="Lorcana" class="w-40 h-20 mx-auto object-contain">
        </div>

        <div class="col-span-full lg:col-span-1 bg-white rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20">
          <svg class="w-12 h-12 mx-auto mb-3 text-black" viewbox="0 0 100 100" fill="currentColor">
            <rect x="25" y="20" width="50" height="60" rx="5" />
            <rect x="30" y="25" width="40" height="25" rx="3" fill="white" />
            <text x="50" y="46" text-anchor="middle" font-size="30">+</text>
            <rect x="32" y="55" width="36" height="2" rx="1" fill="white" />
            <rect x="32" y="60" width="32" height="2" rx="1" fill="white" />
            <rect x="32" y="65" width="20" height="2" rx="1" fill="white" />
          </svg>

          <h4 class="text-sm font-bold text-black">Und viele mehr!</h4>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-lg text-gray-300 mb-6">Wir führen eine große Auswahl an Trading Card Games für alle Spielertypen</p>

        <div class="flex flex-wrap justify-center gap-4 font-semibold">
          <div class="bg-slate-800 px-4 py-2 rounded-lg text-purple-400">
            Turniere &amp; Events
          </div>

          <div class="bg-slate-800 px-4 py-2 rounded-lg text-cyan-400">
            Booster Packs
          </div>

          <div class="bg-slate-800 px-4 py-2 rounded-lg text-green-400">
            Einzelkarten
          </div>

          <div class="bg-slate-800 px-4 py-2 rounded-lg text-yellow-400">
            Zubehör
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="timetable" class="py-20 bg-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 md:mb-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-purple-400 [text-shadow:0_0_10px_rgba(139,92,246,0.5)]">Wochenplan</h2>
        <p class="text-xl text-gray-300">Unsere Öffnungszeiten und geplanten Events</p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full rounded-lg overflow-hidden block md:table">
          <thead class="bg-slate-900 hidden md:table-header-group">
            <tr>
              <th class="px-6 py-4"></th>
              <th class="px-6 py-4"></th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-purple-400">Aktivität</th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-purple-400">Details</th>
            </tr>
          </thead>

          <tbody class="md:divide-y divide-slate-900 block md:table-row-group">
            <tr class="block md:table-row mb-0 md:mb-0 bg-slate-700 rounded-t-lg border-0 md:border md:border-slate-900 md:border-l-0 md:border-r-0">
              <td class="p-6 md:py-4 text-white text-2xl font-medium block md:table-cell" rowspan="3">
                Montag
              </td>
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                18:30 Uhr
              </td>
              <td class="px-6 py-0 md:py-4 text-cyan-400 block md:table-cell">
                Pokémon
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Locals
              </td>
            </tr>
            <tr class="block md:table-row mb-0 md:mb-0 bg-slate-700 border-0 md:border md:border-slate-900 md:border-l-0 md:border-r-0">
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                18:30 Uhr
              </td>
              <td class="px-6 py-0 md:py-4 text-cyan-400 block md:table-cell">
                Digimon
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Locals
              </td>
            </tr>
            <tr class="block md:table-row mb-4 md:mb-0 bg-slate-700 rounded-b-lg border-0 md:border md:border-slate-900 md:border-l-0 md:border-r-0">
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                20:00 Uhr
              </td>
              <td class="px-6 py-0 md:py-4 text-cyan-400 block md:table-cell">
                Flesh & Blood
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Locals
              </td>
            </tr>
            <tr class="block md:table-row mb-4 md:mb-0 bg-slate-700 rounded-lg border border-slate-900 md:border-l-0 md:border-r-0">
              <td class="px-6 pt-6 pb-0 md:py-4 text-white font-medium block md:table-cell">
                Dienstag
              </td>
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                10:00 - 22:00
              </td>
              <td class="px-6 py-0 md:py-4 text-purple-400 block md:table-cell">
                TCG Turnier
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Magic: The Gathering & Yu-Gi-Oh!
              </td>
            </tr>
            <tr class="block md:table-row mb-4 md:mb-0 bg-slate-700 rounded-lg border border-slate-900 md:border-l-0 md:border-r-0">
              <td class="px-6 pt-6 pb-0 md:py-4 text-white font-medium block md:table-cell">
                Mittwoch
              </td>
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                10:00 - 22:00
              </td>
              <td class="px-6 py-0 md:py-4 text-green-400 block md:table-cell">
                Brettspiele Abend
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Klassische & moderne Brettspiele
              </td>
            </tr>
            <tr class="block md:table-row mb-4 md:mb-0 bg-slate-700 rounded-lg border border-slate-900 md:border-0">
              <td class="px-6 pt-6 pb-0 md:py-4 text-white font-medium block md:table-cell">
                Donnerstag
              </td>
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                10:00 - 22:00
              </td>
              <td class="px-6 py-0 md:py-4 text-yellow-400 block md:table-cell">
                TCG Booster Draft
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Pokémon & One Piece
              </td>
            </tr>
            <tr class="block md:table-row mb-4 md:mb-0 bg-slate-700 rounded-lg border border-slate-900 md:border-l-0 md:border-r-0">
              <td class="px-6 pt-6 pb-0 md:py-4 text-white font-medium block md:table-cell">
                Freitag
              </td>
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                14:00 - 00:00
              </td>
              <td class="px-6 py-0 md:py-4 text-pink-400 block md:table-cell">
                Videospiel Turnier
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Kostenloses Gaming Event
              </td>
            </tr>
            <tr class="block md:table-row mb-4 md:mb-0 bg-slate-700 rounded-lg border border-slate-900 md:border-l-0 md:border-r-0">
              <td class="px-6 pt-6 pb-0 md:py-4 text-white font-medium block md:table-cell">
                Samstag
              </td>
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                10:00 - 00:00
              </td>
              <td class="px-6 py-0 md:py-4 text-orange-400 block md:table-cell">
                Großes Turnier
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Multi-TCG Championship
              </td>
            </tr>
            <tr class="block md:table-row mb-4 md:mb-0 bg-slate-700 rounded-lg border border-slate-900 md:border-l-0 md:border-r-0">
              <td class="px-6 pt-6 pb-0 md:py-4 text-white font-medium block md:table-cell">
                Sonntag
              </td>
              <td class="px-6 py-0 md:py-4 text-gray-300 block md:table-cell">
                12:00 - 20:00
              </td>
              <td class="px-6 py-0 md:py-4 text-blue-400 block md:table-cell">
                Family Day
              </td>
              <td class="px-6 pt-0 pb-6 md:py-4 text-gray-300 block md:table-cell">
                Entspannte Spielzeit für die ganze Familie
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center mt-12">
        <p class="text-lg text-gray-300 mb-6">Regelmäßige Events und Specials die ganze Woche über</p>

        <div class="flex flex-wrap justify-center gap-4 font-semibold">
          <div class="bg-slate-800 px-4 py-2 rounded-lg text-purple-400">
            Tägliche Öffnung
          </div>

          <div class="bg-slate-800 px-4 py-2 rounded-lg text-cyan-400">
            Turniere
          </div>

          <div class="bg-slate-800 px-4 py-2 rounded-lg text-green-400">
            Community Events
          </div>

          <div class="bg-slate-800 px-4 py-2 rounded-lg text-yellow-400">
            Specials
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="bg-slate-900">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="pt-20 lg:py-20 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 [text-shadow:0_0_10px_rgba(0,255,255,0.5)]">Über unseren Store</h2>
        <p class="text-lg text-gray-300 mb-6">Wir sind leidenschaftlich dabei, das ultimative Gaming-Erlebnis für Enthusiasten aller Art zu schaffen. Unsere Lounge bietet einen einladenden Raum, in dem Gamer sich vernetzen, konkurrieren und gemeinsam Spaß haben können.</p>
        <p class="text-lg text-gray-300 mb-8">Von kompetitiven Turnieren bis hin zu entspannten Gaming-Sessions bieten wir für jeden etwas in unserer community-orientierten Umgebung.</p>

        <ul class="flex flex-wrap gap-4 font-semibold">
          <li class="bg-slate-800 px-4 py-2 rounded-lg text-cyan-400">
            TCG-Karten
          </li>

          <li class="bg-slate-800 px-4 py-2 rounded-lg text-purple-400">
            Videospiele
          </li>

          <li class="bg-slate-800 px-4 py-2 rounded-lg text-green-400">
            Brettspiele
          </li>
        </ul>
      </div>

      <img src="/images/about-us.jpg" aria-hidden="true" class="w-full h-full object-cover lg:[clip-path:polygon(0%_0%,100%_0%,100%_100%,15%_100%)]">
    </div>
  </section>

  <footer class="bg-slate-800 border-t border-slate-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4 text-cyan-400">1a Gamer Lounge</h3>
          <p class="text-gray-400">Dein ultimatives Ziel für Gaming-Exzellenz.</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-cyan-400">Social Media</h3>
          
          <a href="https://instagram.com/augsburg.gamerlounge" target="_blank" class="inline-flex items-center text-gray-400 hover:text-cyan-400">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewbox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @augsburg.gamerlounge
          </a>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-cyan-400">Rechtliches</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-cyan-400">Datenschutz</a></li>
            <li><a href="#" class="text-gray-400 hover:text-cyan-400">Impressum</a></li>
          </ul>
        </div>
      </div>

      <p class="border-t border-slate-700 mt-8 pt-6 text-center text-gray-400">
        Play. Compete. Chill.
      </p>
    </div>
  </footer>
`;
