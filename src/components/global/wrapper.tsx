import React from 'react';
import { cn } from "@/lib";

interface Props {
    className?: string;
    children: React.ReactNode;
    id?: string;
}

const Wrapper = ({ className, children, id }: Props) => {
    return (
        <section id={id} className={cn(
            "h-full mx-auto w-full px-4 md:px-8 lg:px-12 xl:px-20",
            className,
        )}>
            {children}
        </section>
    )
};

export default Wrapper
