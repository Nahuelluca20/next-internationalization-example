"use client";

import { getDictionary } from "@/utils/dictionaries";
import { getLocale } from "@/utils/getLocale";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const pathName = usePathname();

  const [dictionary, setDictioary] = useState();
  const getClientDictionary = async () => {
    setDictioary(await getDictionary("home", getLocale(pathName)));
  };

  useEffect(() => {
    getClientDictionary();
  }, []);

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
