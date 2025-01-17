import Image from 'next/image'
import Link from 'next/link'
import { ImageCarousel } from '@/components/image-carousel'
import { Navigation } from '@/components/navigation'
import { Play } from 'lucide-react'

import Hero from '../../public/assets/hero section.jpg'
import TShirt from '../../public/assets/tshirt.png'
import Button from "@/components/ui/Button";

export default function Home() {
  return (
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-screen">
          <Image
              src={Hero.src}
              alt="Runners on a street during race"
              fill
              className="object-cover brightness-50"
              priority
          />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center md:text-left">
            <p className="text-white text-lg mb-2">FOUNDATION 5K</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Step by Step, Let&#39;s Make A Difference
            </h1>
            <p className="text-white mb-6">
              Sign up today to race a 5K with Foundation Christian Academy
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button>
                Sign Up Today
              </Button>
            </div>
          </div>
        </section>
        <div className="relative">
        {/* Who Are We Section */}
        <section className="py-16 px-4 sm:px-6 md:px-0 relative md:bottom-24">
          <div className=" grid md:grid-cols-6 gap-12 items-center">
            <div className="bg-white py-6 md:py-8 lg:py-24 px-6 sm:px-24 xl:px-48 md:col-span-4">
              <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Who Are We</h2>
              <p className="text-gray-700 mb-6">
                We are a Christ-centered educational institution dedicated to nurturing the academic and spiritual growth of students from Kindergarten through 6th grade. Our mission is to provide a supportive and inspiring environment where young minds can flourish, rooted in Christian values and biblical truth. At Foundation Christian Academy, we believe in the vital importance of parent involvement and partnership, working together to equip students with the knowledge, character, and skills needed to impact their communities and the world for Christ.
              </p>
              <Button>Sign Up Today</Button>
            </div>
            <div className="relative md:-left-24 bottom-12 h-[500px] md:col-span-2 md:right-12">
              <ImageCarousel />
            </div>
          </div>
        </section>

        {/* What You Need to Know Section */}
        <section className="bg-[#8B0000] text-white py-16 px-4 sm:px-6 lg:px-8 md:py-52 relative md:absolute md:top-72 -z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You Need to Know</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Get ready to run for a great cause at the FOUNDATION 5K! Lace up your sneakers and join us on March 29th, 2025 for a fun, family-friendly race to support Foundation Christian Academy. The race kicks off at 10:30 AM at the McLean County Pony League Baseball Fields (3707 Ireland Grove Road, Bloomington, IL). We’ll race west on Ireland Grove Road and then head east on Abraham Road, finishing at Victory Church, the exciting new home of Foundation Christian Academy!
                </p>
                <p>
                  Learn more about the school at FoundationCA.org. We look forward to seeing you there!
                </p>
              </div>
              <div>
                <div className="mt-4">
                  <p>Check-in begins at 9:30 AM at the Pony League Fields. The registration fee is just $30 and includes a free Foundation 5K T-shirt to commemorate your participation. All proceeds from the event will directly benefit scholarships for students and support our dedicated staff, helping us continue to provide a vibrant and enriching learning environment for all our students.
                    We can&#39;t wait to see you there! Let&#39;s make every step count for our school community!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Merchandise Section */}
        <section className="md:mt-72 lg:mt-52">
          <div className="flex flex-col-reverse md:grid md:grid-cols-6 gap-12 items-center">
            <div className="relative h-[400px] md:col-span-2 md:left-1/2 w-full">
              <Image
                  src={TShirt.src}
                  alt="5K Foundation T-shirt"
                  fill
                  className="object-contain"
              />
            </div>
            <div className="bg-white pt-24 pb-6 px-6 md:px-24 lg:px-52 md:col-span-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Free T-Shirt When You Register Today!</h2>
              <p className="text-gray-700 mb-6">
                With your registration today, you will receive a free Foundation 5K T-Shirt. Check it out!
              </p>
              <div className="flex items-center justify-center md:justify-start">

              <Button>Register Today</Button>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* Race Information Section */}
        <section id="race-info" className="py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-12">Race Information</h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-6 order-last md:order-1">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.0640338763164!2d-88.92094062398834!3d40.42958097143765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b650a3579a735%3A0x348ede996bae7a51!2sVictory%20Church!5e0!3m2!1sen!2sus!4v1736704763749!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 md:order-2">
              <div>
                <h3 className="text-xl font-bold mb-4">Place</h3>
                <p>Victory Church</p>
                <p>18180 US Highway 150</p>
                <p>Bloomington, IL 61705</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Price</h3>
                <p><span className="font-bold">$30</span> Race Fee + <span className="font-bold">$2.89</span> Sign up fee</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Start Time</h3>
                <p>10:30 AM CDT</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Registration</h3>
                <p>Registration ends -</p>
                <p className="font-bold italic">March 29, 2025 @ 10:30 AM CDT</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Race Insurance</h3>
                <p>This event offers:</p>
                <p className="font-bold italic">RegShield Race Event</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">What are you waiting for?</h3>
                <Button>Sign Up Today</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#161616] text-white/50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <Link href="mailto:race@foundationca.org">race@foundationca.org</Link>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="https://foundationca.org/" target="_blank" className="hover:text-gray-300">FCA Website</Link>
              <Link href="mailto:race@foundationca.org" className="hover:text-gray-300">Contact Us</Link>
            </div>
          </div>
        </footer>
      </div>
  )
}

