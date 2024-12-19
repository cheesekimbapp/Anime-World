"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={44} className="text-color-primary"/>
                <h3 className="text-color-primary text-4xl font-bold">NOT FOUND</h3>
                <Link href="/" className="text-color-primary hover:text-color-secondary transition-all
                underline">Back</Link>
            </div>
        </div>
    )
}

export default Page 