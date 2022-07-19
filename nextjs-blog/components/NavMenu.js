import React from "react";
import Link from "next/link"
export default function NavMenu(){
    return (
        <>
            <div>
            <Link href="/">
               Blog 
            </Link>
            </div>
            <div>
            <Link href="/about">
               About us 
            </Link>
            <Link href="/coders">
               All Coders 
            </Link>
            </div>
        </>
    )
}