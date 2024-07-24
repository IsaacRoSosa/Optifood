import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function NavBar() {
  return (
 
      <nav className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <a href="/">OPTIFOOD</a>
      </div>
      <ul className={styles.navbar_nav}>
        <li className={styles.nav_item}>
          <Link href="/pantry">Pantry</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/waste_prevented">Waste Monitor</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/recipe_generator">Recipe Generator</Link>
        </li>
        <li className={styles.nav_item}>
            <div className={styles.LogoContainer}>
                <Image src="/pfp.webp" alt="logo" width={65} height={65} />
            </div>
        
        </li>
      </ul>
    </nav>

  )
}
