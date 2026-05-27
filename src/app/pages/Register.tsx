import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Mail, Lock, User, Phone, Music2, Check } from "lucide-react";

export function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - in production this would call an API
    navigate("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />

      {/* Gradient blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 mb-4">
            <Music2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl bg-gradient-to-r bold from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Испытай музыку по-новому
          </h1>
          <p className="text-gray-400">Создайте свой аккаунт, чтобы начать</p>
        </div>

        {/* Glassmorphic card */}
        <div className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-8 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl opacity-20 blur-lg" />

          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm text-gray-300">
                  Имя
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Имя"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm text-gray-300">
                  Номер телефона
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (900) 000 00-00"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm text-gray-300">
                  Пароль
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Confirm Password field */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm text-gray-300">
                  Подтвердить пароль
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 rounded border-purple-500/30 bg-[#0a0a0f]/50 text-purple-500 focus:ring-purple-500/20"
                  required
                />
                <span className="text-sm text-gray-400">
                  Я согласен с {" "}
                  <Link to="/terms" className="text-purple-400 hover:text-purple-300">
                    Условиями использования
                  </Link>{" "}
                  и{" "}
                  <Link to="/privacy" className="text-purple-400 hover:text-purple-300">
                    Пользовательское соглашение
                  </Link>
                </span>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                Создать аккаунт
              </button>

            </form>

            {/* Sign in link */}
            <p className="mt-6 text-center text-sm text-gray-400">
              Уже есть аккаунт?{" "}
              <Link
                to="/login"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Войти
              </Link>
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-gray-400">
          <div className="flex flex-col items-center text-center gap-1">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-purple-400" />
            </div>
            <span>Бесплатный аккаунт</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-pink-400" />
            </div>
            <span>Ранний доступ</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-blue-400" />
            </div>
            <span>Эксклюзивные предложения</span>
          </div>
        </div>
      </div>
    </div>
  );
}
