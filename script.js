document.addEventListener("DOMContentLoaded", () => {
  // News Data
  const newsData = [
    {
      title: "LeBron James leads Lakers to victory",
      content: "LeBron James scores 35 points in a thrilling win against the Warriors.",
      date: "2025-01-03",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/640px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg"
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
      image: "https://editriceilcastoro.it/wp-content/uploads/2022/02/f3a6f222-7a25-4b9d-a9fe-d3fbb3dc88d6-scaled.jpeg"
    }
  ];

  // News Modal
  const modal = document.getElementById("news-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  const modalImage = document.getElementById("modal-image");
  const modalDate = document.getElementById("modal-date");
  const closeModal = document.querySelector(".close");

  // Populate News Section
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
    newsCard.addEventListener("click", () => {
      modal.style.display = "block";
      modalTitle.textContent = news.title;
      modalContent.textContent = news.content;
      modalImage.src = news.image;
      modalDate.textContent = news.date;
    });
    newsSection.appendChild(newsCard);
  });

  // Close Modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
