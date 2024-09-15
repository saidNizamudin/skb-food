"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Fragment } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useTranslate } from "@/hooks";
import useStore from "@/app/store";
import { Button, Switch } from "@/components";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/NavMenu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/Sheet";

import { GiHamburgerMenu } from "react-icons/gi";

const navigation = [
  {
    name: "navbar_menu1",
    href: "/",
    children: [
      { name: "navbar_menu1_child1", href: "/" },
      { name: "navbar_menu1_child2", href: "/" },
    ],
  },
  {
    name: "navbar_menu2",
    href: "/",
    children: [
      { name: "navbar_menu2_child1", href: "/" },
      { name: "navbar_menu2_child2", href: "/" },
    ],
  },
  {
    name: "navbar_menu3",
    href: "/",
  },
  {
    name: "navbar_menu4",
    href: "/",
    children: [
      { name: "navbar_menu4_child1", href: "/" },
      { name: "navbar_menu4_child2", href: "/" },
      { name: "navbar_menu4_child3", href: "/" },
      { name: "navbar_menu4_child4", href: "/" },
      { name: "navbar_menu4_child5", href: "/" },
    ],
  },
  {
    name: "navbar_menu5",
    href: "/",
    children: [
      { name: "navbar_menu5_child1", href: "/" },
      { name: "navbar_menu5_child2", href: "/" },
      { name: "navbar_menu5_child3", href: "/" },
    ],
  },
];

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/30 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

const Navbar = () => {
  const { getTranslation } = useTranslate();
  const { lang } = useStore((state) => ({ lang: state.lang }));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setLang } = useStore();

  return (
    <header className="z-10 fixed w-full font-montserrat shadow-md">
      {/* Header Section */}
      <div className="h-[40px] flex items-center text-white gap-6 bg-primary px-10">
        <span className="text-xs font-medium leading-none flex items-center max-[580px]:hidden">
          <BsTelephone className="mr-2" size={18} />
          (021) 7463 7390
        </span>
        <span className="text-xs font-medium leading-none flex items-center max-[580px]:hidden">
          <MdOutlineMail className="mr-2" size={18} />
          corporatesecretary@skbfood.id
        </span>
        <Switch
          className="ml-auto"
          enabled={lang === "en"}
          onChange={(value) => setLang(value ? "en" : "id")}
        />
      </div>

      {/* Navbar Section */}
      <div className="h-[120px] bg-white flex items-center gap-1 px-10 max-[1010px]:justify-center max-[1010px]:flex-col-reverse">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold font-bebas mr-auto max-[1280px]:hidden"
        >
          <Image
            src="/images/logo/skb_food.png"
            alt="SKB Food"
            width={900}
            height={600}
            style={{
              width: "200px",
              height: "auto",
              marginRight: 24,
            }}
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center h-max max-[750px]:hidden">
          {navigation.map((item, index) => (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger haveChild={item.children}>
                    {getTranslation(item.name)}
                  </NavigationMenuTrigger>
                  {item.children && (
                    <NavigationMenuContent>
                      <ul className="flex flex-col w-max min-w-[150px] max-w-[250px] gap-1 p-1">
                        {item.children.map((component) => (
                          <ListItem
                            key={component.name}
                            title={getTranslation(component.name)}
                            href={component.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>

        {/* Button */}
        <div className="flex items-center gap-5 ml-auto max-[1010px]:ml-0 h-max">
          <Button
            size="icon"
            className="min-[750px]:hidden !h-[42px] !w-[42px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu size={20} />
          </Button>
          <div className="flex items-center justify-center bg-secondaryLight p-3 rounded-full">
            <SlMagnifier size={18} />
          </div>
          <div className="flex items-center justify-center text-primary bg-primaryLight py-3 px-5 rounded-full gap-2">
            <BsTelephoneFill size={14} />
            <span className="font-bold text-sm">
              {getTranslation("common_contactUs")}
            </span>
          </div>
        </div>
      </div>
      <Sheet open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
        <SheetContent className="w-[calc(100vw-100px)] !max-w-[600px]">
          <div className="flex flex-col gap-3 py-5">
            {navigation.map((item, index) => (
              <div key={index}>
                <Link
                  key={index}
                  href={item.href}
                  className="font-bold font-montserrat text-base text-black block p-1 rounded-md hover:bg-black/30"
                >
                  {getTranslation(item.name)}
                </Link>
                {item.children && (
                  <div className="flex flex-col gap-1">
                    {item.children.map((component) => (
                      <Link
                        href={component.href}
                        key={component.name}
                        className="text-black font-montserrat text-base p-1 hover:bg-black/30 rounded-md"
                      >
                        {getTranslation(component.name)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
