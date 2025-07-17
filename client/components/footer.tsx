import { useLanguage } from "@/lib/language-provider";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-maritime-navy dark:bg-maritime-navy-dark text-white overflow-hidden">
      {/* Background Pattern - Stylized Waves */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q100,20 200,50 T400,50 L400,200 L0,200 Z"
            fill="currentColor"
          />
          <path
            d="M0,80 Q100,50 200,80 T400,80 L400,200 L0,200 Z"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M0,110 Q100,80 200,110 T400,110 L400,200 L0,200 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Company Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1653d35059b74a02a89ad40700db74ac%2F9522287b0fad4bfdbc64ba93902c8b82?format=webp&width=800"
                    alt="African Flag Registration Services"
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-maritime-gold">
                    African Flag Registration
                  </h3>
                  <p className="text-sm text-white/80">Services</p>
                </div>
              </div>

              <p className="text-sm text-white/80 leading-relaxed">
                {t("footer.disclaimer")}
              </p>

              {/* Country Flags */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🇰🇪</span>
                  <span className="text-sm text-white/70">Kenya</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🇨🇩</span>
                  <span className="text-sm text-white/70">DRC</span>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-maritime-gold border-b border-maritime-gold/30 pb-2">
                {t("contact.title")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-maritime-gold/10 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-maritime-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {t("contact.email")}
                    </p>
                    <a
                      href="mailto:info@gcag.online"
                      className="text-maritime-gold hover:text-maritime-gold-light transition-colors"
                    >
                      info@gcag.online
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-maritime-green/10 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-maritime-green" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">
                      {t("contact.offices")}
                    </p>
                    <p className="text-sm text-white/80">
                      {t("contact.office.switzerland")}
                    </p>
                    <p className="text-sm text-white/80">
                      {t("contact.office.russia")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Telegram Contact Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-maritime-gold border-b border-maritime-gold/30 pb-2">
                Quick Contact
              </h3>

              <div className="space-y-4">
                <p className="text-sm text-white/80">
                  Get instant support via our Telegram channel
                </p>

                <Button
                  className="w-full bg-maritime-gold hover:bg-maritime-gold-light text-maritime-navy font-semibold py-3 transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    window.open("https://t.me/africanflagservices", "_blank")
                  }
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {t("contact.telegram")}
                </Button>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/60 text-center">
                    Available 24/7 for urgent inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-sm text-white/60 text-center md:text-left">
                {t("footer.copyright")}
              </p>

              {/* Services Badges */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-xs text-white/60">
                  <div className="w-2 h-2 bg-maritime-green rounded-full"></div>
                  <span>IMO Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/60">
                  <div className="w-2 h-2 bg-maritime-gold rounded-full"></div>
                  <span>Legal Partnership</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/60">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <span>Fast Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
