import Link from 'next/link';
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    subItems?: { href: string; label: string }[];
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, subItems }) => {
    return (
        <NavigationMenuItem>
            {subItems ? (
                <>
                    <NavigationMenuTrigger>{children}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {subItems.map((item) => (
                                <li key={item.href}>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href={item.href}
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <div className="text-sm font-medium leading-none">{item.label}</div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </>
            ) : (
                <Link href={href}>
                    {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                    }
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {children}
                    </NavigationMenuLink>
                </Link>
            )}
        </NavigationMenuItem>
    );
};

export default NavLink;
