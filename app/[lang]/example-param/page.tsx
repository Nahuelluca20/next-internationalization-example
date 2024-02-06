import { Locale } from "@/i18n-config";
import Link from "next/link";
import React from "react";

export default function WithLangParam({
  params,
}: {
  params: { lang: Locale };
}) {
  return (
    <div>
      With lang param
      <Link href={`/${params.lang}/without-Internationalization-link`}>Go</Link>
    </div>
  );
}
