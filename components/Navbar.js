import Link from "next/link";
import Image from "next/image";

Link
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={150} height={72} alt="" />
            </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/listing">Ivan Listing</Link>
        </nav>
     );
}
 
export default Navbar;