import { Link } from "react-router";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Ticket,
  Heart,
  Settings,
  TrendingUp,
  Music2,
  Star,
} from "lucide-react";

export function UserDashboard() {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "Los Angeles, CA",
    memberSince: "January 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  };

  const stats = [
    { label: "Tickets Purchased", value: "24", icon: Ticket, color: "purple" },
    { label: "Concerts Attended", value: "18", icon: Music2, color: "blue" },
    { label: "Favorite Artists", value: "12", icon: Heart, color: "pink" },
    { label: "Total Spent", value: "$2,450", icon: TrendingUp, color: "purple" },
  ];

  const upcomingConcerts = [
    {
      id: 1,
      artist: "The Midnight",
      venue: "The Wiltern",
      date: "Jun 15, 2026",
      time: "8:00 PM",
      ticketCount: 2,
    },
    {
      id: 2,
      artist: "ODESZA",
      venue: "Hollywood Bowl",
      date: "Jul 22, 2026",
      time: "7:30 PM",
      ticketCount: 4,
    },
    {
      id: 3,
      artist: "Porter Robinson",
      venue: "Shrine Auditorium",
      date: "Aug 5, 2026",
      time: "9:00 PM",
      ticketCount: 2,
    },
  ];

  const recentActivity = [
    { action: "Purchased tickets", event: "The Midnight at The Wiltern", date: "2 days ago" },
    { action: "Added to favorites", event: "Lane 8", date: "1 week ago" },
    { action: "Left a review", event: "Rufus Du Sol at Red Rocks", date: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-[#0a0a0f] pt-8 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl text-white mb-1">мой панель</h1>
          <p className="text-gray-400">Добро пожаловать, {user.name.split(" ")[0]}!</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Quick Actions */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-6 shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl opacity-50 blur" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-0.5"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-[#13131a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-white mb-1">{user.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span>Премиум-пользователь</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Member since {user.memberSince}</span>
                  </div>
                </div>

                <Link
                  to="/settings"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all"
                >
                  <Settings className="w-4 h-4" />
                  <span>Редактировать профиль</span>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-6">
              <h3 className="text-lg text-white mb-4">Быстрые действия</h3>
              <div className="space-y-3">
                <Link
                  to="/tickets"
                  className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/30 transition-all group"
                >
                  <Ticket className="w-5 h-5 text-purple-400" />
                  <span className="text-white group-hover:text-purple-300 transition-colors">
                    мои билеты
                  </span>
                </Link>
                <Link
                  to="/favorites"
                  className="flex items-center gap-3 p-3 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 hover:border-pink-500/30 transition-all group"
                >
                  <Heart className="w-5 h-5 text-pink-400" />
                  <span className="text-white group-hover:text-pink-300 transition-colors">
                    Избранные артисты
                  </span>
                </Link>
                <Link
                  to="/concerts"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/30 transition-all group"
                >
                  <Music2 className="w-5 h-5 text-blue-400" />
                  <span className="text-white group-hover:text-blue-300 transition-colors">
                    Просмотр концертов
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-5 text-center group hover:scale-105 transition-transform"
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-500/10 rounded-2xl opacity-50 blur group-hover:opacity-75 transition-opacity`}
                  />
                  <div className="relative">
                    <stat.icon
                      className={`w-8 h-8 mx-auto mb-2 text-${stat.color}-400`}
                    />
                    <div className="text-2xl text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Concerts */}
            <div className="rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-white">Будущие концерты</h3>
                <Link
                  to="/tickets"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Просмотреть все
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingConcerts.map((concert) => (
                  <div
                    key={concert.id}
                    className="p-4 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/10 hover:border-purple-500/30 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-white mb-1 group-hover:text-purple-300 transition-colors">
                          {concert.artist}
                        </h4>
                        <p className="text-sm text-gray-400 mb-2">{concert.venue}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{concert.date}</span>
                          <span>•</span>
                          <span>{concert.time}</span>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-sm text-purple-300">
                        {concert.ticketCount} {concert.ticketCount === 1 ? "билет" : "билетов"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-6">
              <h3 className="text-xl text-white mb-6">Последняя активность</h3>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <div className="flex-1">
                      <p className="text-white mb-1">
                        <span className="text-purple-400">{activity.action}</span> - {activity.event}
                      </p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
