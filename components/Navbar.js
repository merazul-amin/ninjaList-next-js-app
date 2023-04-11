import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Image src={'/logo.png'} width={100} height={100}></Image>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Nina Listing</Link>
        </nav>
    );
};

export default Navbar;