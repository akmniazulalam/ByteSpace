import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-white pt-14 sm:pt-16 lg:pt-17.5 pb-8 sm:pb-10 lg:pb-11">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Main Footer */}
        <div className="flex flex-col gap-12 pb-16 sm:pb-20 lg:flex-row lg:gap-15 lg:pb-32.5 xl:gap-23">
          {/* Newsletter */}
          <div className="w-full max-w-102.5 xl:max-w-132 shrink-0">
            <div className="space-y-4">
              <Link href="/" aria-label="ByteSpace home">
                <Image
                  src="/logo_black.png"
                  alt="ByteSpace"
                  width={171}
                  height={37}
                  className="w-42.75 h-9.25"
                />
              </Link>

              <Paragraph className="max-w-132 text-sm text-textColor pt-4">
                Stay up to date with our latest features and releases by joining
                our newsletter.
              </Paragraph>
            </div>

            <div className="mt-8 space-y-5 sm:mt-10 lg:mt-11">
              <form className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="h-14 w-full min-w-0 rounded-full border border-[#CED0D3] bg-white px-5 text-sm font-medium leading-[120%] text-textColor outline-none transition-colors duration-300 placeholder:text-textColor/50 focus:border-textColor sm:h-15 sm:px-6 sm:text-base"
                />

                <Button
                  className="h-14 w-full shrink-0 sm:h-15 sm:w-auto">
                  Subscribe
                </Button>
              </form>

              <Paragraph className="max-w-126 text-[12px] leading-[160%] text-textColor">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </Paragraph>
            </div>
          </div>

          {/* Footer Navigation */}
          <nav
            aria-label="Footer navigation"
            className="grid w-full grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0 lg:flex lg:justify-between lg:gap-2.5 xl:gap-8">
            {/* Browse */}
            <div className="space-y-5 sm:space-y-6 lg:w-41.75">
              <h4 className="text-base font-semibold leading-9 text-black">
                Browse
              </h4>

              <ul className="flex flex-col gap-y-3 sm:gap-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    IT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-5 sm:space-y-6 lg:w-41.75">
              <h4 className="text-base font-semibold leading-9 text-black">
                Categories
              </h4>

              <ul className="flex flex-col gap-y-3 sm:gap-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div className="col-span-2 space-y-5 sm:col-span-1 sm:space-y-6 lg:w-41.75">
              <h4 className="text-base font-semibold leading-9 text-black">
                Platform
              </h4>

              <ul className="flex flex-col gap-y-3 sm:gap-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm font-normal leading-[160%] text-textColor/80 transition-colors duration-300 ease-in-out hover:text-textColor">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div role="separator" className="h-px w-full bg-[#CED0D3]" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 pt-6 text-center sm:gap-4 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <Paragraph className="text-[12px] leading-[160%] text-textColor">
            © 2023 ByteSpace. All rights reserved.
          </Paragraph>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6 lg:justify-end">
            <Link
              href="/"
              className="text-[12px] font-normal leading-[160%] text-textColor transition-colors duration-300 hover:text-black">
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="text-[12px] font-normal leading-[160%] text-textColor transition-colors duration-300 hover:text-black">
              Terms of Service
            </Link>

            <Link
              href="/"
              className="text-[12px] font-normal leading-[160%] text-textColor transition-colors duration-300 hover:text-black">
              Cookies Settings
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Footer;
