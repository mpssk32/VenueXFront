import { Link } from "react-router";
import { Calendar, MapPin, Tag } from "lucide-react";
import type { Concert } from "../data/concerts";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ConcertCardProps {
  concert: Concert;
}

export function ConcertCard({ concert }: ConcertCardProps) {
  const formattedDate = new Date(concert.date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link to={`/concerts/${concert.id}`}>
      <div className="group relative overflow-hidden rounded-xl bg-[#13131a] border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <ImageWithFallback
            src={concert.image}
            alt={concert.artist}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-transparent opacity-60" />
          
          {/* Genre Badge */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs">
              {concert.genre}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div>
            <h3 className="text-xl text-white mb-1 group-hover:text-purple-400 transition-colors">
              {concert.artist}
            </h3>
            <p className="text-sm text-gray-500">{concert.venue}</p>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>{concert.city}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1 text-lg">
              <Tag className="w-4 h-4 text-purple-400" />
              <span className="text-white">${concert.price}</span>
            </div>
            <span className="text-sm text-purple-400 group-hover:text-purple-300">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
