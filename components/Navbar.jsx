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
      { name: "navbar_menu1_child1", href: "/about-us/company" },
      { name: "navbar_menu1_child2", href: "/about-us/vision-mission" },
      { name: "navbar_menu1_child3", href: "/about-us/management" },
      { name: "navbar_menu1_child4", href: "/about-us/structure" },
    ],
  },
  {
    name: "navbar_menu2",
    href: "/",
    children: [
      { name: "navbar_menu2_child1", href: "/our-business/food-supply" },
      {
        name: "navbar_menu2_child2",
        href: "/our-business/brand-owner",
      },
    ],
  },
  {
    name: "navbar_menu3",
    href: "/our-group",
  },
  {
    name: "navbar_menu4",
    href: "/",
    children: [
      { name: "navbar_menu4_child1", href: "/investor/financial" },
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
      { name: "navbar_menu5_child1", href: "/media/press" },
      { name: "navbar_menu5_child2", href: "/media/blog" },
      { name: "navbar_menu5_child3", href: "/media/csr" },
    ],
  },
];

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-primaryLight hover:text-primary focus:bg-accent focus:text-accent-foreground no-transition",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none no-transition">
              {title}
            </div>
          </Link>
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
  const isLargeScreen = useMediaQuery(1300);
  const isOneRow = useMediaQuery(1080);
  const isNotBurger = useMediaQuery(750);
  const isSmallScreen = useMediaQuery(600);
  const isVerySmallScreen = useMediaQuery(400);

  return (
    <header className="z-10 fixed w-full font-montserrat shadow-md">
      {/* Header Section */}
      <div
        className={`flex items-center text-white bg-primary gap-2 ${
          isNotBurger ? "h-[40px] px-10 justify-between" : "hidden"
        }`}
      >
        <div className={`flex flex-row items-center gap-5`}>
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
                : "h-[140px] px-5 justify-center gap-5"
        }`}
      >
        {!isOneRow && (
          <div
            className={`flex ${
              isSmallScreen
                ? "items-center gap-5"
                : "flex-col justify-center items-center gap-5"
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
              <Link
                href="/contact"
                className="flex items-center justify-center text-primary bg-primaryLight p-3 rounded-full gap-2"
              >
                <BsTelephoneFill size={18} />
                {isLargeScreen && (
                  <span className="font-bold text-sm">
                    {getTranslation("common_contactUs")}
                  </span>
                )}
              </Link>
              {!isNotBurger && (
                <Switch
                  className={"!text-primary"}
                  enabled={lang === "en"}
                  onChange={(value) => setLang(value ? "en" : "id")}
                  inverted
                />
              )}
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
          <div className="flex items-center h-max gap-2">
            {navigation.map((item, index) => (
              <NavigationMenu key={index}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    {item.children ? (
                      <NavigationMenuTrigger haveChild={item.children}>
                        {getTranslation(item.name)}
                      </NavigationMenuTrigger>
                    ) : (
                      <Link href={item.href}>
                        <NavigationMenuTrigger haveChild={item.children}>
                          {getTranslation(item.name)}
                        </NavigationMenuTrigger>
                      </Link>
                    )}
                    {item.children && (
                      <NavigationMenuContent>
                        <ul className="flex flex-col w-[250px] gap-1 py-1">
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
            <Link
              href="/contact"
              className="flex items-center justify-center text-primary bg-primaryLight p-3 rounded-full gap-2"
            >
              <BsTelephoneFill size={18} />
              {isLargeScreen && (
                <span className="font-bold text-sm">
                  {getTranslation("common_contactUs")}
                </span>
              )}
            </Link>
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
                  className="font-bold font-montserrat text-base text-black block py-2 px-6 rounded-md hover:bg-primaryLight hover:text-primary"
                >
                  {getTranslation(item.name)}
                </Link>
                {item.children && (
                  <div className="flex flex-col gap-1">
                    {item.children.map((component) => (
                      <Link
                        href={component.href}
                        key={component.name}
                        className="text-black font-montserrat text-base py-2 px-6 hover:bg-primaryLight hover:text-primary rounded-md"
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
