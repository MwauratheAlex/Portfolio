"use client";
import Link from "next/link";
import Container from "./ui/container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const routes = [
    { href: "/", label: "Projects" },
    { href: "/", label: "About" },
    { href: "/", label: "Technologies" },
    { href: "/", label: "Contact" },
  ];

  return (
    <header className="border-b px-4 py-3 sm:flex sm:justify-between">
      <Container>
        <div className="relative flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="">
            <Link href="/" className="ml-4 lg:ml-0">
              mbugua dev
            </Link>
          </div>
          <nav className="mx-6 hidden items-center space-x-4 md:block lg:space-x-6">
            {routes.map((route, idx) => (
              <Button asChild variant="ghost" key={idx}>
                <Link href={route.href}>{route.label}</Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="Github"
              className="mr-2"
            >
              <Link href="">
                <FaGithub />
                <span className="sr-only">XTwitter</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
              className="mr-2"
            >
              <Link href="">
                <FaLinkedin />
                <span className="sr-only">XTwitter</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="XTwitter"
              className="mr-2"
            >
              <Link href="">
                <FaXTwitter />
                <span className="sr-only">XTwitter</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="ml-12"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
