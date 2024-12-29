import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda ex enim ea quibusdam perferendis, voluptate reprehenderit dolor soluta eveniet sapiente maiores dignissimos sequi rem minima numquam dolorem commodi alias.
                    </p>
                    <div className="flex space-x-4">
                    <Link href="#" className="hover:text-fuchsia-700 transition-colors">
                        <FaFacebook size={24} />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="hover:text-fuchsia-700 transition-colors">
                        <FaTwitter size={24} />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="hover:text-fuchsia-700 transition-colors">
                        <FaInstagram size={24} />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="hover:text-fuchsia-700 transition-colors">
                        <FaYoutube size={24} />
                        <span className="sr-only">YouTube</span>
                    </Link>
                    </div>
                </div>
          
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                    <li><Link href="/" className="hover:text-fuchsia-700 transition-colors">Home</Link></li>
                    <li><Link href="/posts" className="hover:text-fuchsia-700 transition-colors">Blogs</Link></li>
                    <li><Link href="/about" className="hover:text-fuchsia-700 transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="hover:text-fuchsia-700 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4">Popular Blogs</h3>
                    <ul className="space-y-2">
                    <li><Link href="/posts/2" className="hover:text-fuchsia-700 transition-colors">Understanding JavaScript</Link></li>
                    <li><Link href="/posts/3" className="hover:text-fuchsia-700 transition-colors">Why Learn TypeScript?</Link></li>
                    <li><Link href="/posts/4" className="hover:text-fuchsia-700 transition-colors">The Power of Python</Link></li>
                    <li><Link href="/posts/1" className="hover:text-fuchsia-700 transition-colors">Where to Start</Link></li>
                    </ul>
                </div>
            
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact</h2>
                    <p className='mt-4 flex items-center'>
                        <Phone className='w-6 h-6' />
                        <span className="ml-2">+1 234 567 890</span>
                    </p>
                    <p className='mt-4 flex items-center'>
                        <FaWhatsapp className='w-6 h-6' />
                        <span className="ml-2">+1 234 567 890</span>
                    </p>
                    <p className='mt-4 flex items-center'>
                        <MdEmail className='w-6 h-6' />
                        <span className="ml-2">abc@gmail.com</span>
                    </p>
                </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-fuchsia-700 text-center text-sm">
            <p>&copy; 2024 404 Found. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer