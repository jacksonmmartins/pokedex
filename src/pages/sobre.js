import Link from "next/link";
import Head from "next/head";
import styles from '../styles/Sobre.module.css'

export default function Sobre() {
    return (
    <>
        <Head>
            Sobre
        </Head>
        <div className={styles.sobre}>
            <h1>
                Este projeto conta como uma forma experimental e a nível de demonstração <br></br>
                Créditos Jackson Martins - Dev Back-end - Javascript
                Email: jacksondesobral@hotmail.com <br></br>
                Linkdln: https://www.linkedin.com/in/jackson-martins-3b462b164/
            </h1>
        </div>
    </>
    
    )
}