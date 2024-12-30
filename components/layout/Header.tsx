import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../Theme-Toggle";
import { FloatingNav } from "./Navbar";

const navItems = [
  { name: "HOME", link: "/" },
  { name: "BLOGS", link: "/posts" },
  { name: "ABOUT", link: "/about" },
  { name: "CONTACT", link: "/contact" },
];

const Header = () => {
  return (
    <header className="font-extrabold w-full">
      <div className="h-20 flex items-center justify-between drop-shadow-2xl px-4 md:px-8">
        <h1 className="font-bold text-2xl animate-in slide-in-from-left-full transition-transform transform duration-1000">
          404 Found
        </h1>
        <div className="flex items-center justify-center animate-in slide-in-from-right-full transition-transform transform duration-1000">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full"
              >
                <RiMenu3Line className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="pt-20 border-r-0 border-t-0 border-b-0 border-l-2 border-fuchsia-600"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav>
                <ul className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="linkHover2"
                        asChild
                        className="w-full justify-start"
                      >
                        <Link href={item.link}>{item.name}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <FloatingNav navItems={navItems} className="hidden md:block" />
    </header>
  );
};

export default Header;

