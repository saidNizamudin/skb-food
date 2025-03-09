import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = ({
  variant = "default",
  size = "default",
  weight = "default",
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "white";
  size?: "default" | "sm" | "lg" | "icon";
  weight?: "default" | "bold" | "light";
}) => {
  const variants = {
    default: "bg-primary text-white shadow hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
    outline:
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-black shadow-sm hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    white: "bg-white text-black shadow-sm hover:bg-gray-100",
  };

  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 text-xs",
    lg: "h-10 px-8",
    icon: "h-9 w-9",
  };

  const weights = {
    default: "font-extrabold",
    bold: "font-bold",
    light: "font-light",
  };

  return `
    inline-flex items-center w-max justify-center whitespace-nowrap rounded-full text-base 
    font-montserrat transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 
    ${variants[variant]} ${sizes[size]} ${weights[weight]}
  `;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, weight, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, weight }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
