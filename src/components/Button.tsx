import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cn } from "../lib/util";

// Customized button variations
const buttonVariants = cva(
    `px-3 py-2 rounded-xl transition-all hover:ring-2 ring-indigo-300 hover:text-white`,
    {
        variants: {
            variant: {
                primary: "bg-blue-400",
                danger: "bg-red-500",
                alert: "bg-yellow-500",
            },
            size: {
                small: "py-2 px-4",
                large: "text-xl py-3 px-6",
            },
        },
        defaultVariants: {
            size: "small",
            variant: "primary",
        },
    }
);

// It is our ButtonProps interafce it extends ButtonHTMLAttributes of HTMLButtonElement interface
// Also extends from class-variance-authority lastly we passed our forwarded Reference type
export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    ref?: React.Ref<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = forwardRef(
    ({ size, variant, className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                className={cn(buttonVariants({ className, variant, size }))}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;
