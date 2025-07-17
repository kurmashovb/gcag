import { Anchor, Shield, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.svg"
          alt="Ship aerial view"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-maritime-navy/80 dark:bg-maritime-navy/90"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-maritime-navy/20 via-transparent to-maritime-green/20"></div>
      </div>
      {/* Background Pattern - Subtle Africa Map Outline */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100 20 Q120 25 140 35 Q160 50 170 75 Q175 100 170 125 Q160 150 140 165 Q120 175 100 180 Q80 175 60 165 Q40 150 30 125 Q25 100 30 75 Q40 50 60 35 Q80 25 100 20 Z" />
        </svg>
      </div>

      {/* Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 opacity-5">
        <svg
          className="w-full h-20"
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Anchor Icon with Premium Effects */}
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-maritime-gold/20 via-maritime-gold/30 to-maritime-gold/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 bg-maritime-gold/15 rounded-full blur-xl"></div>

              {/* Main icon container */}
              <div className="relative bg-gradient-to-br from-maritime-navy to-maritime-navy-dark dark:from-maritime-gold dark:to-maritime-gold-light text-white dark:text-maritime-navy p-6 md:p-8 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Anchor className="h-12 w-12 md:h-16 md:w-16" />
              </div>

              {/* Subtle border ring */}
              <div className="absolute inset-0 rounded-full ring-2 ring-white/10 ring-offset-2 ring-offset-transparent"></div>
            </div>
          </div>

          {/* Enhanced Title with Better Spacing */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white leading-tight tracking-tight">
            <span className="block mb-2">African Flag</span>
            <span className="block text-maritime-gold">
              Registration Services
            </span>
          </h1>

          {/* Improved Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 md:mb-16 text-white/90 font-normal max-w-3xl mx-auto leading-relaxed">
            {t("header.slogan")}
          </p>

          {/* Enhanced Benefits Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="bg-maritime-green/10 dark:bg-maritime-green/20 p-3 rounded-full group-hover:bg-maritime-green/20 transition-colors duration-300">
                <Shield className="h-6 w-6 md:h-7 md:w-7 text-maritime-green" />
              </div>
              <span className="font-medium text-sm md:text-base text-maritime-green">
                Secure & Legal
              </span>
            </div>

            {/* Vertical Divider - Hidden on Mobile */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-maritime-navy/20 to-transparent dark:via-white/20"></div>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="bg-maritime-gold/10 dark:bg-maritime-gold/20 p-3 rounded-full group-hover:bg-maritime-gold/20 transition-colors duration-300">
                <Globe className="h-6 w-6 md:h-7 md:w-7 text-maritime-gold" />
              </div>
              <span className="font-medium text-sm md:text-base text-maritime-gold">
                IMO Compliant
              </span>
            </div>

            {/* Vertical Divider - Hidden on Mobile */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-maritime-navy/20 to-transparent dark:via-white/20"></div>
            </div>

            <div className="group flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
              <div className="bg-maritime-navy/10 dark:bg-white/20 p-3 rounded-full group-hover:bg-maritime-navy/20 dark:group-hover:bg-white/30 transition-colors duration-300">
                <Anchor className="h-6 w-6 md:h-7 md:w-7 text-maritime-navy dark:text-white" />
              </div>
              <span className="font-medium text-sm md:text-base text-maritime-navy dark:text-white">
                Fast Processing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
