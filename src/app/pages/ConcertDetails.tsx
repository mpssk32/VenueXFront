import { useParams, useNavigate } from "react-router";
import { Calendar, MapPin, Clock, DollarSign, Music2, ArrowLeft, Ticket } from "lucide-react";
import { concerts } from "../data/concerts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ConcertDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const concert = concerts.find((c) => c.id === id);

  if (!concert) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl text-white mb-4">Концерт не найден</h2>
        <button
          onClick={() => navigate('/concerts')}
          className="text-purple-400 hover:text-purple-300"
        >
          ← Back to all concerts
        </button>
      </div>
    );
  }

  const formattedDate = new Date(concert.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleBuyTicket = () => {
    navigate('/checkout');
  };

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src={concert.image}
          alt={concert.artist}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        
        {/* Genre Badge */}
        <div className="absolute top-6 right-6">
          <span className="px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-sm">
            {concert.genre}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-5xl mb-3">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {concert.artist}
                </span>
              </h1>
              <p className="text-xl text-gray-400">{concert.venue}</p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#13131a] border border-purple-500/20">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Date</div>
                  <div className="text-white">{formattedDate}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#13131a] border border-blue-500/20">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Time</div>
                  <div className="text-white">{concert.time}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#13131a] border border-purple-500/20">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <div className="text-white">{concert.city}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#13131a] border border-blue-500/20">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Music2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Genre</div>
                  <div className="text-white">{concert.genre}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
              <h2 className="text-2xl text-white mb-4">О событии</h2>
              <p className="text-gray-400 leading-relaxed">{concert.description}</p>
            </div>

            {/* Venue Details */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <h3 className="text-xl text-white mb-3">Информация о месте</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  {concert.venue}, {concert.city}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - Ticket Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
                    <DollarSign className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wider">Цена билета</span>
                  </div>
                  <div className="text-5xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    ₽{concert.price}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">за человека</p>
                </div>

                <button
                  onClick={handleBuyTicket}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-lg transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center justify-center gap-2 group"
                >
                  <Ticket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Купить билет
                </button>

                <div className="mt-6 pt-6 border-t border-purple-500/20 space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Мгновенное подтверждение</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Мобильные билеты доступны</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Бесплатная отмена до 24 часов</span>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 rounded-xl bg-[#13131a] border border-purple-500/20">
                <p className="text-xs text-gray-500 text-center">
                  Secure payment powered by VenueX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
