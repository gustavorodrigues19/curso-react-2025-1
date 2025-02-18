import { useEffect, useState } from "react";

export default function ListarPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-cache",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("entoru aqui");
        setPosts(data.splice(0, refresh));
        setIsLoading(false);
      });
  }, [refresh]);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => setRefresh(refresh + 1)}>Refresh data</button>
      <div>
        {posts.map((post, key) => (
          <div key={`post-${post.id}-${key}`}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
