import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import product from '../prod.png'

export default function Home() {
  return (
    <main className="flex max-w-5xl flex-col px-8 justify-self-center ">

      {/* Hero Section */}
      <section className="sm:flex min-h-[calc(100vh-64px)] sm:space-x-16 py-8">
        <div className="flex flex-col flex-1 justify-center">
          <h1 className="scroll-m-20 text-4xl font-bold lg:text-6xl">ObstaX</h1>
          <h1 className="scroll-m-20 text-3xl font-light lg:text-4xl">Pendant and Wristbands</h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">ObstaX transforms the way visually impaired individuals experience the world with AI-powered pendant and a wristband, providing real-time navigation and obstacle detection for greater freedom.</p>

          <Button asChild className="hover:bg-secondary hover:text-foreground [&:not(:first-child)]:mt-6">
            <Link href="/product/pre-order">
              Pre-Order Now
            </Link>
          </Button>
        </div>

        <div className="flex flex-col flex-1 justify-center mt-12 sm:mt-0">
          <Image
            className='flex justify-start'
            src={product}
            width={400}
            height={400}
            alt="ObstaX SmartGlasses"
          />
        </div>

      </section>

      <section className="flex justify-center">
        <h1 className="text-4xl font-bold">Welcom22 to ObstaX</h1>
      </section>
    </main>
  )
}