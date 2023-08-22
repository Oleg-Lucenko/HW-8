
import useFetch from '../hooks/UseFetch';


function Todos() {

    const [data, error, isLoading] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
      <div className="todos">
      
        <h1>Todos</h1>
  
        {isLoading &&  <p>Loading ...</p> } 
  
        {data.length > 0 && data.map(item => (
          <div key={item.id}>
            <p>Title: {item.title}</p>
            <p>Status: {item.completed ? 'completed' : 'not completed'}</p>
          </div>
        ))}
  
        {error &&  <p>{error}</p> } 
  
      </div>
    )
}

export default Todos;