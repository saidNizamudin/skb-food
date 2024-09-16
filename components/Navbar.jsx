"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Fragment } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useTranslate, useMediaQuery } from "@/hooks";
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
import { Sheet, SheetContent } from "@/components/Sheet";

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
  const isLargeScreen = useMediaQuery(1245);
  const isOneRow = useMediaQuery(1080);
  const isNotBurger = useMediaQuery(750);
  const isSwitchOneRow = useMediaQuery(550);
  const isSmallScreen = useMediaQuery(450);
  const isVerySmallScreen = useMediaQuery(400);

  return (
    <header className="z-10 fixed w-full font-montserrat shadow-md">
      {/* Header Section */}
      <div
        className={`flex items-center text-white bg-primary gap-2 ${
          isSwitchOneRow
            ? "h-[40px] px-10 justify-between"
            : isVerySmallScreen
            ? "h-[100px] px-5 justify-between"
            : "h-[100px] flex-col px-5 justify-center"
        }`}
      >
        <div
          className={`flex ${
            isSwitchOneRow
              ? "flex-row items-center gap-5"
              : isVerySmallScreen
              ? "flex-col gap-2"
              : "flex-col gap-2 self-start"
          }`}
        >
          <span className="text-xs font-medium leading-none flex items-center">
            <BsTelephone className="mr-2" size={18} />
            (021) 7463 7390
          </span>
          <span className="text-xs font-medium leading-none flex items-center">
            <MdOutlineMail className="mr-2" size={18} />
            corporatesecretary@skbfood.id
          </span>
        </div>
        <Switch
          className={!isVerySmallScreen && "self-end"}
          enabled={lang === "en"}
          onChange={(value) => setLang(value ? "en" : "id")}
        />
      </div>

      <div
        className={`bg-white flex items-center ${
          isOneRow
            ? "h-[120px] px-10 gap-1"
            : isNotBurger
            ? "h-[150px] flex-col p-10 justify-center gap-5"
            : isSmallScreen
            ? "h-[100px] px-10 justify-center gap-5"
            : "h-[120px] px-5 justify-start"
        }`}
      >
        {!isOneRow && (
          <div
            className={`flex ${
              isSmallScreen
                ? "items-center gap-5"
                : "flex-col items-start gap-3"
            }`}
          >
            <Link
              href="/"
              className={`text-2xl font-bold font-bebas ${
                isSmallScreen && "mr-auto"
              }`}
            >
              <Image
                src="/images/logo/skb_food.png"
                alt="SKB Food"
                width={900}
                height={600}
                style={{
                  width: "200px",
                  height: "auto",
                  marginRight: isSmallScreen ? 24 : 0,
                }}
              />
            </Link>
            <div
              className={`flex items-center gap-5 h-max ${
                isSmallScreen ? "ml-auto" : "justify-center"
              }`}
            >
              {!isNotBurger && (
                <Button
                  size="icon"
                  className="!h-[42px] !w-[42px]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <GiHamburgerMenu size={20} />
                </Button>
              )}
              <div className="flex items-center justify-center bg-secondaryLight p-3 rounded-full">
                <SlMagnifier size={18} />
              </div>
              <div className="flex items-center justify-center text-primary bg-primaryLight p-3 rounded-full gap-2">
                <BsTelephoneFill size={18} />
                {isLargeScreen && (
                  <span className="font-bold text-sm">
                    {getTranslation("common_contactUs")}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        {isOneRow && (
          <Link href="/" className="text-2xl font-bold font-bebas mr-auto">
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
        )}
        {isNotBurger && (
          <div className="flex items-center h-max">
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
        )}
        {isOneRow && (
          <div className="flex items-center gap-5 ml-auto h-max">
            <div className="flex items-center justify-center bg-secondaryLight p-3 rounded-full">
              <SlMagnifier size={18} />
            </div>
            <div className="flex items-center justify-center text-primary bg-primaryLight p-3 rounded-full gap-2">
              <BsTelephoneFill size={18} />
              {isLargeScreen && (
                <span className="font-bold text-sm">
                  {getTranslation("common_contactUs")}
                </span>
              )}
            </div>
          </div>
        )}
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
