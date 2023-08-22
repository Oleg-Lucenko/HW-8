

function Post({post, onUpdate}) {

    const {id} = post;


    const handleDeleteItem = async () => {
        const request = await fetch(`https://dummyjson.com/posts/${id}`, {
            method: 'DELETE'
        });
        onUpdate();
        
    }

    return (
      <div className="post">
      
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={handleDeleteItem}>Delete</button>
          </div>
  
      </div>
    )
}

export default Post;