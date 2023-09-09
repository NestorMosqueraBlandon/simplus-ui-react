import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva("font-grotesk", {
  variants: {
    variant: {
      default: "",
      outline: "underline",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      default: "text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface Props extends VariantProps<typeof paragraphVariants> {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
}

function Paragraph({ children, className, variant, size }: Props) {
  return (
    <p className={cn(paragraphVariants({ variant, size, className }))}>
      {children}
    </p>
  );
}
export default Paragraph;
