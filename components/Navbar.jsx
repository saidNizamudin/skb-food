"use client";

import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Fragment } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useTranslate } from "@/hooks";
import useStore from "@/app/store";

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

const Navbar = () => {
  const { getTranslation } = useTranslate();
  const { lang } = useStore((state) => ({ lang: state.lang }));
  const { setLang } = useStore();

  return (
    <header className="z-10 fixed w-full font-montserrat">
      {/* Header Section */}
      <div className="h-[40px] flex items-center text-white gap-6 bg-primary px-5">
        <span className="text-xs font-medium leading-none flex items-center">
          <BsTelephone className="mr-2" size={18} />
          (021) 7463 7390
        </span>
        <span className="text-xs font-medium leading-none flex items-center">
          <MdOutlineMail className="mr-2" size={18} />
          corporatesecretary@skbfood.id
        </span>
        <div className="flex items-center text-xs leading-none font-medium gap-2 ml-auto">
          <div
            className={`cursor-pointer ${lang === "id" && "font-bold"}`}
            onClick={() => setLang("id")}
          >
            ID
          </div>
          <hr className="w-0.5 h-4 bg-white" />
          <div
            className={`cursor-pointer ${lang === "en" && "font-bold"}`}
            onClick={() => setLang("en")}
          >
            EN
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="h-[120px] bg-white flex items-center justify-between flex-wrap gap-6 px-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-bebas">
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

        {/* Links */}
        <div className="flex-1 flex items-center gap-5">
          {navigation.map((item, index) => (
            <Popover key={index} className="relative">
              {/* Popover.Button instead of PopoverButton */}
              <PopoverButton className="flex items-center gap-2 text-sm font-bold text-black outline-none text-nowrap">
                {getTranslation(item.name)}
                {item?.children && <FaChevronDown />}
              </PopoverButton>

              {item?.children && (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {/* Popover.Panel instead of PopoverPanel */}
                  <PopoverPanel className="absolute z-10 mt-2 min-w-48 w-max bg-white shadow-lg border border-gray-200 rounded-xl padding-3">
                    <div className="p-2">
                      {item.children &&
                        item.children.map((child, index) => (
                          <Link
                            key={index}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-black rounded-md hover:bg-gray-300"
                          >
                            {getTranslation(child.name)}
                          </Link>
                        ))}
                    </div>
                  </PopoverPanel>
                </Transition>
              )}
            </Popover>
          ))}
        </div>

        {/* Button */}
        <div className="flex items-center gap-5">
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
      </nav>
    </header>
  );
};

export default Navbar;
