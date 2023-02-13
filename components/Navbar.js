import Link from "next/link"
import Image from "next/image"
import styles from "../src/styles/Navbar.module.css"
export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/images/pokeball.png' width='30' height='30' alt='PokeNext'></Image>
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href='/'legacyBehavior>Home</Link>
                </li>
                <li>
                    <Link href='/sobre'legacyBehavior>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}