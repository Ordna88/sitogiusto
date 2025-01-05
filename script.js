// Simulazione di notizie NBA (placeholder)
const newsData = [
  {
    title: "LeBron James leads Lakers to victory",
    description: "LeBron James scores 35 points in a thrilling win against the Warriors.",
    date: "2025-01-03",
  },
  {
    title: "Trade Rumors: Will Damian Lillard move?",
    description: "Speculations arise about Damian Lillard's potential trade to Miami Heat.",
    date: "2025-01-02",
  },
  {
    title: "MVP Race Heats Up",
    description: "Giannis Antetokounmpo and Nikola Jokic are leading the MVP race this season.",
    date: "2025-01-01",
  },
];

// Caricamento delle notizie dinamicamente
function loadNews() {
  const newsContainer = document.querySelector(".news-container");

  newsData.forEach((news) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.description}</p>
      <small>${news.date}</small>
    `;
    newsContainer.appendChild(newsItem);
  });
}

// Caricamento delle statistiche dinamiche da API
async function loadStats() {
  const statsContainer = document.querySelector(".stats-container");

  try {
    // Chiamata API per ottenere dati di giocatori
    const response = await fetch("https://www.balldontlie.io/api/v1/players?per_page=5");
    const data = await response.json();

    data.data.forEach((player) => {
      const statItem = document.createElement("div");
      statItem.classList.add("stat-item");
      statItem.innerHTML = `
        <p><strong>Player:</strong> ${player.first_name} ${player.last_name}</p>
        <p><strong>Team:</strong> ${player.team.full_name}</p>
        <p><strong>Position:</strong> ${player.position || "N/A"}</p>
      `;
      statsContainer.appendChild(statItem);
    });
  } catch (error) {
    statsContainer.innerHTML = "<p>Error loading stats. Please try again later.</p>";
    console.error("Error fetching stats:", error);
  }
}

// Caricamento degli highlights (simulazione)
function loadHighlights() {
  const highlightsContainer = document.querySelector(".highlights-container");

  // Simulazione di un video
  highlightsContainer.innerHTML = `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5hOrS9wz2wI"
      title="NBA Highlights"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}

// Gestione del form di contatto
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.textContent = `Thank you, ${name}! We will get back to you soon.`;
    formMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  } else {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
  }
});

// Inizializzazione delle funzioni
function init() {
  loadNews();
  loadStats();
  loadHighlights();
}

// Avvia lo script al caricamento della pagina
document.addEventListener("DOMContentLoaded", init);
