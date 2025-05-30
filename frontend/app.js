fetch('http://localhost:5000/api/pokemon/') // backend request
  .then(res => res.json()) // convert response from http to JS object
  .then(data => {
    console.log(data);
    // Render pokémon card here
  });

// page scripts
const statIds = ['hp', 'atk', 'def', 'spAtk', 'spDef', 'spd'];

statIds.forEach((id) => {
  const range = document.getElementById(id);
  const input = document.getElementById(id + 'Input');

  // When slider changes, update number input
  range.addEventListener('input', () => {
    input.value = range.value;
  });

  // When number input changes, update slider
  input.addEventListener('input', () => {
    const val = Math.max(0, Math.min(250, input.value));
    range.value = val;
  });
});