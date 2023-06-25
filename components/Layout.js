import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return ( 
        <>
        <Head>
            <title>{`Ivan List | ${children.type.name}`}</title>
            <meta name="keywords" content={children.type.name} />
        </Head>
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
        </>
    );
}
 
export default Layout;