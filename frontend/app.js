let statChart = null;

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
  avatar.setAttribute("src", `img/pokemon_images/${pokemon.nat_dex_id}.png`);

  // types
  const primaryType = document.querySelector(".primary-type")
  const secondaryType = document.querySelector(".secondary-type")

  if (pokemon.primary_type_id) {
    primaryType.setAttribute("src", `img/icons/${pokemon.primary_type_id}.png`);
    primaryType.style.display = "inline";
  }

  if (pokemon.secondary_type_id) {
    secondaryType.setAttribute("src", `img/icons/${pokemon.secondary_type_id}.png`);
    secondaryType.style.display = "inline";
  } else {
    secondaryType.style.display = "none";
  }

  // Details

  // Stats
  let statLabels = [
    `HP (${pokemon.stats.hp})`,
    `Attack (${pokemon.stats.attack})`,
    `Defense (${pokemon.stats.defense})`,
    `Sp.Atk (${pokemon.stats.sp_attack})`,
    `Sp.Def (${pokemon.stats.sp_defense})`,
    `Speed (${pokemon.stats.speed})`
  ];
  const stats = [
    pokemon.stats.hp,
    pokemon.stats.attack,
    pokemon.stats.defense,
    pokemon.stats.sp_attack,
    pokemon.stats.sp_defense,
    pokemon.stats.speed
  ];

  console.log("Creating/updating chart for", pokemon.name, stats);

  if (statChart) {
    // Chart already exists → update its data
    statChart.data.labels = statLabels;
    statChart.data.datasets[0].data = stats;
    statChart.update();
  } else {
    // First time → create the chart
    const statData = {
      labels: statLabels,
      datasets: [{
        label: 'Base Stats',
        data: stats,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const config = {
      type: 'radar',
      data: statData,
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 255,
            ticks: {
              display: false,
            },
            pointLabels: {
              font: {
                size: 15
              }
            }
          }
        }
      }
    };

    statChart = new Chart(
      document.getElementById('statChart'),
      config
    );

    // Placeholder: You can add more like height, weight, species, abilities, stats, etc.
  }
}