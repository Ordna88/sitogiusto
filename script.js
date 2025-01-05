document.addEventListener("DOMContentLoaded", () => {
  // News Data
  const newsData = [
    {
      title: "LeBron James leads Lakers to victory",
      content: "LeBron James scores 35 points in a thrilling win against the Warriors.",
      date: "2025-01-03",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Trade Rumors: Will Damian Lillard move?",
      content: "Speculations arise about Damian Lillard's potential trade to Miami Heat.",
      date: "2025-01-02",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "MVP Race Heats Up",
      content: "Giannis Antetokounmpo and Nikola Jokic are leading the MVP race this season.",
      date: "2025-01-01",
      image: "https://via.placeholder.com/150"
    }
  ];

  // Populate Latest News Section
  const newsSection = document.querySelector("#latest-news .news-container");

  newsData.forEach(news => {
    const newsCard = document.createElement("div");
    newsCard.classList.add("news-card");

    newsCard.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <h3>${news.title}</h3>
      <p>${news.content}</p>
      <small>${news.date}</small>
    `;

    newsSection.appendChild(newsCard);
  });

  // Player Stats
  const playerStats = [
    "LeBron James (Lakers): 35 points",
    "Giannis Antetokounmpo (Bucks): 40 points",
    "Stephen Curry (Warriors): 32 points"
  ];

  // Populate Player Stats Section
  const statsSection = document.querySelector("#player-stats ul");

  playerStats.forEach(stat => {
    const statItem = document.createElement("li");
    statItem.textContent = stat;
    statsSection.appendChild(statItem);
  });
});

