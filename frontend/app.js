fetch('http://localhost:5000/api/pokemon/')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // Render pokémon card here
  });
