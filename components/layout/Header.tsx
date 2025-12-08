"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import { FaFingerprint } from "react-icons/fa";

import { siteDetails } from "@/data/siteDetails";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Container from "../Container";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (isOpen) {
      const close = () => setIsOpen(false);

      window.addEventListener("scroll", close);
      return () => window.removeEventListener("scroll", close);
    }
  }, [isOpen]);

  // Disable body scroll on menu open
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return () => {
    document.body.style.overflow = "unset";
  };
}, [isOpen]);

  return (
    <header className="relative z-50">
      <Container className="!px-0">
        <nav
          className={cn(
            "mx-auto flex justify-between items-center py-4 px-5 md:py-6 transition-all duration-300",
            scrolled ? "md:py-4" : "md:py-8"
          )}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Go to homepage"
          >
            <FaFingerprint className="text-foreground w-7 h-7 transition-transform group-hover:scale-110" />
            <span className="manrope text-xl font-semibold text-foreground">
              {siteDetails.siteName}
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu className="max-w-full justify-start">
              <NavigationMenuList className="justify-start gap-1">
                {/* PRODUCTS */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent transition-colors">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 hover:shadow-lg transition-shadow"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Finwise Pro
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Advanced financial management for businesses
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <MenuLink href="#features" title="Features" desc="Explore all the powerful features" />
                      <MenuLink href="#pricing" title="Pricing" desc="Choose the plan that fits your needs" />
                      <MenuLink href="#testimonials" title="Testimonials" desc="See what our customers say" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* SOLUTIONS */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent transition-colors">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 hover:shadow-lg transition-shadow"
                            href="/solutions"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Enterprise Solutions
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Tailored financial solutions for large organizations
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <MenuLink href="#small-business" title="Small Business" desc="Perfect solutions for growing businesses" />
                      <MenuLink href="#startups" title="Startups" desc="Financial tools designed for startups" />
                      <MenuLink href="#individuals" title="Individuals" desc="Personal finance management made easy" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* RESOURCES */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent transition-colors">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 hover:shadow-lg transition-shadow"
                            href="/resources"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Learning Center
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Comprehensive guides and tutorials
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <MenuLink href="#blog" title="Blog" desc="Latest insights and financial tips" />
                      <MenuLink href="#documentation" title="Documentation" desc="Complete API and user documentation" />
                      <MenuLink href="#support" title="Support" desc="Get help from our support team" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* COMPANY */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary bg-transparent transition-colors">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 hover:shadow-lg transition-shadow"
                            href="/about"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              About Us
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Learn more about our mission and values
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <MenuLink href="#careers" title="Careers" desc="Join our team and grow with us" />
                      <MenuLink href="#contact" title="Contact" desc="Get in touch with our team" />
                      <MenuLink href="#news" title="News & Updates" desc="Stay updated with our latest news" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              size="lg"
              className="text-white bg-primary hover:bg-primary/90 px-8 rounded-full transition-all hover:scale-105"
            >
              <Link href="#cta">Get Started</Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110"
            >
              {isOpen ? <HiOutlineXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* MOBILE MENU */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div
          id="mobile-menu"
          className="md:hidden bg-white shadow-lg border-t max-h-screen overflow-y-auto"
        >
          <nav className="flex flex-col space-y-1 pt-2 pb-6 px-4">
            <MobileItem href="/">Products</MobileItem>
            <MobileItem href="/solutions">Solutions</MobileItem>
            <MobileItem href="/resources">Resources</MobileItem>
            <MobileItem href="/about">Company</MobileItem>

            {/* CTA */}
            <div className="pt-4">
              <Button asChild size="lg" className="w-full bg-primary text-white rounded-full">
                <Link href="#cta" onClick={toggleMenu}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      </Transition>

      {/* OVERLAY — FIXED VERSION (NO BLUR) */}
      <Transition
        show={isOpen}
        enter="transition-opacity ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black/40 md:hidden"  // <<―― FIXED (NO BLUR)
          onClick={toggleMenu}
          aria-hidden="true"
        />
      </Transition>
    </header>
  );
};

export default Header;

/* ------------ SMALL HELPER COMPONENTS ------------- */

const MenuLink = ({ href, title, desc }: any) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent transition-colors"
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{desc}</p>
      </Link>
    </NavigationMenuLink>
  </li>
);

const MobileItem = ({ href, children }: any) => (
  <Link
    href={href}
    onClick={() => {}}
    className="text-foreground hover:text-primary hover:bg-accent block px-3 py-2.5 rounded-md font-medium"
  >
    {children}
  </Link>
);
