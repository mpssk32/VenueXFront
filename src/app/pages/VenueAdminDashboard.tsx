import { useState } from "react";
import { Building2, MapPin, Users as UsersIcon, Wrench, Calendar as CalendarIcon, Inbox, Check, X } from "lucide-react";
import { venues } from "../data/venues";
import { applications } from "../data/applications";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function VenueAdminDashboard() {
  // In a real app, this would come from auth context
  const currentVenue = venues[0];
  const [activeTab, setActiveTab] = useState<'profile' | 'calendar' | 'requests'>('profile');
  const [localApplications, setLocalApplications] = useState(applications);

  const venueRequests = localApplications.filter(
    app => app.venueId === currentVenue.id && app.status === 'Ожидает' // 'pending'
  );

  const handleApprove = (appId: string) => {
    setLocalApplications(prev =>
      prev.map(app =>
        app.id === appId ? { ...app, status: 'Одобрен' as const } : app
      )
    );
  };

  const handleReject = (appId: string) => {
    setLocalApplications(prev =>
      prev.map(app =>
        app.id === appId ? { ...app, status: 'Отклонен' as const } : app
      )
    );
  };

  const isDateBooked = (date: string) => {
    return localApplications.some(
      app => app.venueId === currentVenue.id && 
             app.requestedDate === date && 
             app.status === 'Одобрен'
    );
  };

  const getBookingForDate = (date: string) => {
    return localApplications.find(
      app => app.venueId === currentVenue.id && 
             app.requestedDate === date && 
             app.status === 'Одобрен'
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            админ-панель площадки
          </span>
        </h1>
        <p className="text-gray-400">Управление вашей площадкой и бронированиями</p>
      </div>

      {/* Venue Header Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-purple-500/30">
            <ImageWithFallback
              src={currentVenue.image}
              alt={currentVenue.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl text-white mb-1">{currentVenue.name}</h2>
            <p className="text-purple-400 mb-2">{currentVenue.city}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <UsersIcon className="w-4 h-4" />
                <span>{currentVenue.capacity} вместимость</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{currentVenue.location}</span>
              </div>
            </div>
          </div>
          {venueRequests.length > 0 && (
            <div className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
              <div className="text-2xl text-purple-400">{venueRequests.length}</div>
              <div className="text-xs text-gray-400">Ожидающие запросы</div>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-2 border-b border-purple-500/20">
        {[
          { id: 'profile', label: 'Профиль площадки', icon: Building2 },
          { id: 'calendar', label: 'Календарь', icon: CalendarIcon },
          { id: 'requests', label: 'Запросы', icon: Inbox, badge: venueRequests.length },
        ].map(({ id, label, icon: Icon, badge }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-all relative ${
              activeTab === id
                ? 'border-purple-500 text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
            {badge !== undefined && badge > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
                {badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-400" />
                Информация о площадке
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Название площадки</label>
                  <input
                    type="text"
                    value={currentVenue.name}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Местоположение</label>
                  <input
                    type="text"
                    value={currentVenue.location}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Город</label>
                  <input
                    type="text"
                    value={currentVenue.city}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Вместимость</label>
                  <input
                    type="text"
                    value={`${currentVenue.capacity} people`}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Описание</label>
                  <textarea
                    value={currentVenue.description}
                    readOnly
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#13131a] border border-blue-500/20">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-400" />
                Оборудование
              </h3>
              <ul className="space-y-3">
                {currentVenue.equipment.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-purple-400" />
                Доступные даты
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentVenue.availableDates.map((date) => {
                  const booked = isDateBooked(date);
                  const booking = getBookingForDate(date);
                  
                  return (
                    <div
                      key={date}
                      className={`p-4 rounded-lg border transition-all ${
                        booked
                          ? 'bg-green-500/10 border-green-500/30'
                          : 'bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white">
                          {new Date(date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        {booked ? (
                          <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                            Забронировано
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                            Доступно
                          </span>
                        )}
                      </div>
                      {booking && (
                        <div className="mt-2 pt-2 border-t border-green-500/20">
                          <p className="text-sm text-gray-400">{booking.artistName}</p>
                          <p className="text-xs text-gray-600">{booking.genre}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            {venueRequests.length > 0 ? (
              venueRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl text-white mb-1">{request.artistName}</h4>
                      <p className="text-purple-400 text-sm mb-2">{request.genre}</p>
                      <p className="text-sm text-gray-500">
                        Submitted {new Date(request.submittedAt).toLocaleDateString('ru-RU', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30 transition-all flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all flex items-center gap-2"
                      >
                        <X className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Дата заявки:</span>
                      <p className="text-white mt-1">
                        {new Date(request.requestedDate).toLocaleDateString('ru-RU', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Сообщение:</span>
                      <p className="text-gray-300 mt-1 leading-relaxed">{request.message}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                <Inbox className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">Нет ожидающих запросов</h3>
                <p className="text-gray-600">Запросы на бронирование артистов появятся здесь</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
