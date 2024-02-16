import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <>
    <Link href="/demos">
    <h3>Demos</h3>
    </Link>
    <Link href="/pages">
    <h3>Pages</h3>
    </Link>
    <Link href="/support">
    <h3>Support</h3>
    </Link>
    <Link href="/contact">
    <h3>Contact</h3>
    </Link>
    <Link href="/signin">
    <h3>Sign In</h3>
    </Link>
    </>
  )
}