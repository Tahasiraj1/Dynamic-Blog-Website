"use client";

import { RiMenu3Line } from "react-icons/ri";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import DotPattern from "../ui/dot-pattern";


const Header = () => {
  return (
    <div className='relative font-extrabold text-xl w-full h-20 flex items-center justify-between drop-shadow-xl text-black px-4 md:px-8 top-0 z-50 opacity-90'>
        <DotPattern className="absolute top-0 left-0 -z-10" />
      <h1 className='font-bold text-2xl animate-in slide-in-from-left-full transition-transform transform duration-1000'>
        NAME
      </h1>
      <div className='hidden md:block font-semibold'>
        <ul className='flex'>

          <Button variant="linkHover2">
            <Link href="/">
              <motion.li className='font-semibold text-lg drop-shadow-lg'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              >HOME</motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/products">
              <motion.li className='font-semibold text-lg drop-shadow-lg'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              >BLOGS</motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/about">
              <motion.li className='font-semibold text-lg drop-shadow-lg'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              >ABOUT</motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/contact">
              <motion.li className='font-semibold text-lg drop-shadow-lg'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              >CONTACT</motion.li>
            </Link>
          </Button>

        </ul>
      </div>
      <div className='flex gap-2 items-center justify-center animate-in slide-in-from-right-full transition-transform transform duration-1000'>

        <Sheet>

          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden bg-transparent hover:bg-transparent">
              <RiMenu3Line className='w-6 h-6 text-black hover:text-emerald-200' />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className='pt-20 bg-emerald-800 text-white border-gray-600'>
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav>

              <ul className='flex flex-col gap-4'>
                <li>
                  <Button variant="linkHover2" asChild className="w-full justify-start">
                    <Link href="/">HOME</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="linkHover2" asChild className="w-full justify-start">
                    <Link href="/products">PRODUCTS</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="linkHover2" asChild className="w-full justify-start">
                    <Link href="/about">ABOUT</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="linkHover2" asChild className="w-full justify-start">
                    <Link href="/contact">CONTACT</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="linkHover2" asChild className="w-full justify-start">
                    <Link href="/cart">CART</Link>
                  </Button>
                </li>
                  <li>
                    <Button variant="linkHover2" asChild className="w-full justify-start">
                      <Link href="/dashboard">DASHBOARD</Link>
                    </Button>
                  </li>

              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Header;