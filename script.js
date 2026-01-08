// Funktion zum Laden der Follower-Zahlen
async function updateFollowerGoal() {
    const channelName = 'jason_crossbow';
    const goal = 200; 
    
    try {
        const response = await fetch(`https://decapi.me/twitch/followcount/${channelName}`);
        if (!response.ok) throw new Error('API Fehler');
        
        const count = await response.text();
        const followerCount = parseInt(count.trim());

        if (!isNaN(followerCount)) {
            const percent = Math.min(Math.round((followerCount / goal) * 100), 100);

            document.getElementById('current-followers').innerText = followerCount;
            document.getElementById('goal-percent').innerText = percent + '%';
            document.getElementById('goal-bar').style.width = percent + '%';
        }
    } catch (error) {
        console.error("Fehler beim Laden:", error);
    }
}

// Scroll-Animation (Sektionen einblenden)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialer Aufruf
updateFollowerGoal();
// Alle 5 Minuten aktualisieren
setInterval(updateFollowerGoal, 300000);
