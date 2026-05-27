import { useState } from "react";
import { useNavigate } from "react-router";
import { User, Music2, Users, FileText, Calendar, Send, Search, CheckCircle, XCircle, Clock } from "lucide-react";
import { artists } from "../data/artists";
import { applications } from "../data/applications";
import { concerts } from "../data/concerts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ArtistDashboard() {
  const navigate = useNavigate();
  // In a real app, this would come from auth context
  const currentArtist = artists[0];
  const [activeTab, setActiveTab] = useState<'profile' | 'rider' | 'concerts' | 'applications'>('profile');

  const artistApplications = applications.filter(app => app.artistId === currentArtist.id);
  const upcomingConcerts = concerts.filter(c => c.artist === currentArtist.name);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'border-green-500/20 bg-green-500/10 text-green-400';
      case 'rejected':
        return 'border-red-500/20 bg-red-500/10 text-red-400';
      default:
        return 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Личный кабинет артиста
          </span>
        </h1>
        <p className="text-gray-400">Управляйте своим профилем, аккаунтом и райдером</p>
      </div>

      {/* Artist Header Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-purple-500/30">
            <ImageWithFallback
              src={currentArtist.image}
              alt={currentArtist.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl text-white mb-1">{currentArtist.name}</h2>
            <p className="text-purple-400 mb-2">{currentArtist.genre}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Users className="w-4 h-4" />
              <span>{currentArtist.members.length} Участники</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/venues')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Найти площадку
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-2 border-b border-purple-500/20">
        {[
          { id: 'profile', label: 'Профиль', icon: User },
          { id: 'rider', label: 'Райдер', icon: FileText },
          { id: 'concerts', label: 'Предстоящие концерты', icon: Calendar },
          { id: 'applications', label: 'Заявки', icon: Send },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as any)}
            className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-all ${
              activeTab === id
                ? 'border-purple-500 text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
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
                <User className="w-5 h-5 text-purple-400" />
                Основная информация
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Имя артиста</label>
                  <input
                    type="text"
                    value={currentArtist.name}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Жанр </label>
                  <input
                    type="text"
                    value={currentArtist.genre}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Описание</label>
                  <textarea
                    value={currentArtist.description}
                    readOnly
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-[#0a0a0f] border border-purple-500/20 text-white resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Участники группы
              </h3>
              <div className="space-y-3">
                {currentArtist.members.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0a0f] border border-purple-500/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white">
                      {member.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-white">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Rider Tab */}
        {activeTab === 'rider' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <Music2 className="w-5 h-5 text-purple-400" />
                Технические требования
              </h3>
              <ul className="space-y-3">
                {currentArtist.rider.technical.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#13131a] border border-blue-500/20">
              <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Райдер
              </h3>
              <ul className="space-y-3">
                {currentArtist.rider.hospitality.map((item, index) => (
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

        {/* Upcoming Concerts Tab */}
        {activeTab === 'concerts' && (
          <div className="space-y-4">
            {upcomingConcerts.length > 0 ? (
              upcomingConcerts.map((concert) => (
                <div
                  key={concert.id}
                  className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={concert.image}
                        alt={concert.venue}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl text-white mb-2">{concert.venue}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Дата:</span>
                          <p className="text-white mt-1">
                            {new Date(concert.date).toLocaleDateString('ru-RU', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                        <div>
                          <span className="text-gray-500">Время:</span>
                          <p className="text-white mt-1">{concert.time}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Место:</span>
                          <p className="text-white mt-1">{concert.city}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Цена билета:</span>
                          <p className="text-white mt-1">${concert.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">Нет предстоящих концертов</h3>
                <p className="text-gray-600 mb-4">Начните подавать заявки на участие в мероприятиях</p>
                <button
                  onClick={() => navigate('/venues')}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all"
                >
                  Найти место
                </button>
              </div>
            )}
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div className="space-y-4">
            {artistApplications.length > 0 ? (
              artistApplications.map((app) => (
                <div
                  key={app.id}
                  className="p-6 rounded-xl bg-[#13131a] border border-purple-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl text-white mb-1">{app.venueName}</h4>
                      <p className="text-sm text-gray-500">
                        Отправлено {new Date(app.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-sm ${getStatusColor(app.status)}`}>
                      {getStatusIcon(app.status)}
                      <span className="capitalize">{app.status}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Дата заявки:</span>
                      <p className="text-white mt-1">
                        {new Date(app.requestedDate).toLocaleDateString('ru-RU', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Сообщение:</span>
                      <p className="text-gray-300 mt-1">{app.message}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 p-6 rounded-xl bg-[#13131a] border border-purple-500/20">
                <Send className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">Заявок не отправлено</h3>
                <p className="text-gray-600">Подайте заявку на участие</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
