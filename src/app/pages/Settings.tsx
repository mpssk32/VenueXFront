import { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  CreditCard,
  Lock,
  Mail,
  Phone,
  MapPin,
  Save,
  Key,
  Smartphone,
  AlertCircle,
} from "lucide-react";

import kot from "@/assets/images/users/kot.jpg";


export function Settings() {
  const [activeTab, setActiveTab] = useState<"profile" | "notifications" | "security" | "billing">(
    "profile"
  );

  const [profileData, setProfileData] = useState({
    name: "Алексей",
    email: "alex@example.com",
    phone: "+7 (900) 444 00-00",
    location: "Саратов, Россия",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    favoriteArtists: true,
    upcomingEvents: true,
    newsletters: false,
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlerts: true,
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
  ] as const;

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-[#0a0a0f] pt-8 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl text-white">Настройки</h1>
          </div>
          <p className="text-gray-400">Управление настройками вашего аккаунта и безопасности</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-[#0a0a0f]/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-8">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl text-white mb-2">Информация о профиле</h2>
                    <p className="text-gray-400">Обновить информацию о вашем аккаунте</p>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex items-center gap-6">
                    <img
                      src={kot}
                      alt="Profile"
                      className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-0.5"
                    />
                    <div>
                      <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all mb-2">
                        Изменить фото
                      </button>
                      <p className="text-xs text-gray-500">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm text-gray-300">Имя</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          value={profileData.name}
                          onChange={(e) =>
                            setProfileData({ ...profileData, name: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm text-gray-300">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) =>
                            setProfileData({ ...profileData, email: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm text-gray-300">Телефон</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) =>
                            setProfileData({ ...profileData, phone: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm text-gray-300">Местоположение</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          value={profileData.location}
                          onChange={(e) =>
                            setProfileData({ ...profileData, location: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                    <Save className="w-4 h-4" />
                    <span>Сохранить изменения</span>
                  </button>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="space-y-8">
                  <div>й
                    <h2 className="text-2xl text-white mb-2">Настройки уведомлений</h2>
                    <p className="text-gray-400">Выберите, как вы хотите получать обновления</p>
                  </div>

                  {/* Notification Channels */}
                  <div className="space-y-4">
                    <h3 className="text-lg text-white">Каналы уведомлений</h3>
                    <div className="space-y-3">
                      {[
                        { key: "email", label: "Email Уведомления", icon: Mail },
                        { key: "push", label: "Push Уведомления", icon: Bell },
                        { key: "sms", label: "SMS Уведомления", icon: Phone },
                      ].map((channel) => (
                        <label
                          key={channel.key}
                          className="flex items-center justify-between p-4 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/10 hover:border-purple-500/30 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <channel.icon className="w-5 h-5 text-gray-400" />
                            <span className="text-white">{channel.label}</span>
                          </div>
                          <input
                            type="checkbox"
                            checked={notifications[channel.key as keyof typeof notifications] as boolean}
                            onChange={(e) =>
                              setNotifications({
                                ...notifications,
                                [channel.key]: e.target.checked,
                              })
                            }
                            className="w-5 h-5 rounded border-purple-500/30 bg-[#0a0a0f]/50 text-purple-500 focus:ring-purple-500/20"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notification Types */}
                  <div className="space-y-4">
                    <h3 className="text-lg text-white">Что получать</h3>
                    <div className="space-y-3">
                      {[
                        { key: "favoriteArtists", label: "Обновления любимых исполнителей" },
                        { key: "upcomingEvents", label: "Напоминания о предстоящих событиях" },
                        { key: "newsletters", label: "Новостные рассылки и акции" },
                      ].map((type) => (
                        <label
                          key={type.key}
                          className="flex items-center justify-between p-4 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/10 hover:border-purple-500/30 transition-all cursor-pointer"
                        >
                          <span className="text-white">{type.label}</span>
                          <input
                            type="checkbox"
                            checked={notifications[type.key as keyof typeof notifications] as boolean}
                            onChange={(e) =>
                              setNotifications({
                                ...notifications,
                                [type.key]: e.target.checked,
                              })
                            }
                            className="w-5 h-5 rounded border-purple-500/30 bg-[#0a0a0f]/50 text-purple-500 focus:ring-purple-500/20"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all">
                    <Save className="w-4 h-4" />
                    <span>Сохранить настройки</span>
                  </button>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl text-white mb-2">Настройки безопасности</h2>
                    <p className="text-gray-400">Управление безопасностью вашего аккаунта</p>
                  </div>

                  {/* Change Password */}
                  <div className="p-6 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-purple-400" />
                        <div>
                          <h3 className="text-white mb-1">Изменить пароль</h3>
                          <p className="text-sm text-gray-400">Последнее изменение 3 месяца назад</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all">
                        изменить
                      </button>
                    </div>
                  </div>

                  

                  {/* Login Alerts */}
                  <div className="p-6 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/20">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <AlertCircle className="w-5 h-5 text-purple-400" />
                        <div>
                          <h3 className="text-white mb-1">Оповещения о входе</h3>
                          <p className="text-sm text-gray-400">
                            Получать уведомления о подозрительных попытках входа
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={security.loginAlerts}
                          onChange={(e) =>
                            setSecurity({ ...security, loginAlerts: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-[#0a0a0f] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === "billing" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl text-white mb-2">Счета и оплаты</h2>
                    <p className="text-gray-400">Управление способами оплаты и историей счетов</p>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg text-white">Способы оплаты</h3>
                      <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all text-sm">
                        Добавить карту
                      </button>
                    </div>

                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-6 h-6 text-purple-400" />
                          <div>
                            <div className="text-white mb-1">•••• •••• •••• 4242</div>
                            <div className="text-sm text-gray-400">Expires 12/2027</div>
                          </div>
                        </div>
                        <div className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-xs text-purple-300">
                          Default
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-sm text-purple-400 hover:text-purple-300">Edit</button>
                        <span className="text-gray-600">•</span>
                        <button className="text-sm text-pink-400 hover:text-pink-300">Remove</button>
                      </div>
                    </div>
                  </div>

                  {/* Billing History */}
                  <div className="space-y-4">
                    <h3 className="text-lg text-white">Последние транзакции</h3>
                    <div className="space-y-3">
                      {[
                        { date: "22 мая 2026", description: "The Midnight - VIP билеты", amount: "$120.00" },
                        { date: "10 мая 2026", description: "Rufus Du Sol - Общий вход", amount: "$89.00" },
                        { date: "15 апреля 2026", description: "Lane 8 - Зарезервированные места", amount: "$75.00" },
                      ].map((transaction, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/10 flex items-center justify-between"
                        >
                          <div>
                            <div className="text-white mb-1">{transaction.description}</div>
                            <div className="text-sm text-gray-400">{transaction.date}</div>
                          </div>
                          <div className="text-white">{transaction.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
