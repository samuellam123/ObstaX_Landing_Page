import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-slate-300 w-full px-4 py-4">
            <div className="flex justify-between items-center max-w-2xl mx-auto w-full">

                <Link href="/" className="text-xl font-bold">
                    ObstaX
                </Link>

                <div className="flex items-center space-x-6">
                    <Link href="/product" className="text-sm font-medium">
                        How it works
                    </Link>

                    <Link href="/about" className="text-sm font-medium">
                        Who are we
                    </Link>

                    <Button asChild className="primary">
                        <Link href="/product/pre-order">
                            Pre-Order
                        </Link>
                    </Button>
                </div>

            </div>
        </header>
    )
}
