import InternationalizationLink from "@/components/internationalization-link";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/utils/dictionaries";
import Link from "next/link";

export default async function WithoutInternationalizationLink({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(
    "internationalization-link",
    params.lang
  );
  return (
    <main className="space-y-5">
      <h1 className="text-2xl font-bold">{dictionary.title}</h1>
      <p>{dictionary.content}</p>
      <div className="md:flex gap-2 items-center">
        <p>{dictionary.view}</p>
        <div className="flex gap-2 items-center">
          <Link
            className="text-blue-500"
            href={
              "https://github.com/Nahuelluca20/next-internationalization-example/blob/main/components/internationalization-link.tsx"
            }
            target="blank"
          >
            Component
          </Link>
          <span>/</span>
          <Link
            className="text-blue-500"
            href={
              "https://github.com/Nahuelluca20/next-internationalization-example/blob/main/app/%5Blang%5D/example-param/page.tsx"
            }
            target="blank"
          >
            Param
          </Link>
        </div>
      </div>
      <div className="space-x-2">
        <Button asChild>
          <InternationalizationLink href={`/`}>
            With InternationalizationLink
          </InternationalizationLink>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={`/${params.lang}/`}>With params</Link>
        </Button>
      </div>
    </main>
  );
}
