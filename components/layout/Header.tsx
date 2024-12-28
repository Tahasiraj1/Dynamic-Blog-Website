"use client";

import { HiOutlineShoppingBag } from "react-icons/hi";
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
// import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";


const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);


//   const router = useRouter();

//   const getProductsName = (name: string) => {
//     const searchedProduct = products.find((p) => p.name.toLowerCase() === name.toLowerCase())
//     if (searchedProduct) {
//       router.push(`/products/${searchedProduct.id}`)
//       setShowSearch(false);
//       setQuery("");
//     }
//   }

//   const handleSearchClick = () => {
//     if (showSearch && query) {
//       getProductsName(query);
//     } else {
//       setShowSearch((prev) => !prev);
//     }
//   }

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='font-poppins bg-emerald-800 text-xl w-full h-20 flex items-center justify-between drop-shadow-xl text-white px-4 md:px-8 sticky top-0 z-50 opacity-90'>
      <h1 className='font-bold text-2xl animate-in slide-in-from-left-full transition-transform transform duration-1000'>
        NAME
      </h1>
      <div className='hidden md:block font-semibold'>
        <ul className='flex'>

          <Button variant="linkHover2">
            <Link href="/">
              <motion.li className='font-semibold text-lg'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              >HOME</motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/products">
              <motion.li className='font-semibold text-lg'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              >PRODUCTS</motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/about">
              <motion.li className='font-semibold text-lg'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              >ABOUT</motion.li>
            </Link>
          </Button>
          <Button variant="linkHover2">
            <Link href="/contact">
              <motion.li className='font-semibold text-lg'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              >CONTACT</motion.li>
            </Link>
          </Button>
            <Button variant="linkHover2">
              <Link href="/dashboard">
                <motion.li className='font-semibold text-lg'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                >DASHBOARD</motion.li>
              </Link>
            </Button>

        </ul>
      </div>
      <div className='flex gap-2 items-center justify-center animate-in slide-in-from-right-full transition-transform transform duration-1000'>
        <div className="relative">
          {/* {showSearch && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getProductsName(query);
              }}
              className="absolute animate-in slide-in-from-bottom-full duration-300 md:-right-[80px] lg:right-0 sm+:right-1 lg:top-1/2 sm+:top-1/2 transform sm:translate-y-16 md:translate-y-12 sm:-right-[80px] lg:-translate-y-1/2 sm+:-translate-y-1/2"
            >
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product"
                className="px-4 py-2 rounded-full text-black w-44 md:w-56"
              />
            </form>
          )} */}
          {/* <Button
            type="button"
            className={`bg-transparent hover:bg-transparent text-white hover:text-emerald-200 rounded-full p-0 m-0 ${showSearch ? 'opacity-0' : 'opacity-100'}`}
            onClick={handleSearchClick}
            variant="ghost"
          >
            <FaSearch size={16} />
          </Button> */}
        </div>
        <div className='sm:hidden md:block ml-2'>
          <Link href="/cart">
            <HiOutlineShoppingBag className='w-6 h-6 text-white hover:text-emerald-200' />
          </Link>
        </div>

        <Sheet>

          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden bg-transparent hover:bg-transparent">
              <RiMenu3Line className='w-6 h-6 text-white hover:text-emerald-200' />
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