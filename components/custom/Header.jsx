import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 border-b border-gray-300'>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <div className='flex gap-4'>
            <Button>
                <Link href="/login">Login</Link>
            </Button>
            <Button>
                <Link href="/signup">Signup</Link>
            </Button>
        </div>
    </div>
  )
}

export default Header