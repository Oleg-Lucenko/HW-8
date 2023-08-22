
import useFetch from '../hooks/UseFetch';


function Users() {

    const [data, error, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
      <div className="users">
      
        <h1>Users</h1>
  
        {isLoading &&  <p>Loading ...</p> } 
  
        {data.length > 0 && data.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
  
        {error &&  <p>{error}</p> } 
  
      </div>
    )
}

export default Users;