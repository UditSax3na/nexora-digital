import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-brand hover:shadow-glow transform hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-elegant",
        outline: "border-2 border-primary/20 bg-background hover:bg-primary/5 text-primary hover:border-primary/40 shadow-elegant",
        secondary: "bg-gradient-secondary text-secondary-foreground hover:shadow-glow transform hover:scale-105",
        ghost: "hover:bg-primary/10 text-primary hover:text-primary-light",
        link: "text-primary underline-offset-4 hover:underline hover:text-secondary",
        hero: "bg-gradient-hero text-primary-foreground shadow-glow hover:shadow-xl transform hover:scale-105 border border-white/20 backdrop-blur-sm animate-pulse-glow",
        premium: "bg-gradient-primary text-primary-foreground shadow-brand hover:shadow-glow transform hover:scale-105 border border-secondary/20",
        accent: "bg-accent text-accent-foreground hover:bg-accent-light shadow-elegant transform hover:scale-105"
      },
      size: {
        default: "h-11 px-6 py-3 text-base",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg font-semibold",
        xl: "h-16 rounded-xl px-10 text-xl font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
