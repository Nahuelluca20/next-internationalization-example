"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Languages } from "lucide-react";

import { i18n, type Locale } from "@/i18n-config";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");

    segments[1] = locale;

    return segments.join("/");
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline" className="mt-2">
            <Languages className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Toggle Languages</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {i18n.locales.map((locale) => {
            return (
              <DropdownMenuItem key={locale} asChild>
                <Link href={redirectedPathName(locale)}>{locale}</Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
