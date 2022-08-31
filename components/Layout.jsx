import Navbar from "./Navbar";
import Head from 'next/head';
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <title>Noah Lhote Store</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;