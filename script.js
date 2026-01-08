// Follower laden
async function updateFollowerGoal() {
    try {
        const response = await fetch(`https://decapi.me/twitch/followcount/jason_crossbow`);
        const count = await response.text();
        const followerCount = parseInt(count.trim());
        const goal = 200;

        if (!isNaN(followerCount)) {
            const percent = Math.min(Math.round((followerCount / goal) * 100), 100);
            document.getElementById('current-followers').innerText = followerCount;
            document.getElementById('goal-percent').innerText = percent + '%';
            document.getElementById('goal-bar').style.width = percent + '%';
        }
    } catch (e) { console.log("API Fehler"); }
}

// Sektionen einblenden beim Scrollen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(s => observer.observe(s));

updateFollowerGoal();
