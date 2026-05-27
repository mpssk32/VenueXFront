import { Outlet, Link } from "react-router";
import { Music, Ticket, LayoutDashboard, MessageCircle, User, Heart, Settings, LogIn } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                VenueX
              </span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link
                to="/"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/concerts"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                All Concerts
              </Link>
              
              {/* Dashboards Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboards
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 py-2 rounded-lg bg-[#13131a] border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    to="/artist-dashboard"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    Artist Dashboard
                  </Link>
                  <Link
                    to="/venue-dashboard"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    Venue Dashboard
                  </Link>
                  <Link
                    to="/venue-admin"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    Venue Admin
                  </Link>
                </div>
              </div>
              
              {/* Chat Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 py-2 rounded-lg bg-[#13131a] border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    to="/chat/artist-venue"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    Artist ↔ Venue
                  </Link>
                  <Link
                    to="/chat/support"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    Support
                  </Link>
                </div>
              </div>

              {/* User Menu Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-all">
                  <User className="w-4 h-4" />
                  <span>Account</span>
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 py-2 rounded-lg bg-[#13131a] border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      My Dashboard
                    </div>
                  </Link>
                  <Link
                    to="/tickets"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4" />
                      My Tickets
                    </div>
                  </Link>
                  <Link
                    to="/favorites"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Favorites
                    </div>
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      Settings
                    </div>
                  </Link>
                  <div className="border-t border-purple-500/20 my-2"></div>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <LogIn className="w-4 h-4" />
                      Sign Out
                    </div>
                  </Link>
                </div>
              </div>

              <Link
                to="/concerts"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all"
              >
                <Ticket className="w-4 h-4" />
                Get Tickets
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-[#0a0a0f] mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <p>&copy; 2026 VenueX. All rights reserved.</p>
            <p>Experience live music like never before</p>
          </div>
        </div>
      </footer>
    </div>
  );
}