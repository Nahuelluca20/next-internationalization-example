import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="max-w-[1024px] mx-auto mt-10">
      <nav className="w-full flex items-center justify-between">
        <ul className="flex gap-4 font-semibold items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/without-Internationalization-link"}>
              Without InternationalizationLink
            </Link>
          </li>
          <li>
            <Link href={"/with-lang-param"}>With lang param</Link>
          </li>
        </ul>
        <div className="flex gap-2 items-center">
          <LocaleSwitcher />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
