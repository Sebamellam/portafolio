import Link from 'next/link'
import React from 'react'

const Appbar = () => {
  return (
    <div className="flex flex-row gap-3 bg-gray-700 p-10"> 
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Appbar