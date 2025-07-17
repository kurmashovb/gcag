import { useLanguage } from "@/lib/language-provider";
import { MessageSquare, FileCheck, Send, Award } from "lucide-react";

export function HowWeWorkSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      title: t("howwework.step1.title"),
      description: t("howwework.step1.description"),
      color: "maritime-navy",
      bgColor: "maritime-navy/10",
    },
    {
      icon: FileCheck,
      title: t("howwework.step2.title"),
      description: t("howwework.step2.description"),
      color: "maritime-green",
      bgColor: "maritime-green/10",
    },
    {
      icon: Send,
      title: t("howwework.step3.title"),
      description: t("howwework.step3.description"),
      color: "maritime-gold",
      bgColor: "maritime-gold/10",
    },
    {
      icon: Award,
      title: t("howwework.step4.title"),
      description: t("howwework.step4.description"),
      color: "maritime-navy",
      bgColor: "maritime-navy/10",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-maritime-navy-dark/20 dark:to-maritime-green/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-maritime-navy dark:text-white">
            {t("howwework.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("howwework.description")}
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <div key={index} className="relative group">
                {/* Connection Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-px bg-gradient-to-r from-maritime-gold/50 to-maritime-gold/20 z-0"></div>
                )}

                {/* Card */}
                <div className="relative bg-white dark:bg-maritime-navy-dark/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20 dark:border-maritime-gold/10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-maritime-gold text-maritime-navy w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`bg-${step.bgColor} dark:bg-${step.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className={`h-8 w-8 text-${step.color} dark:text-${step.color}`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-maritime-navy dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 flex items-center space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i <= index
                            ? "bg-maritime-gold w-6"
                            : "bg-gray-200 dark:bg-gray-700 w-3"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-maritime-gold mb-2">
              500+
            </div>
            <div className="text-sm text-muted-foreground">
              {t("howwework.stats.vessels")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-maritime-green mb-2">
              24{t("language") === "ru" ? "ч" : "h"}
            </div>
            <div className="text-sm text-muted-foreground">
              {t("howwework.stats.processing")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-maritime-navy dark:text-white mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground">
              {t("howwework.stats.compliance")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-maritime-gold mb-2">
              2
            </div>
            <div className="text-sm text-muted-foreground">
              {t("howwework.stats.flags")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
