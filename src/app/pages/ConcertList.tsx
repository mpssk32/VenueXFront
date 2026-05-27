import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import { Filter, Calendar as CalendarIcon, Music2 } from "lucide-react";
import { concerts } from "../data/concerts";
import { ConcertCard } from "../components/ConcertCard";

const genres = ['All', 'Rock', 'Electronic', 'Jazz', 'Indie', 'Hip-Hop', 'Pop'] as const;

export function ConcertList() {
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get('city');
  
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [dateFilter, setDateFilter] = useState<string>('all');

  const filteredConcerts = useMemo(() => {
    let filtered = [...concerts];

    // Filter by city from URL params
    if (cityParam) {
      filtered = filtered.filter(
        (concert) => concert.city.toLowerCase() === cityParam.toLowerCase()
      );
    }

    // Filter by genre
    if (selectedGenre !== 'All') {
      filtered = filtered.filter((concert) => concert.genre === selectedGenre);
    }

    // Filter by date
    const now = new Date();
    if (dateFilter === 'today') {
      filtered = filtered.filter((concert) => {
        const concertDate = new Date(concert.date);
        return concertDate.toDateString() === now.toDateString();
      });
    } else if (dateFilter === 'week') {
      const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter((concert) => {
        const concertDate = new Date(concert.date);
        return concertDate >= now && concertDate <= weekFromNow;
      });
    } else if (dateFilter === 'month') {
      const monthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter((concert) => {
        const concertDate = new Date(concert.date);
        return concertDate >= now && concertDate <= monthFromNow;
      });
    }

    // Sort by date
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return filtered;
  }, [cityParam, selectedGenre, dateFilter]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl mb-3">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {cityParam ? `Concerts in ${cityParam}` : 'All Concerts'}
          </span>
        </h1>
        <p className="text-gray-400">
          Просмотр {filteredConcerts.length} предстоящих шоу
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-6">
        {/* Genre Filter */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <Music2 className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">Жанр</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedGenre === genre
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent text-white'
                    : 'bg-[#13131a] border-purple-500/20 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Date Filter */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-gray-400">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">Диапазон дат</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { value: 'all', label: 'Все даты' },
              { value: 'today', label: 'Сегодня' },
              { value: 'week', label: 'На этой неделе' },
              { value: 'month', label: 'В этом месяце' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setDateFilter(option.value)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  dateFilter === option.value
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent text-white'
                    : 'bg-[#13131a] border-purple-500/20 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredConcerts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConcerts.map((concert) => (
            <ConcertCard key={concert.id} concert={concert} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl text-gray-400 mb-2">Шоу не найдены</h3>
          <p className="text-gray-600">Попробуйте изменить фильтры</p>
        </div>
      )}
    </div>
  );
}
