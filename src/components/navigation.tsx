'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/assets/logo.png'

import { Menu, X } from 'lucide-react'
import Button from "@/components/ui/Button";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="absolute w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src={Logo.src}
                                alt="Foundation Logo"
                                width={250}
                                height={250}
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link href="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                        <Link href="/#race-info" className="text-white hover:text-gray-300">
                            Race Info
                        </Link>
                        <Link href="https://www.ItsRaceTime.com/Results.aspx?ID=3208" className="text-white hover:text-gray-300">
                           2024 Race Results
                        </Link>
                        <Link href="https://foundationca.org/our-school/" className="text-white hover:text-gray-300">
                            About FCA
                        </Link>
                        <Button>
                            Sign Up Today
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-300"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" onClick={() => setIsOpen(false)}>
                        <Link
                            href="/"
                            className="text-white block px-3 py-2 hover:bg-gray-700 rounded-md"
                        >
                            Home
                        </Link>
                        <Link
                            href="/#race-info"
                            className="text-white block px-3 py-2 hover:bg-gray-700 rounded-md"
                        >
                            Race Info
                        </Link>
                        <Link
                            href="https://www.ItsRaceTime.com/Results.aspx?ID=3208"
                            className="text-white block px-3 py-2 hover:bg-gray-700 rounded-md"
                        >
                            2024 Race Results
                        </Link>
                        <Link
                            href="https://foundationca.org/our-school/"
                            className="text-white block px-3 py-2 hover:bg-gray-700 rounded-md"
                        >
                            About FCA
                        </Link>
                        <div className="px-3 py-2">
                            <Button>
                                Sign Up Today
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

