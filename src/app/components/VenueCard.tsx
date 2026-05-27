import { Link } from "react-router";
import { Building2, MapPin, Users } from "lucide-react";
import type { Venue } from "../data/venues";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface VenueCardProps {
  venue: Venue;
  showDetails?: boolean;
}

export function VenueCard({ venue, showDetails = true }: VenueCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#13131a] border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <ImageWithFallback
          src={venue.image}
          alt={venue.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-transparent opacity-60" />
        
        {/* City Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 text-xs flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {venue.city}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl text-white mb-1 group-hover:text-blue-400 transition-colors">
            {venue.name}
          </h3>
          {showDetails && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>{venue.location}</span>
            </div>
          )}
        </div>

        {showDetails && (
          <p className="text-sm text-gray-400 line-clamp-2">
            {venue.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="w-4 h-4 text-blue-400" />
            <span>{venue.capacity.toLocaleString()} capacity</span>
          </div>
          <span className="text-sm text-blue-400 group-hover:text-blue-300">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
}
