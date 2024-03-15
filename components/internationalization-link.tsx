"use client";
import { getLocalePath } from "@/utils/getLocale";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InternationalizationLink({
  href,
  children,
  className,
  target,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  onClick?: () => void;
}) {
  const pathName = usePathname();

  return (
    <Link
      className={className}
      href={`/${getLocalePath(pathName)}/${href}`}
      target={target}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
