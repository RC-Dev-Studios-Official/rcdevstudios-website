"use client";

import Image from "next/image";
import Link from "next/link";
import mainLogo from "../assets/rc_dev_studios_exact.svg";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-20 pb-10 dark:border-slate-900 dark:bg-[#050507]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src={mainLogo}
                alt="RC Dev Studios logo"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>
            <p className="mt-6 max-w-xs text-slate-600 dark:text-slate-400">
              Building digital products that move businesses forward.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Company</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#about" className="hover:text-purple-600 dark:hover:text-purple-400">About Us</Link></li>
                <li><Link href="#products" className="hover:text-purple-600 dark:hover:text-purple-400">Products</Link></li>
                <li><Link href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Services</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#services" className="hover:text-purple-600 dark:hover:text-purple-400">Web Development</Link></li>
                <li><Link href="#services" className="hover:text-purple-600 dark:hover:text-purple-400">Mobile Development</Link></li>
                <li><Link href="#services" className="hover:text-purple-600 dark:hover:text-purple-400">UI/UX Design</Link></li>
                <li><Link href="#services" className="hover:text-purple-600 dark:hover:text-purple-400">Cloud & DevOps</Link></li>
                <li><Link href="#services" className="hover:text-purple-600 dark:hover:text-purple-400">AI Solutions</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-slate-900 dark:text-white">Connect</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="mailto:rcdevstudios@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400">Email: rcdevstudios@gmail.com</a></li>
                <li><a href="tel:7676339179" className="hover:text-purple-600 dark:hover:text-purple-400">Contact: 7676339179</a></li>
                <li><a href="https://github.com/rcdevstudios" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400">GitHub: rcdevstudios</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row dark:border-slate-800 dark:text-slate-500">
          <p>© 2026 RC Dev Studios. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
