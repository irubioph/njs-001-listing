export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    const paths = data.map(listing => {
        return {
            params: { id: listing.id.toString() }
        }
    })

    return {
        // paths: [{}, {}, { params{ id: } }]
        paths, 
        fallback: false
    }
}

const Details = () => {
    return ( 
        <div>
            <h1>Details Page</h1>
        </div>
     );
}
 
export default Details;