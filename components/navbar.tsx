import { useMediaQuery } from "@/hooks";
import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent } from "@/components/sheet";
import Switch from "./switch";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { useTranslate } from "@/app/TranslationProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/menubar";
import { FaChevronDown } from "react-icons/fa6";
import { Button } from "./button";

const navigation = [
  {
    name: "navbar_menu1",
    href: "/about-us/company",
    value: "about-us",
    children: [
      { name: "navbar_menu1_child1", href: "/about-us/company" },
      { name: "navbar_menu1_child2", href: "/about-us/vision-mission" },
      { name: "navbar_menu1_child3", href: "/about-us/milestones" },
      {
        name: "navbar_menu1_child4",
        href: "/about-us/management/commisioner",
        children: [
          {
            name: "navbar_menu1_child4_1",
            href: "/about-us/management/commisioner",
          },
          {
            name: "navbar_menu1_child4_2",
            href: "/about-us/management/director",
          },
        ],
      },
      { name: "navbar_menu1_child5", href: "/about-us/structure" },
      { name: "navbar_menu1_child6", href: "/about-us/awards" },
    ],
  },
  {
    name: "navbar_menu2",
    href: "/our-business/food-supply",
    value: "our-business",
    children: [
      { name: "navbar_menu2_child1", href: "/our-business/food-supply" },
      { name: "navbar_menu2_child2", href: "/our-business/brand-owner" },
      { name: "navbar_menu2_child3", href: "/our-business/franchise" },
    ],
  },
  {
    name: "navbar_menu3",
    href: "/our-group",
    value: "our-group",
    children: [],
  },
  {
    name: "navbar_menu4",
    href: "/corporate-governance/principles",
    value: "corporate-governance",
    align: "center",
    children: [
      { name: "navbar_menu4_child1", href: "/corporate-governance/principles" },
      { name: "navbar_menu4_child2", href: "/corporate-governance/audit" },
      { name: "navbar_menu4_child3", href: "/corporate-governance/risk" },
      {
        name: "navbar_menu4_child4",
        href: "/corporate-governance/relationship",
      },
      {
        name: "navbar_menu4_child5",
        href: "/corporate-governance/nomination-remuneration",
      },
      {
        name: "navbar_menu4_child6",
        href: "/corporate-governance/guidelines/commisioner",
        children: [
          {
            name: "navbar_menu4_child6_1",
            href: "/corporate-governance/guidelines/commissioner",
          },
          {
            name: "navbar_menu4_child6_2",
            href: "/corporate-governance/guidelines/director",
          },
          {
            name: "navbar_menu4_child6_3",
            href: "/corporate-governance/guidelines/audit-committee",
          },
          {
            name: "navbar_menu4_child6_4",
            href: "/corporate-governance/guidelines/nomination-remuneration-committee",
          },
          {
            name: "navbar_menu4_child6_5",
            href: "/corporate-governance/guidelines/internal-audit-charter",
          },
        ],
      },
      { name: "navbar_menu4_child7", href: "/corporate-governance/articles" },
      { name: "navbar_menu4_child8", href: "/corporate-governance/secretary" },
      {
        name: "navbar_menu4_child9",
        href: "/corporate-governance/other/commisioner-director",
        children: [
          {
            name: "navbar_menu4_child9_1",
            href: "/corporate-governance/other/commisioner-director",
          },
          {
            name: "navbar_menu4_child9_2",
            href: "/corporate-governance/other/affiliated",
          },
          {
            name: "navbar_menu4_child9_3",
            href: "/corporate-governance/other/whistleblower",
          },
        ],
      },
      {
        name: "navbar_menu4_child10",
        href: "/corporate-governance/ethics",
      },
      {
        name: "navbar_menu4_child11",
        href: "/corporate-governance/internal-audit",
      },
    ],
  },
  {
    name: "navbar_menu5",
    href: "/investor/shareholder-info",
    value: "investor",
    align: "center",
    children: [
      { name: "navbar_menu5_child1", href: "/investor/shareholder-info" },
      { name: "navbar_menu5_child2", href: "/investor/sustainability-report" },
      { name: "navbar_menu5_child3", href: "/investor/presentation" },
      { name: "navbar_menu5_child4", href: "/investor/financial-report" },
      { name: "navbar_menu5_child5", href: "/investor/prospectus" },
      { name: "navbar_menu5_child6", href: "/investor/analyst" },
      { name: "navbar_menu5_child7", href: "/investor/financial-summary" },
      {
        name: "navbar_menu5_child8",
        href: "/investor/shareholder/general",
        children: [
          {
            name: "navbar_menu5_child8_1",
            href: "/investor/shareholder/general",
          },
          {
            name: "navbar_menu5_child8_2",
            href: "/investor/shareholder/capital",
          },
          {
            name: "navbar_menu5_child8_3",
            href: "/investor/shareholder/dividend",
          },
        ],
      },
      { name: "navbar_menu5_child9", href: "/investor/calendar" },
      { name: "navbar_menu5_child10", href: "/investor/stock" },
      { name: "navbar_menu5_child11", href: "/investor/exposure" },
      { name: "navbar_menu5_child12", href: "/investor/annual-report" },
      { name: "navbar_menu5_child13", href: "/investor/other" },
    ],
  },
  {
    name: "navbar_menu6",
    href: "/media/press",
    value: "media",
    align: "end",
    children: [
      { name: "navbar_menu6_child1", href: "/media/press" },
      { name: "navbar_menu6_child2", href: "/media/blog" },
      { name: "navbar_menu6_child3", href: "/media/csr" },
    ],
  },
];

