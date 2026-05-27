import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  Music2,
  Calendar,
  DollarSign,
  HeadphonesIcon,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { users } from "../data/users";
import { venues } from "../data/venues";
import { artists } from "../data/artists";
import { concerts } from "../data/concerts";
import { payments } from "../data/payments";
import { supportTickets } from "../data/support-tickets";

type TabType = 'overview' | 'users' | 'venues' | 'artists' | 'events' | 'payments' | 'tickets';

export function PlatformAdmin() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate stats
  const totalUsers = users.filter(u => u.role === 'user').length;
  const totalArtists = users.filter(u => u.role === 'artist').length;
  const totalVenues = users.filter(u => u.role === 'venue').length;
  const totalRevenue = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);
  const pendingPayments = payments.filter(p => p.status === 'pending').length;
  const openTickets = supportTickets.filter(t => t.status === 'open' || t.status === 'in-progress').length;
  const upcomingEvents = concerts.filter(c => new Date(c.date) > new Date()).length;

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('ru-RU', { month: 'short', day: 'numeric' });
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-500/20 text-green-400 border-green-500/30',
      inactive: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      suspended: 'bg-red-500/20 text-red-400 border-red-500/30',
      completed: 'bg-green-500/20 text-green-400 border-green-500/30',
      pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      failed: 'bg-red-500/20 text-red-400 border-red-500/30',
      refunded: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      open: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'in-progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      resolved: 'bg-green-500/20 text-green-400 border-green-500/30',
      closed: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    };
    return styles[status as keyof typeof styles] || styles.inactive;
  };

  const getPriorityBadge = (priority: string) => {
    const styles = {
      low: 'bg-gray-500/20 text-gray-400',
      medium: 'bg-yellow-500/20 text-yellow-400',
      high: 'bg-orange-500/20 text-orange-400',
      urgent: 'bg-red-500/20 text-red-400',
    };
    return styles[priority as keyof typeof styles] || styles.low;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#13131a] border-r border-purple-500/20 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Админ-панель
            </span>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-purple-500/10 hover:text-gray-300'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Обзор</span>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'users'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-purple-500/10 hover:text-gray-300'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Пользователи</span>
              <span className="ml-auto px-2 py-0.5 rounded-full bg-purple-500/20 text-xs">
                {totalUsers}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('venues')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'venues'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-purple-500/10 hover:text-gray-300'
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span>Места</span>
              <span className="ml-auto px-2 py-0.5 rounded-full bg-blue-500/20 text-xs">
                {totalVenues}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('artists')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'artists'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-purple-500/10 hover:text-gray-300'
              }`}
            >
              <Music2 className="w-5 h-5" />
              <span>Артисты</span>
              <span className="ml-auto px-2 py-0.5 rounded-full bg-purple-500/20 text-xs">
                {totalArtists}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'events'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-purple-500/10 hover:text-gray-300'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>События</span>
              <span className="ml-auto px-2 py-0.5 rounded-full bg-green-500/20 text-xs">
                {upcomingEvents}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('payments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'payments'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-purple-500/10 hover:text-gray-300'
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span>Платежи</span>
              {pendingPayments > 0 && (
                <span className="ml-auto px-2 py-0.5 rounded-full bg-yellow-500/20 text-xs">
                  {pendingPayments}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('tickets')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === 'tickets'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-purple-500/10 hover:text-gray-300'
              }`}
            >
              <HeadphonesIcon className="w-5 h-5" />
              <span>Поддержка</span>
              {openTickets > 0 && (
                <span className="ml-auto px-2 py-0.5 rounded-full bg-red-500/20 text-xs">
                  {openTickets}
                </span>
              )}
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 w-64 p-6 border-t border-purple-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
              PA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm truncate">Админ</p>
              <p className="text-gray-500 text-xs">admin@VenueX.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl text-white mb-2">Обзор панели управления</h1>
                <p className="text-gray-400">Мониторинг производительности и активности платформы</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-3xl text-white mb-1">{users.length}</h3>
                  <p className="text-sm text-gray-400">Всего пользователей</p>
                  <p className="text-xs text-green-400 mt-2">+12% этот месяц</p>
                </div>

                <div className="p-6 rounded-xl bg-[#13131a] border border-blue-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-blue-400" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-3xl text-white mb-1">${(totalRevenue / 1000).toFixed(1)}k</h3>
                  <p className="text-sm text-gray-400">Общий доход</p>
                  <p className="text-xs text-green-400 mt-2">+8% этот месяц</p>
                </div>

                <div className="p-6 rounded-xl bg-[#13131a] border border-green-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-green-400" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-3xl text-white mb-1">{concerts.length}</h3>
                  <p className="text-sm text-gray-400">Всего событий</p>
                  <p className="text-xs text-green-400 mt-2">{upcomingEvents} предстоящих</p>
                </div>

                <div className="p-6 rounded-xl bg-[#13131a] border border-yellow-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                      <HeadphonesIcon className="w-6 h-6 text-yellow-400" />
                    </div>
                    {openTickets > 0 ? (
                      <TrendingUp className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                  <h3 className="text-3xl text-white mb-1">{openTickets}</h3>
                  <p className="text-sm text-gray-400">Открытые заявки</p>
                  <p className="text-xs text-gray-500 mt-2">{supportTickets.length} всего</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                  <h3 className="text-xl text-white mb-6">Недавние платежи</h3>
                  <div className="space-y-4">
                    {payments.slice(0, 5).map((payment) => (
                      <div
                        key={payment.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-[#0a0a0f] border border-purple-500/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-green-400" />
                          </div>
                          <div>
                            <p className="text-white text-sm">{payment.userName}</p>
                            <p className="text-gray-500 text-xs">{payment.eventName || payment.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white">${payment.amount}</p>
                          <span className={`text-xs px-2 py-1 rounded ${getStatusBadge(payment.status)}`}>
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#13131a] border border-yellow-500/20">
                  <h3 className="text-xl text-white mb-6">Недавние заявки на поддержку</h3>
                  <div className="space-y-4">
                    {supportTickets.slice(0, 5).map((ticket) => (
                      <div
                        key={ticket.id}
                        className="flex items-start justify-between p-4 rounded-lg bg-[#0a0a0f] border border-yellow-500/10"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                            <HeadphonesIcon className="w-5 h-5 text-yellow-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm truncate">{ticket.subject}</p>
                            <p className="text-gray-500 text-xs">{ticket.userName}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${getPriorityBadge(ticket.priority)} flex-shrink-0 ml-2`}>
                          {ticket.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platform Stats */}
              <div className="p-6 rounded-xl bg-[#13131a] border border-blue-500/20">
                <h3 className="text-xl text-white mb-6">Статистика платформы</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Артисты</p>
                    <p className="text-2xl text-white">{totalArtists}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Места проведения</p>
                    <p className="text-2xl text-white">{totalVenues}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Активные пользователи</p>
                    <p className="text-2xl text-white">{users.filter(u => u.status === 'active').length}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Средняя цена билета</p>
                    <p className="text-2xl text-white">
                      $
                      {(
                        payments.filter(p => p.type === 'ticket' && p.status === 'completed').reduce((sum, p) => sum + p.amount, 0) /
                        payments.filter(p => p.type === 'ticket' && p.status === 'completed').length
                      ).toFixed(0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl text-white mb-2">Управление пользователями</h1>
                  <p className="text-gray-400">Управление всеми пользователями платформы</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                  Добавить пользователя
                </button>
              </div>

              {/* Search and Filter */}
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#13131a] border border-purple-500/20 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50"
                  />
                </div>
                <button className="px-4 py-3 rounded-lg bg-[#13131a] border border-purple-500/20 text-gray-400 hover:text-white hover:border-purple-500/40 transition-all flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </button>
              </div>

              {/* Users Table */}
              <div className="rounded-xl bg-[#13131a] border border-purple-500/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#0a0a0f] border-b border-purple-500/20">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Пользователь</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Email</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Роль</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Статус</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Присоединился</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Последняя активность</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Действия</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-500/10">
                      {users
                        .filter(
                          (user) =>
                            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((user) => (
                          <tr key={user.id} className="hover:bg-purple-500/5 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                                  {user.name.charAt(0)}
                                </div>
                                <span className="text-white">{user.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-gray-400">{user.email}</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs capitalize">
                                {user.role}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs border capitalize ${getStatusBadge(user.status)}`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-gray-400 text-sm">
                              {new Date(user.joinedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </td>
                            <td className="px-6 py-4 text-gray-400 text-sm">{formatTime(user.lastActive)}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <button className="p-2 rounded-lg hover:bg-purple-500/10 text-gray-400 hover:text-purple-400 transition-all">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 transition-all">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-all">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Venues Tab */}
          {activeTab === 'venues' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl text-white mb-2">Управление местами проведения</h1>
                  <p className="text-gray-400">Управление всеми местами проведения на платформе</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                  Добавить место проведения
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {venues.map((venue) => (
                  <div
                    key={venue.id}
                    className="p-6 rounded-xl bg-[#13131a] border border-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                          <Building2 className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl text-white mb-1">{venue.name}</h3>
                          <p className="text-gray-400 text-sm">{venue.location}</p>
                          <p className="text-blue-400 text-sm mt-1">{venue.city}</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 transition-all">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-[#0a0a0f] border border-blue-500/10">
                        <p className="text-gray-500 text-xs mb-1">Capacity</p>
                        <p className="text-white">{venue.capacity.toLocaleString()}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#0a0a0f] border border-blue-500/10">
                        <p className="text-gray-500 text-xs mb-1">Equipment</p>
                        <p className="text-white">{venue.equipment.length} items</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex-1 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-sm">
                        Просмотреть детали
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all text-sm">
                        Редактировать
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Artists Tab */}
          {activeTab === 'artists' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl text-white mb-2">Управление артистами</h1>
                  <p className="text-gray-400">Управление всеми артистами на платформе</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                  Добавить артиста
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artists.map((artist) => (
                  <div
                    key={artist.id}
                    className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20 hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                        <Music2 className="w-8 h-8 text-purple-400" />
                      </div>
                      <button className="p-2 rounded-lg hover:bg-purple-500/10 text-gray-400 hover:text-purple-400 transition-all">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>

                    <h3 className="text-xl text-white mb-2">{artist.name}</h3>
                    <p className="text-purple-400 text-sm mb-3">{artist.genre}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{artist.description}</p>

                    <div className="p-3 rounded-lg bg-[#0a0a0f] border border-purple-500/10 mb-4">
                      <p className="text-gray-500 text-xs mb-1">Band Members</p>
                      <p className="text-white text-sm">{artist.members.length} members</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex-1 px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all text-sm">
                        Просмотреть профиль
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-sm">
                        Редактировать
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl text-white mb-2">Управление событиями</h1>
                  <p className="text-gray-400">Все концерты и события на платформе</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                  Создать событие
                </button>
              </div>

              <div className="space-y-4">
                {concerts.map((concert) => (
                  <div
                    key={concert.id}
                    className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
                          <Calendar className="w-10 h-10 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl text-white mb-2">{concert.artist}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                            <div>
                              <p className="text-gray-500 text-xs mb-1">Venue</p>
                              <p className="text-gray-300 text-sm">{concert.venue}</p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs mb-1">Date</p>
                              <p className="text-gray-300 text-sm">
                                {new Date(concert.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs mb-1">City</p>
                              <p className="text-gray-300 text-sm">{concert.city}</p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs mb-1">Price</p>
                              <p className="text-gray-300 text-sm">${concert.price}</p>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                            {concert.genre}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all text-sm">
                          Просмотреть
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all text-sm">
                          Редактировать
                        </button>
                        <button className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === 'payments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl text-white mb-2">Платежи и доходы</h1>
                  <p className="text-gray-400">Отслеживание всех транзакций и платежей</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="text-xs text-gray-500 mb-1">Общий доход</p>
                    <p className="text-xl text-green-400">${(totalRevenue / 1000).toFixed(1)}k</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-[#13131a] border border-purple-500/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#0a0a0f] border-b border-purple-500/20">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">ID транзакции</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Пользователь</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Тип</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Событие</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Сумма</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Метод</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Статус</th>
                        <th className="px-6 py-4 text-left text-sm text-gray-400">Дата</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-500/10">
                      {payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-purple-500/5 transition-colors">
                          <td className="px-6 py-4 text-gray-400 text-sm font-mono">{payment.id}</td>
                          <td className="px-6 py-4 text-white">{payment.userName}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs capitalize">
                              {payment.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-400 text-sm">{payment.eventName || '-'}</td>
                          <td className="px-6 py-4 text-white font-semibold">${payment.amount}</td>
                          <td className="px-6 py-4 text-gray-400 text-sm capitalize">{payment.method}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs border capitalize ${getStatusBadge(payment.status)}`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-400 text-sm">{formatTime(payment.date)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Support Tickets Tab */}
          {activeTab === 'tickets' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl text-white mb-2">Тикеты поддержки</h1>
                  <p className="text-gray-400">Управление запросами поддержки клиентов</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {openTickets} Открыто
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20 hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            ticket.priority === 'urgent'
                              ? 'bg-red-500/20 border border-red-500/30'
                              : ticket.priority === 'high'
                              ? 'bg-orange-500/20 border border-orange-500/30'
                              : 'bg-yellow-500/20 border border-yellow-500/30'
                          }`}
                        >
                          {ticket.status === 'resolved' ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : ticket.status === 'closed' ? (
                            <XCircle className="w-6 h-6 text-gray-400" />
                          ) : ticket.priority === 'urgent' ? (
                            <AlertCircle className="w-6 h-6 text-red-400" />
                          ) : (
                            <Clock className="w-6 h-6 text-yellow-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <h3 className="text-lg text-white flex-1">{ticket.subject}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs ${getPriorityBadge(ticket.priority)}`}>
                              {ticket.priority}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs border ${getStatusBadge(ticket.status)}`}>
                              {ticket.status}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{ticket.description}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-500">
                              From: <span className="text-gray-300">{ticket.userName}</span>
                            </span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-500">{ticket.userEmail}</span>
                            <span className="text-gray-500">•</span>
                            <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400 text-xs capitalize">
                              {ticket.category}
                            </span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-500">{formatTime(ticket.createdAt)}</span>
                          </div>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all text-sm flex items-center gap-2">
                        Смотреть детали
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
