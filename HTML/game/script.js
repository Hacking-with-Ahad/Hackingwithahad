// script.js
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
let jumping = false;

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !jumping) {
        jump();
    }
});

function jump() {
    jumping = true;
    let position = 0;

    const upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            const downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    jumping = false;
                }
                position -= 5;
                player.style.bottom = position + "px";
            }, 20);
        }
        position += 5;
        player.style.bottom = position + "px";
    }, 20);
}

function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        playerRect.right > obstacleRect.left &&
        playerRect.left < obstacleRect.right &&
        playerRect.bottom > obstacleRect.top
    ) {
        alert("Game Over!");
        location.reload();
    }
}

setInterval(checkCollision, 10);
