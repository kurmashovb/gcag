import { useLanguage } from "@/lib/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-maritime-navy dark:text-white">
            {t("contact.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-maritime-navy/20 dark:border-maritime-gold/20">
            <CardContent className="p-8 text-center">
              <div className="bg-maritime-navy/10 dark:bg-maritime-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-maritime-navy dark:text-maritime-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maritime-navy dark:text-white">
                {t("contact.email")}
              </h3>
              <a
                href="mailto:info@gcag.online"
                className="text-maritime-navy dark:text-maritime-gold hover:underline text-lg font-medium"
              >
                info@gcag.online
              </a>
            </CardContent>
          </Card>

          <Card className="border-maritime-green/20">
            <CardContent className="p-8 text-center">
              <div className="bg-maritime-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-maritime-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maritime-navy dark:text-white">
                {t("contact.offices")}
              </h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  {t("contact.office.switzerland")}
                </p>
                <p className="text-muted-foreground">
                  {t("contact.office.russia")}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-maritime-gold/20 md:col-span-2 lg:col-span-1">
            <CardContent className="p-8 text-center">
              <div className="bg-maritime-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-maritime-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maritime-navy dark:text-white">
                Telegram
              </h3>
              <Button
                className="bg-maritime-gold hover:bg-maritime-gold-light text-maritime-navy font-semibold px-8 py-3"
                onClick={() =>
                  window.open("https://t.me/africanflagservices", "_blank")
                }
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {t("contact.telegram")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
