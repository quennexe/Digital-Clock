function updateClock() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const clock = `${hours}:${minutes}:${seconds}`;

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    const dateText = `${day}.${month}.${year}`;

    document.getElementById('clock').textContent = clock;
    document.getElementById('date').innerHTML = `<span>${dateText}</span>`;
}

function speakDateTime() {
    const now = new Date();

    const saat = now.getHours();
    const dakika = now.getMinutes();
    const saniye = now.getSeconds();
    const tarih = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;

    const gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const gun = gunler[now.getDay()];

    const metin = `Saat ${saat}, ${dakika} dakika, ${saniye} saniye. Bugün ${gun}, tarih ${tarih}`;
    const utterance = new SpeechSynthesisUtterance(metin);
    utterance.lang = 'tr-TR';
    speechSynthesis.speak(utterance);
}

// Tema butonu
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// "Tarihi Seslendir" butonu
document.getElementById("speakNow").addEventListener("click", () => {
    speakDateTime();
});

// Saat ve tarih güncelle
setInterval(updateClock, 1000);
updateClock();

// Sayfa ilk yüklendiğinde bir kez seslendir
speakDateTime();