document.addEventListener("DOMContentLoaded", () => {
  const newsData = [
    {
      title: "LeBron James leads Lakers to victory",
      content: "LeBron James scores 35 points in a thrilling win against the Warriors.",
      date: "2025-01-03",
      image: "https://via.placeholder.com/150" // Sostituisci con URL reale
    },
    {
      title: "Trade Rumors: Will Damian Lillard move?",
      content: "Speculations arise about Damian Lillard's potential trade to Miami Heat.",
      date: "2025-01-02",
      image: "https://via.placeholder.com/150" // Sostituisci con URL reale
    },
    {
      title: "MVP Race Heats Up",
      content: "Giannis Antetokounmpo and Nikola Jokic are leading the MVP race this season.",
      date: "2025-01-01",
      image: "https://via.placeholder.com/150" // Sostituisci con URL reale
    }
  ];

  const newsSection = document.querySelector("#latest-news");

  newsData.forEach(news => {
    const newsCard = document.createElement("div");
    newsCard.classList.add("card");
    newsCard.style.width = "18rem";

    newsCard.innerHTML = `
      <img src="${news.image}" class="card-img-top" alt="news-image">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.content}</p>
        <p class="card-text"><small class="text-muted">${news.date}</small></p>
      </div>
    `;
    newsSection.appendChild(newsCard);
  });

  const statsSection = document.querySelector("#player-stats");
  const playerStats = [
    "LeBron James (Lakers): 35 points",
    "Giannis Antetokounmpo (Bucks): 40 points",
    "Stephen Curry (Warriors): 32 points"
  ];

  playerStats.forEach(stat => {
    const statElement = document.createElement("p");
    statElement.textContent = stat;
    statsSection.appendChild(statElement);
  });
});
