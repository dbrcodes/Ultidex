fetch('http://localhost:5000/api/pokemon/') // backend request
  .then(res => res.json()) // convert response from http to JS object
  .then(data => {
    console.log(data);
    // Render pokémon card here
  });
