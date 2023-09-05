// Icon de tipo button
/* 
Icon con mensaje o palabra
    * grande 
    * pequeño
    * mediano
*/
// Icono solo
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconVariants = cva(
  " inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-5",
  {
    variants: {
      variant: {
        default: "",
        outline:
          " fill-primary border border-input border-primary bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "w-[30px] h-[30px] p-1",
        lg: "w-[52px]	h-[52px] p-1 fill-primary",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface IconsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconVariants> {
  asChild?: boolean;
}

const Icon = React.forwardRef<HTMLButtonElement, IconsProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        className={cn(iconVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";

export { Icon, iconVariants };
