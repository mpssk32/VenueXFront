import { useState } from "react";
import { Link } from "react-router";
import { Mail, ArrowLeft, Send, Music2 } from "lucide-react";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock password reset - in production this would call an API
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        {/* Back button */}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Назад к входу</span>
        </Link>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-4">
            <Music2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            {sent ? "Check Your Email" : "Reset Password"}
          </h1>
          <p className="text-gray-400">
            {sent
              ? "We've sent password reset instructions to your email"
              : "Enter your email and we'll send you reset instructions"}
          </p>
        </div>

        {/* Glassmorphic card */}
        <div className="relative rounded-2xl bg-[#13131a]/80 backdrop-blur-xl border border-purple-500/20 p-8 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-lg" />

          <div className="relative">
            {sent ? (
              <div className="text-center space-y-6">
                {/* Success icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
                  <Send className="w-10 h-10 text-purple-400" />
                </div>

                <div className="space-y-3">
                  <p className="text-gray-300">
                    We sent an email to <span className="text-white">{email}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Нажмите кнопку ниже, если не получили письмо в течение нескольких минут. Проверьте папку "Спам" или "Промоакции", если не видите его во входящих.
                  </p>
                </div>

                <button
                  onClick={() => setSent(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Отправить снова
                </button>

                <Link
                  to="/login"
                  className="block text-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Вернуться к входу
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-gray-300">
                    Email 
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0a0a0f]/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Отправить ссылку для сброса
                </button>

                {/* Sign in link */}
                <p className="text-center text-sm text-gray-400">
                  Помните свой пароль?{" "}
                  <Link
                    to="/login"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Войти
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Security notice */}
        {!sent && (
          <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <p className="text-xs text-gray-400 text-center">
              По соображениям безопасности ссылка для сброса пароля истечёт через 1 час и может быть использована только один раз
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
