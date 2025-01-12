'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Menu, X } from 'lucide-react'

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-black/90 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/placeholder.svg"
                                alt="Foundation Logo"
                                width={40}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link href="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300">
                            Race Info
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300">
                            Race Results
                        </Link>
                        <Link href="#" className="text-white hover:text-gray-300">
                            About FCA
                        </Link>
                        <button>
                            Sign Up Today
                        </button>
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
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="text-white block px-3 py-2 hover:bg-gray-700 rounded-md"
                        >
                            Home
                        </Link>
                        <Link
                            href="#"
                            className="text-white block px-3 py-2 hover:bg-gray-700 rounded-md"
                        >
                            Race Info
                        </Link>
                        <Link
                            href="#"
                            className="text-white block px-3 py-2 hover:bg-gray-700 rounded-md"
                        >
                            Race Results
                        </Link>
                        <Link
                            href="#"
                            className="text-white block px-3 py-2 hover:bg-gray-700 rounded-md"
                        >
                            About FCA
                        </Link>
                        <div className="px-3 py-2">
                            <button className="w-full">
                                Sign Up Today
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

