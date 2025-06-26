import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-250 disabled:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary-red text-white shadow-sm hover:bg-primary-red-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm",
        accent:
          "bg-primary-yellow text-neutral-black font-bold uppercase tracking-wider shadow-sm hover:bg-primary-yellow-hover hover:scale-105 active:scale-100",
        secondary:
          "bg-transparent text-primary-red border-primary-red hover:bg-primary-red hover:text-white",
        navy:
          "bg-primary-navy text-white shadow-sm hover:bg-primary-navy-hover hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
        outline:
          "bg-transparent text-neutral-black border-neutral-gray-lighter hover:bg-neutral-off-white hover:border-neutral-gray-light",
        ghost:
          "bg-transparent text-neutral-gray-dark hover:bg-neutral-off-white hover:text-neutral-black",
        link: "text-primary-red underline-offset-4 hover:underline p-0 h-auto border-none",
        destructive:
          "bg-semantic-error text-white shadow-sm hover:bg-semantic-error/90 focus-visible:ring-semantic-error",
      },
      size: {
        default: "h-12 px-6 text-base",
        sm: "h-10 px-4 text-sm gap-1.5",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
        icon: "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
