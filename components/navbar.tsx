"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, Users, Menu, ChevronDownIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:grid  grid-cols-2 lg:grid-cols-3 justify-end gap-4 items-center sticky top-0 z-50 bg-white">
        <div className="grid place-content-start ms-6 my-2">App Icon</div>
        <NavigationMenu className="mx-auto max-w-screen-sm  ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/users" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Users className="mr-2 h-4 w-4" />
                  Users
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dropdown</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/dropdown" title="Dropdown Item 1">
                    Item 1
                  </ListItem>
                  <ListItem href="/dropdown" title="Dropdown Item 2">
                    Item 2
                  </ListItem>
                  <ListItem href="/dropdown" title="Dropdown Item 3">
                    Item 3
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="grid place-content-end me-6 my-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 lg:hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" legacyBehavior passHref>
                  <span className=" font-bold text-xl">My App</span>
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" legacyBehavior passHref>
              <span
                className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}>
                <Home className="mr-2 h-4 w-4 inline" />
                Home
              </span>
            </Link>
            <Link href="/users" legacyBehavior passHref>
              <span
                className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}>
                <Users className="mr-2 h-4 w-4 inline" />
                Users
              </span>
            </Link>
            <div>
              <button
                onClick={toggleDropdown}
                type="button"
                className="text-gray-500 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium w-full flex justify-between items-center">
                <span>Dropdown</span>
                <ChevronDownIcon
                  className={`${
                    isDropdownOpen ? "rotate-180 transform" : ""
                  } h-4 w-4 transition-transform`}
                />
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <Link href="/dropdown" legacyBehavior passHref>
                    <span
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => {
                        toggleMenu();
                        toggleDropdown();
                      }}>
                      Dropdown Item 1
                    </span>
                  </Link>
                  <Link href="/dropdown" legacyBehavior passHref>
                    <span
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => {
                        toggleMenu();
                        toggleDropdown();
                      }}>
                      Dropdown Item 2
                    </span>
                  </Link>
                  <Link href="/dropdown" legacyBehavior passHref>
                    <span
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => {
                        toggleMenu();
                        toggleDropdown();
                      }}>
                      Dropdown Item 3
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
