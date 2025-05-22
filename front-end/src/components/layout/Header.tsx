import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-slate-300 w-full px-16 py-4">
            <div className="flex justify-between items-center max-w-5xl mx-auto w-full">

                <Link href="/" className="text-xl font-bold">
                    ObstaX
                </Link>

                <div className="flex items-center space-x-6">
                    <Link href="/product" className="nav-link hidden sm:flex">
                        How it works
                    </Link>

                    <Link href="/about" className="nav-link hidden sm:flex">
                        Who are we
                    </Link>

                    <Button asChild className="hover:bg-secondary hover:text-foreground">
                        <Link href="/product/pre-order">
                            Pre-Order
                        </Link>
                    </Button>

                    <div className="sm:hidden">
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40 justify-end" align="end" >
                                <DropdownMenuItem asChild className="cursor-pointer">
                                    <Link href="/product">How it works</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="cursor-pointer">
                                    <Link href="/about">Who are we</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}
