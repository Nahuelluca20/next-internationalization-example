"use client";

import { getDictionary } from "@/utils/dictionaries";
import { getLocale } from "@/utils/getLocale";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useTranslate from "@/hooks/useTranslate";

export default function Page() {
  const dictionary = useTranslate("home");

  return (
    <div>
      <h1>Client Component</h1>
      <div className="space-y-2">
        {/* @ts-ignore */}
        <h1 className="font-bold text-2xl">{dictionary?.title}</h1>
        <h4 className="font-semibold text-xl text-muted-foreground">
          {/* @ts-ignore */}
          {dictionary?.subtitle}
        </h4>
      </div>
    </div>
  );
}
