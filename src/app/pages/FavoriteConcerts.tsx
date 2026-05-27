import { useState } from "react";
import { Heart, Bell, BellOff, Calendar, MapPin, Music2, X } from "lucide-react";

export function FavoriteConcerts() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Lane 8",
      genre: "Progressive House",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Lane8",
      notifications: true,
      upcomingShows: 3,
      nextShow: { date: "Aug 15, 2026", venue: "Red Rocks Amphitheatre" },
    },
    {
      id: 2,
      name: "Polo & Pan",
      genre: "Electronic",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=PoloPan",
      notifications: true,
      upcomingShows: 2,
      nextShow: { date: "Sep 22, 2026", venue: "The Wiltern" },
    },
    {
      id: 3,
      name: "Glass Animals",
      genre: "Indie Rock",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=GlassAnimals",
      notifications: false,
      upcomingShows: 5,
      nextShow: { date: "Jul 10, 2026", venue: "Hollywood Bowl" },
    },
    {
      id: 4,
      name: "Tame Impala",
      genre: "Psychedelic Rock",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=TameImpala",
      notifications: true,
      upcomingShows: 1,
      nextShow: { date: "Oct 5, 2026", venue: "Staples Center" },
    },
    {
      id: 5,
      name: "Jon Hopkins",
      genre: "Ambient / Electronic",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=JonHopkins",
      notifications: false,
      upcomingShows: 4,
      nextShow: { date: "Jun 28, 2026", venue: "The Fonda Theatre" },
    },
    {
      id: 6,
      name: "Khruangbin",
      genre: "Psychedelic Funk",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Khruangbin",
      notifications: true,
      upcomingShows: 2,
      nextShow: { date: "Aug 20, 2026", venue: "Greek Theatre" },
    },
  ]);

  const toggleNotification = (id: number) => {
    setFavorites(
      favorites.map((fav) =>
        fav.id === id ? { ...fav, notifications: !fav.notifications } : fav
      )
    );
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-pink-900/20 to-[#0a0a0f] pt-8 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
            <h1 className="text-3xl text-white">Избранные артисты</h1>
          </div>
          <p className="text-gray-400">
            {favorites.length} {favorites.length === 1 ? "артист" : "артиста"} • Получайте уведомления, когда они анонсируют новые концерты
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-16">
        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-pink-500/20 p-6 text-center">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500/20 to-purple-500/10 rounded-2xl opacity-50 blur" />
            <div className="relative">
              <div className="text-3xl text-white mb-1">
                {favorites.reduce((sum, fav) => sum + fav.upcomingShows, 0)}
              </div>
              <div className="text-sm text-gray-400">Всего предстоящих шоу</div>
            </div>
          </div>
          <div className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-6 text-center">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-blue-500/10 rounded-2xl opacity-50 blur" />
            <div className="relative">
              <div className="text-3xl text-white mb-1">
                {favorites.filter((fav) => fav.notifications).length}
              </div>
              <div className="text-sm text-gray-400">Уведомления включены</div>
            </div>
          </div>
          <div className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-blue-500/20 p-6 text-center">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-2xl opacity-50 blur" />
            <div className="relative">
              <div className="text-3xl text-white mb-1">{favorites.length}</div>
              <div className="text-sm text-gray-400">Избранные артисты</div>
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((artist) => (
              <div
                key={artist.id}
                className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />

                <div className="relative">
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFavorite(artist.id)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#0a0a0f]/80 backdrop-blur-xl border border-pink-500/30 flex items-center justify-center text-pink-400 hover:text-pink-300 hover:bg-[#0a0a0f] transition-all"
                    title="Remove from favorites"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Artist Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] to-transparent" />
                  </div>

                  {/* Artist Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl text-white mb-1 group-hover:text-pink-300 transition-colors">
                          {artist.name}
                        </h3>
                        <p className="text-sm text-gray-400">{artist.genre}</p>
                      </div>
                      <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                    </div>

                    {/* Next Show */}
                    {artist.nextShow && (
                      <div className="mb-4 p-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/10">
                        <div className="text-xs text-purple-400 mb-2">Next Show</div>
                        <div className="flex items-center gap-2 text-sm text-white mb-1">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span>{artist.nextShow.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span>{artist.nextShow.venue}</span>
                        </div>
                      </div>
                    )}

                    {/* Upcoming Shows Count */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Music2 className="w-4 h-4" />
                        <span>
                          {artist.upcomingShows} предстоящих {artist.upcomingShows === 1 ? "шоу" : "шоу"}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => toggleNotification(artist.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all ${
                          artist.notifications
                            ? "bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30"
                            : "bg-[#0a0a0f]/50 border border-purple-500/20 text-gray-400 hover:border-purple-500/30"
                        }`}
                      >
                        {artist.notifications ? (
                          <>
                            <Bell className="w-4 h-4" />
                            <span className="text-sm">Уведомления включены</span>
                          </>
                        ) : (
                          <>
                            <BellOff className="w-4 h-4" />
                            <span className="text-sm">Уведомить меня</span>
                          </>
                        )}
                      </button>
                      <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transition-all text-sm">
                        посмотреть концерты
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl text-gray-400 mb-2">Избранные артисты отсутствуют</h3>
            <p className="text-gray-500 mb-6">
              Начните добавлять артистов в избранное, чтобы получать уведомления о их шоу
            </p>
            <a
              href="/concerts"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transition-all"
            >
              Просмотреть концерты
            </a>
          </div>
        )}

        {/* Help Text */}
        {favorites.length > 0 && (
          <div className="mt-8 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <h3 className="text-white mb-2 flex items-center gap-2">
              <Bell className="w-5 h-5 text-purple-400" />
              Получайте уведомления о новых концертах
            </h3>
            <p className="text-sm text-gray-400">
              Включите уведомления для артистов, чтобы получать оповещения о новых концертах и не пропустить любимые шоу
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
