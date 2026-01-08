const channelName = "Jason_Crossbow";

async function checkTwitchStatus() {
    const statusElement = document.getElementById('live-status');
    try {
        const response = await fetch(`https://decapi.me/twitch/uptime/${channelName}`);
        const uptime = await response.text();

        if (uptime.includes("offline")) {
            statusElement.innerText = "Aktuell Offline";
            statusElement.classList.remove('status-online');
        } else {
            statusElement.innerText = `LIVE - Seit ${uptime} online!`;
            statusElement.classList.add('status-online');
        }
    } catch (e) {
        statusElement.innerText = "Schön, dass du da bist!";
    }
}

async function updateFollowers() {
    try {
        const res = await fetch(`https://decapi.me/twitch/followcount/${channelName}`);
        const count = await res.text();
        const goal = 200;
        const percent = Math.min(Math.round((parseInt(count) / goal) * 100), 100);
        
        document.getElementById('current-followers').innerText = count;
        document.getElementById('goal-percent').innerText = percent + "%";
        document.getElementById('goal-bar').style.width = percent + "%";
    } catch (e) { console.log("Follower API Error"); }
}

checkTwitchStatus();
updateFollowers();
setInterval(checkTwitchStatus, 60000); // Alle 60 Sek prüfen
