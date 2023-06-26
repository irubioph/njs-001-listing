import styles from '@/styles/Listing.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { listing: data }
    }
}

const Listing = ({ listing }) => {
    return ( 
        <div>
            <h1>Ivan's Listing</h1>
            {listing.map(listing => (
                <div key={listing.id}>
                    <a className={ styles.single }>
                        <h3>{ listing.name }</h3>
                    </a>
                </div>
            ))}
        </div>
     );
}
 
export default Listing;