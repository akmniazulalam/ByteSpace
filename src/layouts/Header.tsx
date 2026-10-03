"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";

const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Creators",
    href: "/creators",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu with Escape key
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-[background-color,box-shadow] duration-300 ease-in-out ${
          scrolled
            ? "bg-secondary shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-22 sm:px-6 lg:h-auto lg:px-8 lg:py-9">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Bytespace home"
            onClick={closeMenu}
            className="relative z-10 shrink-0">
            <Image
              src="/Header_Logo.png"
              width={160}
              height={160}
              alt="Bytespace"
              priority
              className="h-auto w-28 sm:w-32 lg:w-40"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-normal text-base leading-[160%] text-sectionBg transition-all duration-200 ease-in-out hover:font-medium">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/signin"
              className="font-normal text-base leading-[160%] text-sectionBg transition-all duration-200 ease-in-out hover:font-medium">
              Sign In
            </Link>

            <Link
              href="/signup"
              className="font-normal text-base leading-[160%] text-sectionBg transition-all duration-200 ease-in-out hover:font-medium">
              Join Us
            </Link>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="text-sectionBg transition-opacity duration-200 hover:opacity-70">
              <MdOutlineShoppingBag className="text-2xl" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sectionBg transition-colors duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:hidden">
            {menuOpen ? (
              <HiX className="text-2xl" aria-hidden="true" />
            ) : (
              <FaBarsStaggered className="text-2xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}>
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`absolute right-0 top-0 flex h-dvh w-[min(85%,360px)] flex-col bg-secondary px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out sm:w-95 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          {/* Navigation */}
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-lg font-medium text-sectionBg transition-colors duration-200 hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/signin"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 text-base font-medium text-sectionBg transition-colors duration-200 hover:border-white/40 hover:bg-white/5">
              Sign In
            </Link>

            <Link
              href="/signup"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-full bg-primary px-5 text-base font-medium text-textColor transition-opacity duration-200 hover:opacity-90">
              Join Us
            </Link>

            <Link
              href="/cart"
              onClick={closeMenu}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-base font-medium text-sectionBg transition-colors duration-200 hover:border-white/40 hover:bg-white/5">
              <MdOutlineShoppingBag className="text-xl" />
              Cart
            </Link>
          </div>

          {/* Decorative Bottom Text */}
          <div className="mt-auto pt-8">
            <p className="text-center text-xs text-white/40">
              Learn. Create. Grow.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
