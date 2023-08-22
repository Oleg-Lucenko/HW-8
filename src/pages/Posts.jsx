
import useFetch from '../hooks/UseFetch';
import Post from '../components/Post';


function Posts() {

    const [data, error, isLoading, refetch] = useFetch('https://dummyjson.com/posts');
    const posts = data.posts;

    return (
      <div className="posts">
      
        <h1>Posts</h1>
  
        {isLoading &&  <p>Loading ...</p> } 
  
        {posts && posts.map(item => (
            <Post key={item.id} post={item} onUpdate={refetch} />
        ))}
  
        {error && <p>{error}</p> } 
  
      </div>
    )
}

export default Posts;