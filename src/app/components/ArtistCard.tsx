import { Link } from "react-router";
import { Music2, Users } from "lucide-react";
import type { Artist } from "../data/artists";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArtistCardProps {
  artist: Artist;
  showDetails?: boolean;
}

export function ArtistCard({ artist, showDetails = true }: ArtistCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#13131a] border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <ImageWithFallback
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-transparent opacity-60" />
        
        {/* Genre Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-xs flex items-center gap-1">
            <Music2 className="w-3 h-3" />
            {artist.genre}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl text-white mb-1 group-hover:text-purple-400 transition-colors">
            {artist.name}
          </h3>
          {showDetails && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Users className="w-4 h-4 text-blue-400" />
              <span>{artist.members.length} members</span>
            </div>
          )}
        </div>

        {showDetails && (
          <p className="text-sm text-gray-400 line-clamp-2">
            {artist.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-purple-400 group-hover:text-purple-300">
            View Profile →
          </span>
        </div>
      </div>
    </div>
  );
}
