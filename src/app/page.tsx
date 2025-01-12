import Image from 'next/image'
import Link from 'next/link'
import { ImageCarousel } from '@/components/image-carousel'
import { Navigation } from '@/components/navigation'
import { Play } from 'lucide-react'

export default function Home() {
  return (
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-[600px]">
          {/*<Image*/}
          {/*    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foundation%205K%20Homepage-4MmxT6zTPkIWQvJ94yZsIh1EH2PozL.png"*/}
          {/*    alt="Runners on a street during race"*/}
          {/*    fill*/}
          {/*    className="object-cover brightness-50"*/}
          {/*    priority*/}
          {/*/>*/}
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <p className="text-white text-lg mb-2">FOUNDATION 5K</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Step by Step, Let&#39;s Make A Difference
            </h1>
            <p className="text-white mb-6">
              Sign up today to race a 5K with Foundation Christian Academy
            </p>
            <div className="flex gap-4">
              <button>
                Sign Up Today
              </button>
              <button
                  className="bg-transparent text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Video
              </button>
            </div>
          </div>
        </section>

        {/* Who Are We Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Who Are We</h2>
              <p className="text-gray-700 mb-6">
                We are a Christ-centered educational institution dedicated to nurturing the academic and spiritual growth of students from Kindergarten through 6th grade. Our mission is to provide a supportive and inspiring environment where young minds can flourish, rooted in Christian values and biblical truth. At Foundation Christian Academy, we believe in the vital importance of parent involvement and partnership, working together to equip students with the knowledge, character, and skills needed to impact their communities and the world for Christ.
              </p>
              <button>Sign Up Today</button>
            </div>
            <div className="relative h-[400px]">
              <ImageCarousel />
            </div>
          </div>
        </section>

        {/* What You Need to Know Section */}
        <section className="bg-[#8B0000] text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You Need to Know</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Join us on for the FOUNDATION 5K, starting at 10:30 AM at the McLean County Pony League Baseball Fields, 3707 Ireland Grove Road in Bloomington and finishing at Victory Church, 18180 US Highway 150, Bloomington. Pack-in begins at 9:30 AM, and all participants will receive a free T-shirt with their $30 registration fee. Proceeds from the race will benefit Foundation Christian Academy, a brand new Christian school in Bloomington-Normal.
                </p>
              </div>
              <div>
                <p>
                  Learn more about the school at FoundationCA.org. We look forward to seeing you there!
                </p>
                <div className="mt-4">
                  <p><strong>Starting Location:</strong> McLean County Pony League Baseball Fields, 3707 Ireland Grove Road, Bloomington, IL 61704</p>
                  <p><strong>Ending Location:</strong> Victory Church, 18180 US Highway 150, Bloomington, IL 61705</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Merchandise Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                  src="/placeholder.svg"
                  alt="5K Foundation T-shirt"
                  fill
                  className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Grab Some Merch</h2>
              <p className="text-gray-700 mb-6">
                Rep your favorite school while out there running. Show off how great you look!
              </p>
              <button>Purchase Today</button>
            </div>
          </div>
        </section>

        {/* Race Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-12">Race Information</h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.453261580542!2d-88.9544!3d40.4784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40.4784,-88.9544!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Place</h3>
                <p>Victory Church</p>
                <p>18180 US Highway 150</p>
                <p>Bloomington, IL 61705</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Price</h3>
                <p>$30 Race Fee + $2.89 Sign up fee</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Start Time</h3>
                <p>10:30 AM CDT</p>
                <p>March 29, 2023 @ 10:30 AM CDT</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                <p>Registration ends -</p>
                <button className="mt-4">Sign Up Today</button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>race@foundationca.org</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gray-300">FCA Website</Link>
              <Link href="#" className="hover:text-gray-300">Contact Us</Link>
            </div>
          </div>
        </footer>
      </div>
  )
}