const MenuNav = () => {
  const { getTranslation } = useTranslate();

  return (
    <Menubar className="flex gap-2 items-center border-0">
      {navigation.map((item) => {
        if (item.children.length === 0) {
          return (
            <MenubarMenu key={item.name}>
              <Link href={item.href}>
                <MenubarTrigger>{getTranslation(item.name)}</MenubarTrigger>
              </Link>
            </MenubarMenu>
          );
        }

        if (item.children.length >= 8) {
          return (
            <MenubarMenu key={item.name}>
              <MenubarTrigger>
                {getTranslation(item.name)}
                <FaChevronDown className="inline-block ml-3 transition-all duration-200" />
              </MenubarTrigger>
              <MenubarContent
                className="!grid !grid-cols-3 w-full max-w-[80vw]"
                align={(item.align as "start" | "center" | "end") || "start"}
                side="bottom"
              >
                {item.children.map((component) => {
                  if (component.children && component.children.length > 0) {
                    return (
                      <MenubarSub key={component.name}>
                        <MenubarSubTrigger className="col-span-1 !font-medium rounded-none text-black hover:!text-white hover:!bg-[linear-gradient(96.86deg,_#F1592A_2.35%,_#FBC54E_98.13%)]">
                          {getTranslation(component.name)}
                        </MenubarSubTrigger>
                        <MenubarSubContent sideOffset={8}>
                          {component.children.map((subComponent) => (
                            <Link
                              href={subComponent.href}
                              key={subComponent.name}
                            >
                              <MenubarItem>
                                {getTranslation(subComponent.name)}
                              </MenubarItem>
                            </Link>
                          ))}
                        </MenubarSubContent>
                      </MenubarSub>
                    );
                  }

                  return (
                    <MenubarItem
                      key={component.name}
                      asChild
                      className="col-span-1"
                    >
                      <Link href={component.href}>
                        {getTranslation(component.name)}
                      </Link>
                    </MenubarItem>
                  );
                })}
              </MenubarContent>
            </MenubarMenu>
          );
        }

        return (
          <MenubarMenu key={item.name}>
            <MenubarTrigger>
              {getTranslation(item.name)}
              <FaChevronDown className="inline-block ml-3 transition-all duration-200" />
            </MenubarTrigger>
            <MenubarContent
              align={(item.align as "start" | "center" | "end") || "start"}
              side="bottom"
            >
              {item.children.map((component) => {
                if (component.children && component.children.length > 0) {
                  return (
                    <MenubarSub key={component.name}>
                      <MenubarSubTrigger>
                        {getTranslation(component.name)}
                      </MenubarSubTrigger>
                      <MenubarSubContent sideOffset={8}>
                        {component.children.map((subComponent) => (
                          <MenubarItem key={subComponent.name}>
                            <Link href={subComponent.href}>
                              {getTranslation(subComponent.name)}
                            </Link>
                          </MenubarItem>
                        ))}
                      </MenubarSubContent>
                    </MenubarSub>
                  );
                }

                return (
                  <MenubarItem key={component.name} asChild>
                    <Link href={component.href}>
                      {getTranslation(component.name)}
                    </Link>
                  </MenubarItem>
                );
              })}
            </MenubarContent>
          </MenubarMenu>
        );
      })}
    </Menubar>
  );
};

