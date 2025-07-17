import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "@/lib/language-provider";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 md:space-x-4 min-w-0 flex-1">
            <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
              <div className="bg-white rounded-full p-1.5 md:p-2 shadow-sm flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1653d35059b74a02a89ad40700db74ac%2F9522287b0fad4bfdbc64ba93902c8b82?format=webp&width=800"
                  alt="African Flag Registration Services"
                  className="h-8 w-8 md:h-12 md:w-12 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg md:text-xl font-bold text-maritime-navy dark:text-maritime-gold leading-tight">
                  African Flag Registration Services
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground max-w-md mt-1 leading-tight hidden sm:block">
                  {t("header.slogan")}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
