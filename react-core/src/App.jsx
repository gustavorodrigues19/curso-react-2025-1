import { useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";
function ListarPosts() {
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  // Fazer loading
  return (
    <div>
      <h1>Posts</h1>
      <div>
        <div>
          <h3>Titulo post 1</h3>
          <p>Description post 1</p>
        </div>
        <div>
          <h3>Titulo post 2</h3>
          <p>Description post 2</p>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>State</h1>
      <ListarPosts />
    </div>
  );
}

export default App;
