import { ConcertCard } from "../components/ConcertCard";
import { ArtistCard } from "../components/ArtistCard";
import { VenueCard } from "../components/VenueCard";
import { concerts } from "../data/concerts";
import { artists } from "../data/artists";
import { venues } from "../data/venues";

export function ComponentShowcase() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Компоненты для концертов
          </span>
        </h1>
        <p className="text-gray-400">Повторно используемые компоненты карт для платформы концертов</p>
      </div>

      {/* Concert Cards */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl text-white mb-2">Карты концертов</h2>
          <p className="text-gray-500">Отображение информации о концерте с местом, датой и ценой</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concerts.slice(0, 3).map((concert) => (
            <ConcertCard key={concert.id} concert={concert} />
          ))}
        </div>
      </section>

      {/* Artist Cards */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl text-white mb-2">Карты исполнителей</h2>
          <p className="text-gray-500">Показать исполнителей с жанром, участниками и описанием</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      {/* Venue Cards */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl text-white mb-2">Карты мест</h2>
          <p className="text-gray-500">Отображение информации о месте с локацией, вместимостью и деталями</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </section>

      {/* Compact Variations */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl text-white mb-2">Компактные варианты</h2>
          <p className="text-gray-500">Карты без подробных описаний для более плотного расположения</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artists.map((artist) => (
            <ArtistCard key={`compact-${artist.id}`} artist={artist} showDetails={false} />
          ))}
          {venues.slice(0, 2).map((venue) => (
            <VenueCard key={`compact-${venue.id}`} venue={venue} showDetails={false} />
          ))}
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl text-white mb-2">Токены дизайна</h2>
          <p className="text-gray-500">Палитра цветов и соглашения по стилю</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colors */}
          <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
            <h3 className="text-lg text-white mb-4">Палитра цветов</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#0a0a0f] border border-purple-500/20"></div>
                <div>
                  <p className="text-white text-sm">Background</p>
                  <p className="text-gray-500 text-xs">#0a0a0f</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#13131a] border border-purple-500/20"></div>
                <div>
                  <p className="text-white text-sm">Card Background</p>
                  <p className="text-gray-500 text-xs">#13131a</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <div>
                  <p className="text-white text-sm">Accent Gradient</p>
                  <p className="text-gray-500 text-xs">Purple to Blue</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-purple-500 border border-purple-400"></div>
                <div>
                  <p className="text-white text-sm">Purple Accent</p>
                  <p className="text-gray-500 text-xs">rgb(168, 85, 247)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-500 border border-blue-400"></div>
                <div>
                  <p className="text-white text-sm">Blue Accent</p>
                  <p className="text-gray-500 text-xs">rgb(59, 130, 246)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Effects */}
          <div className="p-6 rounded-xl bg-[#13131a] border border-blue-500/20">
            <h3 className="text-lg text-white mb-4">Interactive Effects</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white text-sm mb-2">Hover Glow</p>
                <div className="p-4 rounded-lg bg-[#0a0a0f] border border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all cursor-pointer">
                  Hover over me
                </div>
              </div>
              <div>
                <p className="text-white text-sm mb-2">Border Highlight</p>
                <div className="p-4 rounded-lg bg-[#0a0a0f] border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer">
                  Hover over me
                </div>
              </div>
              <div>
                <p className="text-white text-sm mb-2">Gradient Button</p>
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all w-full">
                  Click me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
