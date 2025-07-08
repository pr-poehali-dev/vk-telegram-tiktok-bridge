import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#444444" }}
    >
      <div className="max-w-md w-full px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto flex items-center justify-center mb-4">
              <Icon name="Sparkles" size={32} className="text-slate-900" />
            </div>
          </div>
          <h1
            className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Украшения ручной работы
          </h1>
          <p className="text-slate-300 text-lg">
            Уникальные авторские украшения, созданные с любовью
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <p className="text-slate-500 text-sm uppercase tracking-wide mb-6">
            Следите за новинками
          </p>

          <div className="space-y-3">
            {/* VK Button */}
            <Button
              variant="outline"
              className="w-full h-14 bg-transparent border-slate-600 text-white hover:bg-slate-700 hover:border-amber-500 transition-all duration-300 group"
              onClick={() => window.open("https://vk.com", "_blank")}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VK</span>
                </div>
                <span className="group-hover:text-amber-400 transition-colors text-lg">
                  ВКонтакте
                </span>
              </div>
            </Button>

            {/* Telegram Button */}
            <Button
              variant="outline"
              className="w-full h-14 bg-transparent border-slate-600 text-white hover:bg-slate-700 hover:border-amber-500 transition-all duration-300 group"
              onClick={() => window.open("https://t.me", "_blank")}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <Icon name="Send" size={16} className="text-white" />
                </div>
                <span className="group-hover:text-amber-400 transition-colors text-lg">
                  Telegram
                </span>
              </div>
            </Button>

            {/* TikTok Button */}
            <Button
              variant="outline"
              className="w-full h-14 bg-transparent border-slate-600 text-white hover:bg-slate-700 hover:border-amber-500 transition-all duration-300 group"
              onClick={() => window.open("https://tiktok.com", "_blank")}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Icon name="Music" size={16} className="text-white" />
                </div>
                <span className="group-hover:text-amber-400 transition-colors text-lg">
                  TikTok
                </span>
              </div>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-500 text-sm">
            ✨ Каждое украшение — произведение искусства ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
