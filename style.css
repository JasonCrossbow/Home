/* --- BASIS --- */
body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    color: #ccc;
    background-color: #050507;
    background-image: radial-gradient(circle at top, rgba(145,70,255,0.15), transparent 55%);
}

header { padding: 60px 20px; text-align: center; color: #fff; }
.btn { padding: 12px 30px; background: #9146FF; color: #fff; text-decoration: none; border-radius: 10px; display: inline-block; font-weight: bold; }

/* --- SEKTIONEN --- */
section {
    max-width: 1000px;
    margin: 40px auto;
    padding: 25px;
    background: rgba(10, 10, 15, 0.85);
    border-radius: 22px;
    opacity: 0;
    transform: translateY(20px);
    transition: 0.6s ease-out;
}
section.visible { opacity: 1; transform: translateY(0); }

h2 { border-bottom: 3px solid #9146FF; display: inline-block; padding-bottom: 5px; color: #fff; }

/* --- BENTO GRID (DESKTOP) --- */
#dashboard { background: transparent; box-shadow: none; margin-top: -20px; }

.bento-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 20px;
}

.bento-item {
    background: rgba(15, 15, 25, 0.95);
    border: 1px solid rgba(145, 70, 255, 0.3);
    padding: 25px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (min-width: 769px) {
    .main-info { grid-row: span 2; border-left: 4px solid #9146FF; }
}

/* --- MOBILE FIXES --- */
@media (max-width: 768px) {
    .bento-grid {
        grid-template-columns: 1fr; /* Zwingt alles in eine Spalte */
    }
    
    .main-info {
        border-top: 4px solid #9146FF;
    }

    section {
        margin: 20px 15px; /* Mehr Platz zu den Bildschirmrändern */
        padding: 20px;
    }

    .social-grid {
        grid-template-columns: 1fr; /* Socials am Handy untereinander */
    }

    .chat-dark { height: 400px; }
}

/* --- DETAILS --- */
.mission-badge { background: #9146FF; color: #fff; padding: 4px 8px; border-radius: 5px; font-size: 0.7rem; width: fit-content; margin-bottom: 10px; }
.live-led { width: 8px; height: 8px; background: #9146FF; border-radius: 50%; animation: blink 1.5s infinite; margin-right: 8px; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
.status-header { display: flex; align-items: center; margin-bottom: 10px; }
.status-value { font-size: 1.2rem; font-weight: bold; color: #fff; }

.progress-bar { background: #111; height: 12px; border-radius: 10px; overflow: hidden; margin-top: 10px; }
.progress-fill { background: #9146FF; height: 100%; transition: width 1s ease; }

/* --- SOCIALS --- */
.social-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px; }
.social-card { padding: 20px; background: rgba(255,255,255,0.05); border-radius: 15px; text-align: center; text-decoration: none; color: #fff; transition: 0.3s; }
.social-card:hover { background: rgba(145,70,255,0.2); transform: translateY(-3px); }
.social-card i { font-size: 2rem; display: block; margin-bottom: 10px; }

/* --- VIDEO --- */
.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 15px; }
.video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
.chat-dark { width: 100%; height: 500px; border-radius: 15px; border: none; }

footer { text-align: center; padding: 40px; background: #0a0a0f; }
