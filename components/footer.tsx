import Link from "next/link";

export default function Footer() {
  return (
    <div className="sm:fixed mt-10 sm:mt-0 bottom-0 w-full px-5">
      <footer className="hover:underline mx-auto py-5 max-w-[1024px] flex justify-between text-foreground-muted">
        <Link
          href={
            "https://github.com/Nahuelluca20/next-internationalization-example"
          }
          target="blank"
        >
          code
        </Link>
        <Link href={"https://github.com/Nahuelluca20"} target="blank">
          Made by Nahuel
        </Link>
      </footer>
    </div>
  );
}
