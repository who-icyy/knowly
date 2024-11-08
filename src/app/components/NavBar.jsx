import Link from "next/link"
import { AiFillOpenAI } from "react-icons/ai";
import { SiPython } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Terminal } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export default function NavBar() {
    return (
        <div>
            <nav>
                <div className="px-14 py-10 flex h-16 justify-between items-center">
                    <div className="text-6xl">
                        <AiFillOpenAI />
                    </div>
                    <div className="flex">
                        <ul className="flex gap-5 text-xl">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <AiFillOpenAI className="h-14 w-14" />
                                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                                Knowly
                                                            </div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Start learning programming with A.I Powered classes.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                                {/* List Items */}
                                                {/* Item 1 */}
                                                <Alert>
                                                    <SiPython className="h-4 w-4" />
                                                    <AlertTitle>Python</AlertTitle>
                                                    <AlertDescription>
                                                        Getting Started with Python.
                                                    </AlertDescription>
                                                </Alert>
                                                {/* Item 2 */}
                                                <Alert>
                                                    <RiJavascriptFill className="h-4 w-4" />
                                                    <AlertTitle>Javascript</AlertTitle>
                                                    <AlertDescription>
                                                        Getting Started with Javascript.
                                                    </AlertDescription>
                                                </Alert>
                                                {/* Item 3 */}
                                                <Alert>
                                                    <TbBrandCpp className="h-4 w-4" />
                                                    <AlertTitle>C++ Programming</AlertTitle>
                                                    <AlertDescription>
                                                        Getting Started with C++.
                                                    </AlertDescription>
                                                </Alert>

                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <Link href="/docs" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Homepage
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/docs" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Source Code
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link href="/docs" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Documentation
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
