import HtmlLangSetter from "@/components/HtmlLangSetter";
import { isLocale, localeHtmlLang, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <div lang={localeHtmlLang[locale]} className="contents">
      <HtmlLangSetter locale={locale} />
      {children}
    </div>
  );
}
