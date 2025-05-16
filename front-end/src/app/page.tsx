import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to ObstaX</h1>
        <Link
          href="https://www.linkedin.com/company/obstax"
          target="_blank"
          className="mt-4 inline-block text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-200 transition"
        >
          Follow us on LinkedIn!
        </Link>
      </div>
    </main>
  )
}
