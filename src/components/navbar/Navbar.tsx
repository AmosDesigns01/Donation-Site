import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import React from 'react'

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <Image src="/logo.png" width={51} height={62} alt='University of Ibadan'/>
        <div className={styles.links}>
            <Link className={styles.link} href="/about">About Project</Link>
            <Link className={styles.link} href="/contact">Contact Us</Link>
            <Link className={styles.link_other} href="">Donate</Link>
        </div>
    </nav>
  )
}

export default Navbar