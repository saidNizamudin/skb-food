"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa6";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, triggerIcon, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center py-4 text-start text-lg font-bold text-black font-segoe transition-all [&[data-state=open]_svg]:rotate-180 [&[data-state=open]]:text-primary",
          className
        )}
        {...props}
      >
        {triggerIcon ? (
          triggerIcon
        ) : (
          <FaChevronDown className="min-h-5 min-w-5 max-h-5 max-w-5 text-primary font-bold transition-transform duration-200 mr-5" />
        )}
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, noPaddingChild, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={`overflow-hidden text-base font-semibold font-segoe text-grey data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${
        noPaddingChild ? "" : "ml-10"
      }`}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
