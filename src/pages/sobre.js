import Image from "next/image";
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
               Sobre o projeto
            </h1>
            
            <p>Charizard é um grande Pokémon semelhante a um dragão que difere muito de sua forma pré-evoluída.  
                A coloração vermelha da pele de Charmeleon não é mais aparente, já que Charizard parece ter revertido 
                para a coloração laranja/amarela de Charmander.  Duas grandes presas podem ser vistas quando sua boca 
                está fechada.  Quando sua boca está aberta, suas presas inferiores e uma língua esguia, mas longa, 
                podem ser vistas.  O único chifre que estava na parte de trás de sua cabeça agora é dois, um de cada 
                lado.  A diferença mais notável entre Charizard e suas formas pré-evoluídas são as grandes asas 
                que se desenvolveram em suas costas, o que dá a Charizard a capacidade de voar.</p>

            <Image src='/images/charizard.png' width='300' height='300' alt='Charizard'/>
        </div>
       
    </>
    
    )
}