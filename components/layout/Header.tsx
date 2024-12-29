"use client";

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
import { motion } from "framer-motion";
import { ModeToggle } from "../Theme-Toggle";

const Header = () => {
  return (
    <div className="relative font-extrabold text-xl w-full h-20 flex items-center justify-between drop-shadow-2xl px-4 md:px-8">
      <h1 className="font-bold text-2xl animate-in slide-in-from-left-full transition-transform transform duration-1000">
        404 Found
      </h1>
      <div className="hidden md:block font-semibold">
        <ul className="flex">
          <Button variant="linkHover2">
            <Link href="/">
              <motion.li
                className="font-semibold text-lg drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
              >
                HOME
              </motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/posts">
              <motion.li
                className="font-semibold text-lg drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                BLOGS
              </motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/about">
              <motion.li
                className="font-semibold text-lg drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ABOUT
              </motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/contact">
              <motion.li
                className="font-semibold text-lg drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                CONTACT
              </motion.li>
            </Link>
          </Button>
        </ul>
      </div>
      <div className="flex gap-2 items-center justify-center animate-in slide-in-from-right-full transition-transform transform duration-1000">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden bg-transparent hover:bg-transparent"
            >
              <RiMenu3Line className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="pt-20 bg-primary border-r-0 border-t-0 border-b-0 border-l-2 border-fuchsia-600"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <Button
                    variant="linkHover2"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/">HOME</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="linkHover2"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/posts">BLOGS</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="linkHover2"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/about">ABOUT</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="linkHover2"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/contact">CONTACT</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
