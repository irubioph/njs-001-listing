export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
    
  // map data to an array of path objects with params (id)
  const paths = data.map(showList => {
    return {
      params: { id: showList.id.toString() }
    }
  })

  return {
  // paths: [{}, {}, { params{ id: } }]
    paths, 
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { showList: data }
  }
}

const Details = ({ showList }) => {
    return (
      <div>
        <h1>{ showList.name }</h1>
        <p>{ showList.email }</p>
        <p>{ showList.website }</p>
        <p>{ showList.address.city }</p>
      </div>
    );
  }
 
export default Details;