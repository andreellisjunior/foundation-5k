import {ReactNode} from "react";
import Link from "next/link";

export default function Button({ children} : {children: ReactNode}) {
    return (
        <Link href="https://runsignup.com/Race/Register/?raceId=171533" target="_blank" rel="noopener noreferrer">
        <button className="flex w-fit justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            {children}
        </button>
        </Link>
    )
}