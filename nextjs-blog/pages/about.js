import React from "react";
import Link from "next/link"
export default function(){
    return (
        <>
            <h1>This is About US</h1>
            <p>.... Nothinng...</p>
            <h3> Click {' '}
            <Link href="/">
               Here 
            </Link>
            {' '}
                to go back to home page
            </h3>
        </>
    )
}