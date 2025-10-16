import * as React from "react";
import { cn } from "./utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant="solid", ...props }, ref) => {
    const base = "px-4 py-2 rounded-2xl text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
    const solid = "bg-[#143C8C] text-white hover:bg-[#0f2e6b] focus:ring-[#143C8C]";
    const outline = "border border-slate-300 text-slate-800 hover:bg-slate-50 focus:ring-slate-300";
    const ghost = "text-slate-800 hover:bg-slate-100";
    const style = variant==="solid" ? solid : variant==="outline" ? outline : ghost;
    return <button ref={ref} className={cn(base, style, className)} {...props} />;
  }
);
Button.displayName = "Button";
