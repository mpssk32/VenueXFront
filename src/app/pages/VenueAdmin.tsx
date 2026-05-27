import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Calendar as CalendarIcon,
  Inbox,
  MessageCircle,
  TrendingUp,
  Clock,
  CheckCircle,
  Users,
  MapPin,
  Wrench,
  Image as ImageIcon,
  DollarSign,
  FileText,
  Send,
  Check,
  X,
} from "lucide-react";
import { venues } from "../data/venues";
import { applications } from "../data/applications";
import { activities } from "../data/activities";
import { messages, conversations } from "../data/messages";
import { CalendarView } from "../components/CalendarView";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type TabType = 'overview' | 'profile' | 'calendar' | 'requests' | 'messages';

export function VenueAdmin() {
  const currentVenue = venues[0]; // In real app, from auth context
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [localApplications, setLocalApplications] = useState(applications);

  // Calculate stats
  const venueApplications = localApplications.filter(app => app.venueId === currentVenue.id);
  const pendingRequests = venueApplications.filter(app => app.status === 'Ожидает');
  const approvedBookings = venueApplications.filter(app => app.status === 'Одобрен');
  const upcomingEvents = approvedBookings.filter(
    app => new Date(app.requestedDate) > new Date()
  );

  const venueConversations = conversations.filter(
    c => c.type === 'artist-venue' && c.venueId === currentVenue.id
  );

  const totalRevenue = approvedBookings.length * 5000; // Mock calculation

  // Calendar events
  const calendarEvents = venueApplications
    .filter(app => app.status === 'Одобрен' || app.status === 'Ожидает')
    .map(app => ({
      date: app.requestedDate,
      artistName: app.artistName,
      status: app.status as 'booked' | 'pending',
    }));

  const handleApprove = (appId: string) => {
    setLocalApplications(prev =>
      prev.map(app => (app.id === appId ? { ...app, status: 'Одобрен' as const } : app))
    );
  };

  const handleReject = (appId: string) => {
    setLocalApplications(prev =>
      prev.map(app => (app.id === appId ? { ...app, status: 'Отклонен' as const } : app))
    );
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'profile', label: 'Venue Profile', icon: Building2 },
    { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { id: 'requests', label: 'Requests', icon: Inbox, badge: pendingRequests.length },
    { id: 'messages', label: 'Messages', icon: MessageCircle, badge: venueConversations.reduce((acc, c) => acc + c.unreadCount, 0) },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Top Bar */}
      <div className="border-b border-purple-500/20 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-white mb-1">{currentVenue.name}</h1>
              <p className="text-sm text-gray-500">админ панель</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <span className="text-sm text-purple-400">{currentVenue.city}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                EA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8 flex gap-2 border-b border-purple-500/20 overflow-x-auto">
          {tabs.map(({ id, label, icon: Icon, badge }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabType)}
              className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-all whitespace-nowrap relative ${
                activeTab === id
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
              {badge !== undefined && badge > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-xs">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-3xl text-white mb-1">{upcomingEvents.length}</h3>
                <p className="text-sm text-gray-400">Будущие события</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-3xl text-white mb-1">{pendingRequests.length}</h3>
                <p className="text-sm text-gray-400">Ожидает</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-3xl text-white mb-1">{approvedBookings.length}</h3>
                <p className="text-sm text-gray-400">Одобренные бронирования</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-400" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-3xl text-white mb-1">${(totalRevenue / 1000).toFixed(0)}k</h3>
                <p className="text-sm text-gray-400">Общий доход</p>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                <h3 className="text-xl text-white mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  Последняя активность
                </h3>
                <div className="space-y-4">
                  {activities.slice(0, 6).map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 p-4 rounded-lg bg-[#0a0a0f] border border-purple-500/10 hover:border-purple-500/20 transition-all"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          activity.type === 'бронирование'
                            ? 'bg-green-500/20 text-green-400'
                            : activity.type === 'запрос'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : activity.type === 'сообщение'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-purple-500/20 text-purple-400'
                        }`}
                      >
                        {activity.type === 'бронирование' && <CheckCircle className="w-5 h-5" />}
                        {activity.type === 'запрос' && <CalendarIcon className="w-5 h-5" />}
                        {activity.type === 'сообщение' && <MessageCircle className="w-5 h-5" />}
                        {activity.type === 'платеж' && <DollarSign className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-sm mb-1">{activity.title}</h4>
                        <p className="text-gray-400 text-sm">{activity.description}</p>
                      </div>
                      <span className="text-xs text-gray-600 flex-shrink-0">
                        {formatTime(activity.timestamp)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                  <h3 className="text-lg text-white mb-4">Быстрые показатели</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Вместимость</span>
                      <span className="text-white">{currentVenue.capacity.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Среднее посещение</span>
                      <span className="text-white">85%</span>
                    </div>
                    <div className="w-full h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[85%]"></div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#13131a] border border-blue-500/20">
                  <h3 className="text-lg text-white mb-4">Этот месяц</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">События</span>
                      <span className="text-white">4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Доход</span>
                      <span className="text-white">$20k</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Новые запросы</span>
                      <span className="text-white">{pendingRequests.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Venue Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                <h3 className="text-xl text-white mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-purple-400" />
                  Информация о площадке
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Название площадки</label>
                    <input
                      type="text"
                      value={currentVenue.name}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Местоположение</label>
                    <input
                      type="text"
                      value={currentVenue.location}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Город</label>
                      <input
                        type="text"
                        value={currentVenue.city}
                        readOnly
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 mb-2 block">Вместимость</label>
                      <input
                        type="text"
                        value={currentVenue.capacity.toLocaleString()}
                        readOnly
                        className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 mb-2 block">Описание</label>
                    <textarea
                      value={currentVenue.description}
                      readOnly
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Equipment */}
              <div className="p-6 rounded-xl bg-[#13131a] border border-blue-500/20">
                <h3 className="text-xl text-white mb-6 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-400" />
                  Оборудование и удобства
                </h3>
                <div className="space-y-2">
                  {currentVenue.equipment.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0f] border border-blue-500/10"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
              <h3 className="text-xl text-white mb-6 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-purple-400" />
                Галерея фотографий
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="aspect-video rounded-lg overflow-hidden border border-purple-500/20">
                  <ImageWithFallback
                    src={currentVenue.image}
                    alt={currentVenue.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {venues.slice(1, 4).map((venue) => (
                  <div
                    key={venue.id}
                    className="aspect-video rounded-lg overflow-hidden border border-purple-500/20"
                  >
                    <ImageWithFallback
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
                <div className="aspect-video rounded-lg border-2 border-dashed border-purple-500/30 flex items-center justify-center hover:border-purple-500/50 transition-all cursor-pointer">
                  <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Добавить фото</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
            <CalendarView events={calendarEvents} availableDates={currentVenue.availableDates} />
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            {pendingRequests.length > 0 ? (
              pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-xl text-white mb-1">{request.artistName}</h4>
                        <p className="text-purple-400 text-sm mb-2">{request.genre}</p>
                        <p className="text-sm text-gray-500">
                          Submitted {new Date(request.submittedAt).toLocaleDateString('ru-RU', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="px-5 py-2.5 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30 transition-all flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Принять
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="px-5 py-2.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all flex items-center gap-2"
                      >
                        <X className="w-4 h-4" />
                        Отклонить
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-[#0a0a0f] border border-purple-500/10">
                      <span className="text-sm text-gray-500 block mb-1">Дата запроса</span>
                      <p className="text-white">
                        {new Date(request.requestedDate).toLocaleDateString('ru-RU', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#0a0a0f] border border-purple-500/10">
                      <span className="text-sm text-gray-500 block mb-1">Жанр</span>
                      <p className="text-white">{request.genre}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#0a0a0f] border border-purple-500/10">
                    <span className="text-sm text-gray-500 block mb-2">Сообщение</span>
                    <p className="text-gray-300 leading-relaxed">{request.message}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                <Inbox className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">Нет ожидающих запросов</h3>
                <p className="text-gray-600">Новые запросы на бронирование артистов появятся здесь</p>
              </div>
            )}
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversations List */}
            <div className="rounded-xl bg-[#13131a] border border-purple-500/20 overflow-hidden">
              <div className="p-4 border-b border-purple-500/20">
                <h3 className="text-lg text-white">Чаты</h3>
              </div>
              <div className="divide-y divide-purple-500/10">
                {venueConversations.map((conv) => (
                  <div
                    key={conv.id}
                    className="p-4 hover:bg-purple-500/5 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-white truncate">{conv.artistName}</h4>
                          {conv.unreadCount > 0 && (
                            <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-xs flex-shrink-0">
                              {conv.unreadCount}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                        <p className="text-xs text-gray-700 mt-1">
                          {formatTime(conv.lastMessageTime)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Preview */}
            <div className="lg:col-span-2 rounded-xl bg-[#13131a] border border-purple-500/20 flex items-center justify-center p-12">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">Выберите чат</h3>
                <p className="text-gray-600">Выберите разговор из списка, чтобы просмотреть сообщения</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
