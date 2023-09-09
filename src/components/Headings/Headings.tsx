import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-grotesk", {
  variants: {
    size: {
      large: "text-[64px] font-groteskBold",
      medium: "text-5xl	font-groteskBold",
      default: "text-2xl font-groteskBold",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface Props extends VariantProps<typeof headingVariants> {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
}

function Heading({ children, className, size }: Props) {
  if (size === "large") {
    return (
      <h1 className={cn(headingVariants({ size, className }))}>{children}</h1>
    );
  }
  if (size === "medium") {
    return (
      <h2 className={cn(headingVariants({ size, className }))}>{children}</h2>
    );
  }

  return (
    <h3 className={cn(headingVariants({ size, className }))}>{children}</h3>
  );
}
export default Heading;
