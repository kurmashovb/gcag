import { useLanguage } from "@/lib/language-provider";
import {
  Check,
  Handshake,
  ShieldCheck,
  Lock,
  HeadphonesIcon,
} from "lucide-react";

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Handshake,
      title: t("benefits.partnership"),
      color: "text-maritime-navy",
      bgColor: "bg-maritime-navy/10",
    },
    {
      icon: ShieldCheck,
      title: t("benefits.compliance"),
      color: "text-maritime-green",
      bgColor: "bg-maritime-green/10",
    },
    {
      icon: Lock,
      title: t("benefits.confidentiality"),
      color: "text-maritime-gold",
      bgColor: "bg-maritime-gold/10",
    },
    {
      icon: HeadphonesIcon,
      title: t("benefits.support"),
      color: "text-maritime-navy",
      bgColor: "bg-maritime-navy/10",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-maritime-green/5 to-maritime-gold/5 dark:from-maritime-green/10 dark:to-maritime-gold/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-maritime-navy dark:text-white">
            {t("benefits.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`${benefit.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`h-10 w-10 ${benefit.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-maritime-navy dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <div className="flex justify-center">
                  <Check className="h-6 w-6 text-maritime-green" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
