import styles from '@/styles/Listing.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { listing: data }
    }
}

const Listing = ({ listing }) => {
    //console.log(listing)

    return ( 
        <div>
            <h1>Ivan Listing</h1>
            {listing.map(list => (
                <Link href={'/listing/' + list.id} key={list.id} className={styles.single}>
                    <h3>{ list.name }</h3>
                </Link>
            ))}
        </div>
     );
}
 
export default Listing;