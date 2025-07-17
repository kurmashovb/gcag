import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ru" | "fr";

type LanguageProviderProps = {
  children: ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Header
    "header.slogan":
      "Fast and Secure Ship Registration under Kenya & DRC Flags",
    "header.theme.toggle": "Toggle theme",
    "header.language": "Language",

    // Services
    "services.title": "Official Ship Registration Services",
    "services.description":
      "We provide official ship registration under the Kenyan and DRC flags, including both clean and sanctioned vessels. Fast turnaround and complete legal support via direct cooperation with national maritime authorities.",

    // Benefits
    "benefits.title": "Why Choose Our Services",
    "benefits.partnership": "Direct partnership with maritime administrations",
    "benefits.compliance": "Guaranteed legal compliance",
    "benefits.confidentiality": "Full confidentiality and fast service",
    "benefits.support": "Comprehensive client support at every stage",

    // Contact
    "contact.title": "Contact Us",
    "contact.email": "Email",
    "contact.offices": "Office Locations",
    "contact.office.switzerland": "Switzerland, Geneva",
    "contact.office.russia": "Russia",
    "contact.telegram": "Contact via Telegram",

    // How We Work
    "howwework.title": "How We Work",
    "howwework.description":
      "Our streamlined process ensures fast and compliant ship registration through direct partnerships with maritime authorities",
    "howwework.step1.title": "Application & Consultation",
    "howwework.step1.description":
      "Initial consultation and application submission with basic vessel information",
    "howwework.step2.title": "Document Verification",
    "howwework.step2.description":
      "Thorough verification of all documents and vessel ownership rights",
    "howwework.step3.title": "Maritime Authority Submission",
    "howwework.step3.description":
      "Official document submission to maritime authorities of Kenya or DRC",
    "howwework.step4.title": "Certificate Issuance",
    "howwework.step4.description":
      "Issuance of official registration certificate under the selected flag",
    "howwework.stats.vessels": "Registered Vessels",
    "howwework.stats.processing": "Average Processing Time",
    "howwework.stats.compliance": "Legal Compliance",
    "howwework.stats.flags": "Flag States",

    // Footer
    "footer.copyright":
      "© 2025 African Flag Registration Services. All rights reserved.",
    "footer.disclaimer":
      "We operate as official partners of national maritime administrations. All registrations comply with IMO standards and applicable law.",
  },
  ru: {
    // Header
    "header.slogan":
      "Быстрая и безопасная регистрация судов под флагами Кении и ДРК",
    "header.theme.toggle": "Переключить тему",
    "header.language": "Язык",

    // Services
    "services.title": "Официальные услуги регистрации судов",
    "services.description":
      "Мы предоставляем официальную регистрацию судов под флагами Кении и ДРК, включая как чистые, так и санкционные суда. Быстрый оборот и полная юридическая поддержка через прямое сотрудничество с национальными морскими администрациями.",

    // Benefits
    "benefits.title": "Почему выбирают наши услуги",
    "benefits.partnership": "Прямое партнерство с морскими администрациями",
    "benefits.compliance": "Гарантированное соблюдение законодательства",
    "benefits.confidentiality":
      "Полная конфиденциальность и быстрое обслуживание",
    "benefits.support": "Комплексная поддержка клиентов на каждом этапе",

    // Contact
    "contact.title": "Связаться с нами",
    "contact.email": "Электронная почта",
    "contact.offices": "Офисы",
    "contact.office.switzerland": "Швейцария, Женева",
    "contact.office.russia": "Россия",
    "contact.telegram": "Связаться через Telegram",

    // How We Work
    "howwework.title": "Как мы работаем",
    "howwework.description":
      "Наш упрощённый процесс обеспечивает быструю и соответствующую требованиям регистрацию судов через прямое партнёрство с морскими администрациями",
    "howwework.step1.title": "Заявка и консультация",
    "howwework.step1.description":
      "Первичная консультация и подача заявки с базовой информацией о судне",
    "howwework.step2.title": "Проверка документов",
    "howwework.step2.description":
      "Тщательная проверка всех документов и права собственности на судно",
    "howwework.step3.title": "Подача в морскую администрацию",
    "howwework.step3.description":
      "Официальная подача документов в морские органы Кении или ДРК",
    "howwework.step4.title": "Получение свидетельства",
    "howwework.step4.description":
      "Выдача официального свидетельства о регистрации под выбранным флагом",
    "howwework.stats.vessels": "Зарегистрированных судов",
    "howwework.stats.processing": "Среднее время обработки",
    "howwework.stats.compliance": "Соответствие требованиям",
    "howwework.stats.flags": "Государства флага",

    // Footer
    "footer.copyright":
      "© 2025 Африканские услуги регистрации флагов. Все права защищены.",
    "footer.disclaimer":
      "Мы работаем как официальные партнёры национальных морских администраций. Все регистрации соответствуют стандартам ИМО и применимому законодательству.",
  },
  fr: {
    // Header
    "header.slogan":
      "Enregistrement de navires rapide et sécurisé sous les pavillons du Kenya et de la RDC",
    "header.theme.toggle": "Basculer le thème",
    "header.language": "Langue",

    // Services
    "services.title": "Services officiels d'enregistrement de navires",
    "services.description":
      "Nous fournissons l'enregistrement officiel de navires sous les pavillons du Kenya et de la RDC, y compris les navires propres et sanctionnés. Délai de traitement rapide et support juridique complet via la coopération directe avec les autorités maritimes nationales.",

    // Benefits
    "benefits.title": "Pourquoi choisir nos services",
    "benefits.partnership":
      "Partenariat direct avec les administrations maritimes",
    "benefits.compliance": "Conformité légale garantie",
    "benefits.confidentiality": "Confidentialité totale et service rapide",
    "benefits.support": "Support client complet à chaque étape",

    // Contact
    "contact.title": "Nous contacter",
    "contact.email": "Email",
    "contact.offices": "Bureaux",
    "contact.office.switzerland": "Suisse, Genève",
    "contact.office.russia": "Russie",
    "contact.telegram": "Contacter via Telegram",

    // How We Work
    "howwework.title": "Comment nous travaillons",
    "howwework.description":
      "Notre processus simplifié garantit un enregistrement de navire rapide et conforme grâce à des partenariats directs avec les autorités maritimes",
    "howwework.step1.title": "Demande et consultation",
    "howwework.step1.description":
      "Consultation initiale et soumission de demande avec les informations de base du navire",
    "howwework.step2.title": "Vérification des documents",
    "howwework.step2.description":
      "Vérification approfondie de tous les documents et des droits de propriété du navire",
    "howwework.step3.title": "Soumission à l'autorité maritime",
    "howwework.step3.description":
      "Soumission officielle des documents aux autorités maritimes du Kenya ou de la RDC",
    "howwework.step4.title": "Délivrance du certificat",
    "howwework.step4.description":
      "Délivrance du certificat officiel d'enregistrement sous le pavillon sélectionné",
    "howwework.stats.vessels": "Navires enregistrés",
    "howwework.stats.processing": "Temps de traitement moyen",
    "howwework.stats.compliance": "Conformité légale",
    "howwework.stats.flags": "États du pavillon",

    // Footer
    "footer.copyright":
      "© 2025 Services d'enregistrement de pavillons africains. Tous droits réservés.",
    "footer.disclaimer":
      "Nous opérons en tant que partenaires officiels des administrations maritimes nationales. Tous les enregistrements sont conformes aux normes OMI et à la législation applicable.",
  },
};

const LanguageProviderContext = createContext<
  LanguageProviderState | undefined
>(undefined);

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("ui-language") as Language;
    return stored || defaultLanguage;
  });

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const handleSetLanguage = (newLanguage: Language) => {
    localStorage.setItem("ui-language", newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <LanguageProviderContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
