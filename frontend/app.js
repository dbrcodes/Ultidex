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
      const defaultOption = document.createElement("option");
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.value = "0";
      defaultOption.textContent = "— Select Pokémon —";
      resultsDropdown.appendChild(defaultOption);

      data.forEach(pokemon => {
        const option = document.createElement("option");
        option.value = pokemon.nat_dex_id; // You can use this to link to details later
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

// main section inputs

const resultDropdown = document.getElementById("results");

// Called when a Pokémon is selected
resultsDropdown.addEventListener("change", async () => {
  const selectedId = resultsDropdown.value;

  if (!selectedId) return;

  try {
    const res = await fetch(`http://localhost:5000/api/pokemon/${selectedId}`);
    const pokemon = await res.json();

    if (res.ok) {
      populateSectionTwo(pokemon);
    } else {
      console.error("Error loading Pokémon data:", pokemon);
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
});

// Update Section 2 with the selected Pokémon's data
function populateSectionTwo(pokemon) {
  // Name
  document.getElementById("name").textContent = "#" + pokemon.nat_dex_id + "." + " " + pokemon.name;

  // Image
  const avatar = document.getElementById("avatar");
  avatar.setAttribute("src", `../img/pokemon_images/${pokemon.nat_dex_id}.png`);

  // types
  const primaryType = document.querySelector(".primary-type")
  const secondaryType = document.querySelector(".secondary-type")

  if (pokemon.primary_type_id) {
    primaryType.setAttribute("src", `../img/icons/${pokemon.primary_type_id}.png`);
    primaryType.style.display = "inline";
  }

  if (pokemon.secondary_type_id) {
    secondaryType.setAttribute("src", `../img/icons/${pokemon.secondary_type_id}.png`);
    secondaryType.style.display = "inline";
  } else {
    secondaryType.style.display = "none";
  }

  // Placeholder: You can add more like height, weight, species, abilities, stats, etc.
}