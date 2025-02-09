fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Dados recebidos:", data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });

const minhaPromise = new Promise((resolve, rejected) => {
  return resolve(10);
});

minhaPromise.then((resp) => resp).catch((err) => err);