const MenuSheet = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) => {
  const { getTranslation } = useTranslate();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-[calc(100vw-100px)] !max-w-[600px] !p-0 !pt-5">
        <div className="flex flex-col gap-3 py-5 overflow-auto max-h-[calc(100dvh-20px)] slim-scrollbar">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="font-bold font-montserrat text-base text-black block py-2 px-6 rounded-none hover:!bg-[linear-gradient(96.86deg,_#F1592A_2.35%,_#FBC54E_98.13%)] hover:text-white"
              >
                {getTranslation(item.name)}
              </Link>
              {item.children.length > 0 && (
                <div className="flex flex-col gap-1">
                  {item.children.map((component) => {
                    if (component.children && component.children.length > 0) {
                      return (
                        <div
                          key={component.name}
                          className="flex flex-col gap-1"
                        >
                          <Link
                            key={component.name}
                            href={component.href}
                            className="text-black font-montserrat text-base py-2 px-6 hover:!bg-[linear-gradient(96.86deg,_#F1592A_2.35%,_#FBC54E_98.13%)] hover:text-white rounded-none flex items-center gap-3"
                          >
                            {getTranslation(component.name)}
                            <FaChevronDown size={12} />
                          </Link>
                          {component.children.map((subComponent) => (
                            <Link
                              key={subComponent.name}
                              href={subComponent.href}
                              className="text-black font-montserrat text-base py-2 px-6 pl-12 hover:!bg-[linear-gradient(96.86deg,_#F1592A_2.35%,_#FBC54E_98.13%)] hover:text-white rounded-none"
                            >
                              {getTranslation(subComponent.name)}
                            </Link>
                          ))}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={component.name}
                        href={component.href}
                        className="text-black font-montserrat text-base py-2 px-6 hover:!bg-[linear-gradient(96.86deg,_#F1592A_2.35%,_#FBC54E_98.13%)] hover:text-white rounded-none"
                      >
                        {getTranslation(component.name)}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const MenuImage = () => {
  return (
    <Link href="/">
      <img
        src="/images/logo/skb_food.webp"
        alt="SKB Food"
        width={900}
        height={600}
        style={{
          width: "200px",
          height: "auto",
        }}
      />
    </Link>
  );
};

const MenuContact = () => {
  const isMediumScreen = !useMediaQuery(1150);

  return (
    <Link
      href="/contact"
      className="flex items-center justify-center text-primary bg-primaryLight p-3 rounded-full gap-2"
    >
      <BsTelephoneFill size={18} />
      {!isMediumScreen && <span className="font-bold text-sm">Contact Us</span>}
    </Link>
  );
};

const MenuHeader = () => {
  const { setLang, lang } = useTranslate();

  return (
    <div
      className={`flex items-center text-white bg-primary gap-2 h-[40px] px-10 justify-between`}
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
        enabled={lang === "en"}
        onChange={(value: boolean) => setLang(value ? "en" : "id")}
      />
    </div>
  );
};

const MenuSwitch = () => {
  const { setLang, lang } = useTranslate();

  return (
    <Switch
      enabled={lang === "en"}
      onChange={(value: boolean) => setLang(value ? "en" : "id")}
      className={"!text-primary"}
      inverted
    />
  );
};

const MenuBurger = ({ setOpen }: { setOpen: () => void }) => {
  return (
    <Button size="icon" className="!h-[42px] !w-[42px]" onClick={setOpen}>
      <GiHamburgerMenu size={20} />
    </Button>
  );
};

export default function Navbar() {
  const isLargeScreen = useMediaQuery(1400);
  const isMediumScreen = !useMediaQuery(1150);
  const isSmallScreen = !useMediaQuery(600);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isSmallScreen) {
    return (
      <header className="h-[140px] z-30 fixed w-full flex flex-col justify-center items-center shadow-md gap-5 bg-white">
        <MenuImage />
        <div className="flex justify-center items-center w-full px-10 gap-5">
          <MenuBurger setOpen={() => setIsMenuOpen(!isMenuOpen)} />
          <MenuContact />
          <MenuSwitch />
        </div>
        <MenuSheet
          open={isMenuOpen}
          setOpen={() => setIsMenuOpen((prev) => !prev)}
        />
      </header>
    );
  }

  if (isMediumScreen) {
    return (
      <header className="h-[100px] z-30 fixed w-full flex justify-center items-center shadow-md gap-5 bg-white">
        <MenuImage />
        <MenuBurger setOpen={() => setIsMenuOpen(!isMenuOpen)} />
        <MenuContact />
        <MenuSwitch />
        <MenuSheet
          open={isMenuOpen}
          setOpen={() => setIsMenuOpen((prev) => !prev)}
        />
      </header>
    );
  }

  if (isLargeScreen) {
    return (
      <header className="z-30 fixed w-full font-montserrat shadow-md bg-white">
        <MenuHeader />
        <div className="h-[120px] flex justify-between items-center w-full px-10 gap-1">
          <MenuImage />
          <MenuNav />
          <MenuContact />
        </div>
      </header>
    );
  }

  return (
    <header className="z-30 fixed w-full font-montserrat shadow-md bg-white">
      <MenuHeader />
      <div className="h-[150px] flex flex-col items-center w-full gap-5 px-10 py-5">
        <div className="flex justify-center items-center w-full px-10 gap-5">
          <MenuImage />
          <MenuContact />
        </div>
        <MenuNav />
      </div>
    </header>
  );
}
