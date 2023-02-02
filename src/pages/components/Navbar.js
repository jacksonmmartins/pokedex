import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    return(
        <nav>
            <div>
                <Image src='/images/pokeball' width='30' height='30' alt='PokeNext'></Image>
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href='/'legacyBehavior>Home</Link>
                </li>
                <li>
                    <Link href='/about'legacyBehavior>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}