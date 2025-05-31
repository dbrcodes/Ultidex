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

// search function
const searchInput = document.getElementById("searchbar");
const resultsDropdown = document.getElementById("results");

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();

  // Clear old results
  resultsDropdown.innerHTML = "";

  // Skip empty queries
  if (!query) return;

  try {
    const res = await fetch(`http://localhost:5000/api/pokemon/search?name=${encodeURIComponent(query)}`);
    const data = await res.json();

    if (res.ok) {
      data.forEach(pokemon => {
        const option = document.createElement("option");
        option.value = pokemon.id; // You can use this to link to details later
        option.textContent = `${pokemon.name} (#${pokemon.nat_dex_id})`;
        resultsDropdown.appendChild(option);
      });
    } else {
      console.error("API error:", data);
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
});
