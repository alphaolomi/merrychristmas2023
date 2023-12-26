'use client'
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreesIcon } from "./TreesIcon"
import ConfettiComponent from "./ConfettiComponent"

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-red-50" data-testid="page">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-red-600 text-white">
        <Link className="flex items-center justify-center" href="#">
          <TreesIcon className="h-6 w-6" />
          <span className="sr-only">Alpha Olomi</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Events
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link> */}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-red-600 text-white text-center">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4"> 🎄 Merry Christmas
              <span className="text-4xl md:text-6xl font-bold mb-4"> & <br /></span>
              🎉 Happy New Year</h1>
            <p className="text-lg md:text-xl max-w-prose mx-auto">
              Have a wonderful Christmas and a Happy New Year! May your Christmas sparkle with moments of love, laughter and goodwill, And may the year ahead be full of contentment and joy.
            </p>
            {/* Wave Button */}
            <ConfettiComponent />
            {/* end wave button */}
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Christmas Eve Party</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Join us for a night of celebration and joy on Christmas Eve.</p>
                  <Badge className="mt-4 bg-red-600 text-white">December 24</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">New Year's Fireworks</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Celebrate the New Year with a spectacular fireworks display.</p>
                  <Badge className="mt-4 bg-red-600 text-white">January 1</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Winter Wonderland</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Experience the magic of winter with fun outdoor activities.</p>
                  <Badge className="mt-4 bg-red-600 text-white">All December</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-red-600 text-white">
        <p className="text-xs">Made with 💚 by <a className="hover:underline" href="https://alphaolomi.com">Alpha Olomi</a> </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
