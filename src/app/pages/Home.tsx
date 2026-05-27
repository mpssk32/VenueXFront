import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Sparkles } from "lucide-react";
import { concerts } from "../data/concerts";
import { ConcertCard } from "../components/ConcertCard";

export function Home() {
  const [searchCity, setSearchCity] = useState("");
  const navigate = useNavigate();

  const featuredConcerts = concerts.filter((c) => c.featured);
  const cities = Array.from(new Set(concerts.map((c) => c.city))).sort();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCity) {
      navigate(`/concerts?city=${encodeURIComponent(searchCity)}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-[#0a0a0f] py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">Ваш первый концерт здесь</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                живая музыка
              </span>
              <br />
              <span className="text-gray-500 text-lg">Узнайте о самых популярных местах, где вы проведете свое первое шоу</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              
            </p>

            {/* Search by City */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Поиск по городу..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  list="cities"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#13131a] border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <datalist id="cities">
                  {cities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all"
                >
                  Найти
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Concerts */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl text-white mb-2">Избранные концерты</h2>
            <p className="text-gray-500">Не пропустите эти потрясающие выступления</p>
          </div>
          <a
            href="/concerts"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Посмотреть все →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredConcerts.map((concert) => (
            <ConcertCard key={concert.id} concert={concert} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-gray-400">Предстоящие шоу</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-gray-400">Города</div>
          </div>
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              1M+
            </div>
            <div className="text-gray-400">Счастливые фанаты </div>
          </div>
        </div>
      </section>
    </div>
  );
}
