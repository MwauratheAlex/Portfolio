"use client";
import Link from "next/link";
import Container from "./ui/container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const routes = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#technologies", label: "Technologies" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="w-full overflow-hidden  border-b-4 border-slate-950 px-4 py-3 sm:flex sm:justify-between">
      <Container>
        <div className="relative flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="">
            <Link href="/" className="lg:ml-0">
              mbugua
            </Link>
          </div>
          <nav className="mx-6 hidden items-center space-x-4 lg:block lg:space-x-6">
            {routes.map((route, idx) => (
              <Button asChild variant="ghost" key={idx}>
                <Link href={route.href}>{route.label}</Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <SocialMedia className="hidden" />
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle Theme"
                className="md:ml-12"
                onClick={() => setTheme(theme === "dark" ? "dark" : "dark")}
              >
                <Sun
                  color="#d17a00"
                  className="absolute h-6 w-6 rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100"
                />
                <Moon className="h-6 w-6 rotate-0 scale-100  transition-all dark:rotate-90 dark:scale-0" />
                <span className="sr-only">Toggle Theme</span>
              </Button>
              <SideBar routes={routes} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

const SideBar = (props: { routes: { href: string; label: string }[] }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Menu className="h-6 w-6 md:hidden" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-6 flex flex-col justify-between">
          <DrawerHeader>
            {/* <div className="flex justify-between py-3">
                        <DrawerTitle>Mbugua</DrawerTitle>
                        <DrawerClose>
                          <X />
                        </DrawerClose>
                      </div> */}
          </DrawerHeader>
          <nav className="flex  h-full flex-col justify-center border py-0">
            {/* <Separator /> */}
            {props.routes.map((route, idx) => (
              <div className="grid place-items-center gap-2" key={idx}>
                <Button
                  // asChild
                  variant="ghost"
                  className="my-0 w-full rounded-none py-8 "
                >
                  <Link href={route.href}>{route.label}</Link>
                </Button>
                {/* {idx === routes.length - 1 && <Separator />} */}
              </div>
            ))}
          </nav>
          <DrawerFooter>
            <SocialMedia className="mb-3 mt-1 flex justify-center gap-2 border" />
            <Button variant="destructive" className="mb-2 w-full" asChild>
              <DrawerClose>Close</DrawerClose>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export const SocialMedia = (props: { className?: string }) => {
  return (
    <div className={`${props.className ?? ""} md:flex`}>
      <Button asChild variant="ghost" size="icon" aria-label="Github">
        <Link href="">
          <FaGithub />
          <span className="sr-only">XTwitter</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
        <Link href="">
          <FaLinkedin className="bg-red" />
          <span className="sr-only">XTwitter</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" size="icon" aria-label="XTwitter">
        <Link href="">
          <FaXTwitter />
          <span className="sr-only">XTwitter</span>
        </Link>
      </Button>
    </div>
  );
};

export default Header;
