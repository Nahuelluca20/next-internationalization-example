import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/utils/dictionaries";
import Link from "next/link";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary("home", params.lang);
  return (
    <main className="">
      <div className="space-y-2">
        <h1 className="font-bold text-2xl">{dictionary.title}</h1>
        <h4 className="font-semibold text-xl text-muted-foreground">
          {dictionary.subtitle}
        </h4>
      </div>
      <p className="mt-5">{dictionary.content}</p>

      <div className="mt-10">
        <h2 className="text-lg font-medium">{dictionary.swithLanguage}</h2>
        <Button asChild>
          <Link href="/without-Internationalization-link">
            {dictionary.link}
          </Link>
        </Button>
      </div>
    </main>
  );
}
