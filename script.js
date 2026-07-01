// ==========================
// YES BUTTON
// ==========================

function yesAnswer() {

    alert("YAY!! ❤️\n\nI Love You So Much! 🥰💖");

}

// ==========================
// NO BUTTON (TUMATAKBO)
// ==========================

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);

    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

});

// ==========================
// FLOATING HEARTS
// ==========================

const hearts = document.getElementById("hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}, 250);

// ==========================
// TWINKLING STARS
// ==========================

const stars = document.getElementById("stars");

for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    star.style.opacity = Math.random();

    stars.appendChild(star);

}
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", function () {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);

    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});