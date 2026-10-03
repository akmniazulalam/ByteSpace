import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: String;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
    type="submit"
      className={cn(
        "py-3 px-6 bg-primary hover:bg-[#acca24] transition-all duration-300 ease-in-out rounded-full font-medium text-[18px] text-textColor cursor-pointer",
        className,
      )}>
      {children}
    </button>
  );
};

export default Button;
