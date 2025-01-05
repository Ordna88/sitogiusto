// Dati statici di esempio
const mockStats = [
    { player: "LeBron James", team: "Lakers", points: 35 },
    { player: "Giannis Antetokounmpo", team: "Bucks", points: 40 },
    { player: "Stephen Curry", team: "Warriors", points: 32 },
];

// Funzione per caricare le statistiche
function loadPlayerStats() {
    const statsContainer = document.querySelector('#player-stats');
    statsContainer.innerHTML = ''; // Pulisce il contenitore

    mockStats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.textContent = `${stat.player} (${stat.team}): ${stat.points} points`;
        statsContainer.appendChild(statItem);
    });
}

// Chiamata alla funzione
loadPlayerStats();
