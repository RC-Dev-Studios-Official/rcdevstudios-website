"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navItems } from "../data/content";
import mainLogo from "../assets/rc_dev_studios_exact.svg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 py-4 shadow-sm backdrop-blur-md dark:bg-[#050507]/80 dark:shadow-slate-900/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={mainLogo}
            alt="RC Dev Studios logo"
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.name}
              {index === 0 && (
                <span className="bg-rcdev-gradient absolute -bottom-2 left-0 h-0.5 w-full rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Link
            href="#contact"
            className="bg-rcdev-gradient rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Let&apos;s Build Together
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-slate-900 dark:text-white"
            aria-label="Open mobile menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 flex flex-col bg-white px-6 py-6 dark:bg-[#050507]"
          >
            <div className="flex items-center justify-between">
              <Image
                src={mainLogo}
                alt="RC Dev Studios logo"
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-900 dark:text-white"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-6 text-2xl font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-800 dark:text-slate-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-10">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-rcdev-gradient flex w-full justify-center rounded-full py-4 text-lg font-semibold text-white shadow-lg"
              >
                Let&apos;s Build Together →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
