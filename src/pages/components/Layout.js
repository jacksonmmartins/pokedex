import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

//importação do icone no head
export default function Layout({ children }) {
    return (
        <>
            <Head> 
                <link rel="shortcut icon" href="/images/favicon.ico"/>
                <title>PokeNext</title>
            </Head>
            <Navbar/>
            <main className="main-container">{children}</main>
            <Footer/>
        </>
    )
}