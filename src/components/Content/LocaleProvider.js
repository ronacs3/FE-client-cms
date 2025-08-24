"use client";

import { IntlProvider } from "react-intl";
import { createContext, useContext, useState } from "react";
import vi from "@/localization/locale/vi.json";
import en from "@/localization/locale/en.json";

const messages = { vi, en };
const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("vi");

  // Debug
  console.log("LocaleProvider:", { locale, messages });

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="vi"
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
