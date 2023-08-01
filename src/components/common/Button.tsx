import clsx from "clsx";
import { ImSpinner9 } from "react-icons/im";

interface BsProps {
  solid: string;
  outline: string;
}
interface VsProps {
  solid: any;
  outline: any;
}
interface SsProps {
  sm: string;
  lg: string;
  md: string;
}
interface Iprops {
  variant?: "solid" | "outline";
  color?: "primary" | "secondary";
  className?: string;
  href?: string;
  children: string;
  loaderClass?: string;
  size?: "sm" | "md" | "lg";
  type?: any;
  onClick?: any;
  disabled?: boolean;
  isLoading?: boolean;
}

const baseStyles: BsProps = {
  solid:
    "inline-flex justify-center font-semibold rounded-md shadow-sm disabled:cursor-not-allowed",
  outline:
    "inline-flex justify-center font-semibold border rounded-md disabled:cursor-not-allowed",
};

const variantStyles: VsProps = {
  solid: {
    primary:
      "border border-primary bg-primary text-white hover:bg-primary/80 active:bg-primary/90 active:text-white/80 disabled:opacity-30 disabled:hover:bg-primary",
    secondary:
 " border border-secondary bg-secondary text-white hover:bg-secondary/80 active:bg-secondary/90 active:text-white/80 disabled:opacity-30 disabled:hover:bg-secondary",
  },
  outline: {
    primary:
      "border-primary text-primary hover:border-primary/70 hover:bg-primary/10 active:border-primary/20 active:bg-primary/10 active:text-primary/70 disabled:opacity-40 disabled:hover:border-primary disabled:hover:bg-transparent",
    secondary:
      "border-secondary text-secondary hover:border-secondary/70 hover:bg-secondary/10 active:border-secondary/20 active:bg-secondary/10 active:text-secondary/70 disabled:opacity-40 disabled:hover:border-secondary disabled:hover:bg-transparent",
  },
};

const sizeStyles: SsProps = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-1.5 text-base",
  lg: "py-2 px-7 text-lg",
};

export function Button({
  variant = "solid",
  color = "primary",
  size = "md",
  className,
  href,
  type,
  disabled,
  isLoading,
  children,
  loaderClass,
  ...props
}: Iprops) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        sizeStyles[size],
        className,
        isLoading &&
          "relative !cursor-wait !text-transparent hover:!text-transparent"
      )}
      type={type ? type : "button"}
      disabled={disabled ? true : false}
      {...props}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <ImSpinner9 className={clsx("animate-spin text-sm", loaderClass)} />
        </div>
      )}
      {children}
    </button>
  );
}

