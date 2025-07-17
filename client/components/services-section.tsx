import { useLanguage } from "@/lib/language-provider";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Clock, Shield } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-maritime-navy dark:text-white">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-maritime-navy/20 dark:border-maritime-gold/20">
            <CardContent className="p-8 text-center">
              <div className="bg-maritime-navy/10 dark:bg-maritime-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-maritime-navy dark:text-maritime-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maritime-navy dark:text-white">
                Kenya Flag Registration
              </h3>
              <p className="text-muted-foreground">
                Complete registration services under the Kenyan maritime flag
                with full legal documentation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-maritime-green/20">
            <CardContent className="p-8 text-center">
              <div className="bg-maritime-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-maritime-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maritime-navy dark:text-white">
                DRC Flag Registration
              </h3>
              <p className="text-muted-foreground">
                Fast-track registration under the Democratic Republic of Congo
                maritime authority.
              </p>
            </CardContent>
          </Card>

          <Card className="border-maritime-gold/20">
            <CardContent className="p-8 text-center">
              <div className="bg-maritime-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-maritime-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maritime-navy dark:text-white">
                Legal Support
              </h3>
              <p className="text-muted-foreground">
                Comprehensive legal assistance and compliance verification for
                all registrations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
