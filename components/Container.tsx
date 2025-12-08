import React from 'react'
import { cn } from "@/lib/utils"

interface Props {
    className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, className }: React.PropsWithChildren<Props>) => {
    return (
        <div className={cn("px-5 w-full max-w-7xl mx-auto", className)}>{children}</div>
    )
}

export default Container