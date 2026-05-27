import { useState } from "react";
import { useNavigate } from "react-router";
import {
  CreditCard,
  Lock,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Ticket,
  AlertCircle,
  Check,
  Music2,
} from "lucide-react";

export function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"details" | "payment" | "confirmation">("details");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    billingZip: "",
  });

  const concert = {
    artist: "The Midnight",
    venue: "The Wiltern",
    location: "Los Angeles, CA",
    date: "Jun 15, 2026",
    time: "8:00 PM",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=TheMidnight",
  };

  const orderSummary = {
    ticketType: "VIP",
    quantity: 2,
    pricePerTicket: 60.0,
    serviceFee: 8.5,
    processingFee: 3.5,
  };

  const total =
    orderSummary.quantity * orderSummary.pricePerTicket +
    orderSummary.serviceFee +
    orderSummary.processingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "details") {
      setStep("payment");
    } else if (step === "payment") {
      setStep("confirmation");
      setTimeout(() => {
        navigate("/tickets");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-[#0a0a0f] pt-8 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl text-white mb-1">
            {step === "confirmation" ? "Order Confirmed!" : "Complete Your Purchase"}
          </h1>
          <p className="text-gray-400">
            {step === "confirmation"
              ? "Your tickets have been sent to your email"
              : "Just a few more steps to secure your tickets"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            {step !== "confirmation" && (
              <div className="rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-8">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step === "details" || step === "payment"
                          ? "bg-gradient-to-r from-purple-500 to-blue-500"
                          : "bg-purple-500/20 border border-purple-500/30"
                      }`}
                    >
                      <span className="text-white text-sm">1</span>
                    </div>
                    <span className="text-sm text-white">Details</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-purple-500/20 mx-4" />
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step === "payment"
                          ? "bg-gradient-to-r from-purple-500 to-blue-500"
                          : "bg-purple-500/20 border border-purple-500/30"
                      }`}
                    >
                      <span className="text-white text-sm">2</span>
                    </div>
                    <span className="text-sm text-white">Оплата</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Details Step */}
                  {step === "details" && (
                    <>
                      <div>
                        <h2 className="text-xl text-white mb-4">Контактная информация</h2>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="block text-sm text-gray-300">Имя</label>
                              <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                  type="text"
                                  value={formData.firstName}
                                  onChange={(e) =>
                                    setFormData({ ...formData, firstName: e.target.value })
                                  }
                                  placeholder="Имя"
                                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                  required
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="block text-sm text-gray-300">Фамилия</label>
                              <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) =>
                                  setFormData({ ...formData, lastName: e.target.value })
                                }
                                placeholder="Фамилия"
                                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="block text-sm text-gray-300">Email</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="you@example.com"
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="block text-sm text-gray-300">Телефон</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({ ...formData, phone: e.target.value })
                                }
                                placeholder="+7(900)000 00-00"
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div className="text-sm text-gray-300">
                          Ваши билеты будут отправлены на этот email. Пожалуйста, проверьте точность.
                        </div>
                      </div>
                    </>
                  )}

                  {/* Payment Step */}
                  {step === "payment" && (
                    <>
                      <div>
                        <h2 className="text-xl text-white mb-4">Информация об оплате</h2>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="block text-sm text-gray-300">Номер карты</label>
                            <div className="relative">
                              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="text"
                                value={formData.cardNumber}
                                onChange={(e) =>
                                  setFormData({ ...formData, cardNumber: e.target.value })
                                }
                                placeholder="1234 5678 9012 3456"
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="block text-sm text-gray-300">Срок действия</label>
                              <input
                                type="text"
                                value={formData.cardExpiry}
                                onChange={(e) =>
                                  setFormData({ ...formData, cardExpiry: e.target.value })
                                }
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="block text-sm text-gray-300">CVC</label>
                              <input
                                type="text"
                                value={formData.cardCvc}
                                onChange={(e) =>
                                  setFormData({ ...formData, cardCvc: e.target.value })
                                }
                                placeholder="123"
                                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="block text-sm text-gray-300">Почтовый индекс</label>
                            <input
                              type="text"
                              value={formData.billingZip}
                              onChange={(e) =>
                                setFormData({ ...formData, billingZip: e.target.value })
                              }
                              placeholder="90210"
                              className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-start gap-3">
                        <Lock className="w-5 h-5 text-purple-400 mt-0.5" />
                        <div className="text-sm text-gray-300">
                          Ваши платежные данные защищены и не сохраняются на наших серверах.
                        </div>
                      </div>
                    </>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {step === "payment" && (
                      <button
                        type="button"
                        onClick={() => setStep("details")}
                        className="px-6 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white hover:border-purple-500/50 transition-all"
                      >
                        Назад
                      </button>
                    )}
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    >
                      {step === "details" ? "Продолжить к оплате" : `Оплатить $${total.toFixed(2)}`}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Confirmation */}
            {step === "confirmation" && (
              <div className="rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 flex items-center justify-center">
                  <Check className="w-10 h-10 text-green-400" />
                </div>

                <h2 className="text-2xl text-white mb-2">Оплата прошла успешно!</h2>
                <p className="text-gray-400 mb-8">
                  Ваши билеты будут отправлены на {formData.email}
                </p>

                <div className="p-6 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/10 mb-6">
                  <div className="text-sm text-gray-400 mb-2">Номер заказа</div>
                  <div className="text-xl text-white font-mono mb-4">TMN-2026-{Math.floor(Math.random() * 100000)}</div>
                  <div className="text-sm text-gray-400">
                    Спасибо за покупку! Если у вас есть вопросы, свяжитесь с нашей службой поддержки.
                  </div>
                </div>

                <button
                  onClick={() => navigate("/tickets")}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all"
                >
                  Мои билеты
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-6 sticky top-8">
              <h2 className="text-lg text-white mb-6">Сводка заказа</h2>

              {/* Concert Info */}
              <div className="mb-6">
                <div className="relative h-32 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <img
                    src={concert.image}
                    alt={concert.artist}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Music2 className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                <h3 className="text-white mb-3">{concert.artist}</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{concert.venue}, {concert.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{concert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{concert.time}</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 pb-4 mb-4 border-b border-purple-500/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    {orderSummary.ticketType} Билет × {orderSummary.quantity}
                  </span>
                  <span className="text-white">
                    ${(orderSummary.quantity * orderSummary.pricePerTicket).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Комиссия за обслуживание</span>
                  <span className="text-white">${orderSummary.serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Комиссия за обработку</span>
                  <span className="text-white">${orderSummary.processingFee.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg text-white">Итого</span>
                <span className="text-2xl text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Ticket Details */}
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div className="flex items-center gap-2 text-sm text-purple-300 mb-2">
                  <Ticket className="w-4 h-4" />
                  <span>Что включено</span>
                </div>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• {orderSummary.quantity} {orderSummary.ticketType} билетов</li>
                  <li>• Цифровые QR-коды билетов</li>
                  <li>• Подтверждение по email</li>
                  <li>• 24/7 служба поддержки</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
