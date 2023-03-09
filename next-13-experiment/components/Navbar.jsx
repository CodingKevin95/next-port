'use client';
import react from 'react';
import './Navbar.css'
import Image from 'next/image'
import Logo2 from '../app/assets/Kevin-Son-1.png'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    const links = [
        {
            href: '/',
            text:'About',
            url: '#home'
        },
        {
            href: '/techStack',
            text: 'Tech Stack',
            url: '#techStack'
        },
        {
            href: '/portfolio',
            text:'Portfolio',
            url: '#portfolio'
        },
        {
            href: '/contact',
            text:'Contact',
            url: '#contact'
        },
    ]

    const path = usePathname()

    return (
        <nav className='navbar'>
            <div className='navbarNav'>
                <Link href='/'>
                    <Image
                        src={Logo2}
                        alt="Logo"
                        width="125"
                        height="125"
                        className="cursor-pointer"
                        priority
                    />
                </Link>
                <div className='rightMenu'>
                    <ul className='menu'>
                        { links.map((link, i) => {
                            return (
                            <Link key={i} className='tabs' href={link.url}>
                                <li key={link.id} className={`${link.url === path ? "tab" : "noClickTab"}`}>
                                    {link.text}
                                </li>
                            </Link>
                            );
                        }) }
                    </ul>
                </div>
                <div className='hamburgerMenu' onClick={handleNav}>
                    <AiOutlineMenu />
                </div>
            </div>
            <div className={
                menuOpen
                ? 'openMenu' : 'closedMenu'
            }>
            <div className='xButton'>
                <div onClick={handleNav} className='x'>
                    <AiOutlineClose />
                </div>
            </div>
            <div className='hamburgerMenuTabs'>
                <ul className='menu'>
                    <Link href='/' className='tabs'>
                        <li className='tab'
                        onClick={() => setMenuOpen(false)}
                        >
                            About
                        </li>
                    </Link>
                    <Link href='/portfolio' className='tabs'>
                        <li className='tab'
                        onClick={() => setMenuOpen(false)}
                        >
                            Portfolio
                        </li>
                    </Link>
                    <Link href='/contact' className='tabs'>
                        <li className='tab'
                        onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </li>
                    </Link>
                    <Image
                        src={Logo2}
                        alt="Logo"
                        width="125"
                        height="125"
                        className="cursor-pointer"
                        priority
                    />
                </ul>
            </div>
            </div>
        </nav>
    )
}