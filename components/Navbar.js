import Link from "next/link";

Link
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Ivan Listing</h1>
            </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/listing">Ivan List</Link>
        </nav>
     );
}
 
export default Navbar;