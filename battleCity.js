document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    let currentLevel = 0;

    const levels = [
        {
            enemies: 3,
            obstacles: [
                { x: 0, y: 0, width: 50, height: 50 },
                { x: 0, y: 50, width: 50, height: 50 },
                { x: 0, y: 100, width: 50, height: 50 },
                { x: 0, y: 150, width: 50, height: 50 },
                { x: 0, y: 200, width: 50, height: 50 },
                { x: 0, y: 250, width: 50, height: 50 },
                { x: 0, y: 300, width: 50, height: 50 },
                { x: 0, y: 350, width: 50, height: 50 },
                { x: 0, y: 400, width: 50, height: 50 },
                { x: 0, y: 450, width: 50, height: 50 },
                { x: 0, y: 500, width: 50, height: 50 },
                { x: 0, y: 550, width: 50, height: 50 },
                { x: 50, y: 0, width: 50, height: 50 },
                { x: 100, y: 0, width: 50, height: 50 },
                { x: 150, y: 0, width: 50, height: 50 },
                { x: 200, y: 0, width: 50, height: 50 },
                { x: 250, y: 0, width: 50, height: 50 },
                { x: 300, y: 0, width: 50, height: 50 },
                { x: 350, y: 0, width: 50, height: 50 },
                { x: 400, y: 0, width: 50, height: 50 },
                { x: 450, y: 0, width: 50, height: 50 },
                { x: 500, y: 0, width: 50, height: 50 },
                { x: 550, y: 0, width: 50, height: 50 },
                { x: 550, y: 0, width: 50, height: 50 },
                { x: 550, y: 50, width: 50, height: 50 },
                { x: 550, y: 100, width: 50, height: 50 },
                { x: 550, y: 150, width: 50, height: 50 },
                { x: 550, y: 200, width: 50, height: 50 },
                { x: 550, y: 250, width: 50, height: 50 },
                { x: 550, y: 300, width: 50, height: 50 },
                { x: 550, y: 350, width: 50, height: 50 },
                { x: 550, y: 400, width: 50, height: 50 },
                { x: 550, y: 450, width: 50, height: 50 },
                { x: 550, y: 500, width: 50, height: 50 },
                { x: 550, y: 550, width: 50, height: 50 },
                { x:  0, y: 550, width: 50, height: 50 },
                { x: 50, y: 550, width: 50, height: 50 },
                { x: 100, y: 550, width: 50, height: 50 },
                { x: 150, y: 550, width: 50, height: 50 },
                { x: 200, y: 550, width: 50, height: 50 },
                { x: 350, y: 550, width: 50, height: 50 },
                { x: 400, y: 550, width: 50, height: 50 },
                { x: 450, y: 550, width: 50, height: 50 },
                { x: 500, y: 550, width: 50, height: 50 },
                { x: 550, y: 550, width: 50, height: 50 },
                
                { x: 200, y: 500, width: 50, height: 50 },
                { x: 200, y: 450, width: 50, height: 50 },
                { x: 200, y: 400, width: 50, height: 50 },
                { x: 200, y: 350, width: 50, height: 50 },
                { x: 350, y: 500, width: 50, height: 50 },
                { x: 350, y: 450, width: 50, height: 50 },
                { x: 350, y: 400, width: 50, height: 50 },
                { x: 350, y: 350, width: 50, height: 50 },
                { x: 250, y: 50, width: 50, height: 50 },
                { x: 300, y: 50, width: 50, height: 50 },
                { x: 250, y: 100, width: 50, height: 50 },
                { x: 300, y: 100, width: 50, height: 50 },

            ]
        },
        {
            enemies: 4,
            obstacles: [
                { x: 0, y: 0, width: 50, height: 50 },
                { x: 0, y: 50, width: 50, height: 50 },
                { x: 0, y: 100, width: 50, height: 50 },
                { x: 0, y: 150, width: 50, height: 50 },
                { x: 0, y: 200, width: 50, height: 50 },
                { x: 0, y: 250, width: 50, height: 50 },
                { x: 0, y: 300, width: 50, height: 50 },
                { x: 0, y: 350, width: 50, height: 50 },
                { x: 0, y: 400, width: 50, height: 50 },
                { x: 0, y: 450, width: 50, height: 50 },
                { x: 0, y: 500, width: 50, height: 50 },
                { x: 0, y: 550, width: 50, height: 50 },
                { x: 50, y: 0, width: 50, height: 50 },
                { x: 100, y: 0, width: 50, height: 50 },
                { x: 150, y: 0, width: 50, height: 50 },
                { x: 200, y: 0, width: 50, height: 50 },
                { x: 250, y: 0, width: 50, height: 50 },
                { x: 300, y: 0, width: 50, height: 50 },
                { x: 350, y: 0, width: 50, height: 50 },
                { x: 400, y: 0, width: 50, height: 50 },
                { x: 450, y: 0, width: 50, height: 50 },
                { x: 500, y: 0, width: 50, height: 50 },
                { x: 550, y: 0, width: 50, height: 50 },
                { x: 550, y: 0, width: 50, height: 50 },
                { x: 550, y: 50, width: 50, height: 50 },
                { x: 550, y: 100, width: 50, height: 50 },
                { x: 550, y: 150, width: 50, height: 50 },
                { x: 550, y: 200, width: 50, height: 50 },
                { x: 550, y: 250, width: 50, height: 50 },
                { x: 550, y: 300, width: 50, height: 50 },
                { x: 550, y: 350, width: 50, height: 50 },
                { x: 550, y: 400, width: 50, height: 50 },
                { x: 550, y: 450, width: 50, height: 50 },
                { x: 550, y: 500, width: 50, height: 50 },
                { x: 550, y: 550, width: 50, height: 50 },
                { x:  0, y: 550, width: 50, height: 50 },
                { x: 50, y: 550, width: 50, height: 50 },
                { x: 100, y: 550, width: 50, height: 50 },
                { x: 150, y: 550, width: 50, height: 50 },
                { x: 200, y: 550, width: 50, height: 50 },
                { x: 350, y: 550, width: 50, height: 50 },
                { x: 400, y: 550, width: 50, height: 50 },
                { x: 450, y: 550, width: 50, height: 50 },
                { x: 500, y: 550, width: 50, height: 50 },
                { x: 550, y: 550, width: 50, height: 50 },
               
            ]
        },
        {
            enemies: 5,
            obstacles: [
                { x: 0, y: 0, width: 50, height: 50 },
                { x: 0, y: 50, width: 50, height: 50 },
                { x: 0, y: 100, width: 50, height: 50 },
                { x: 0, y: 150, width: 50, height: 50 },
                { x: 0, y: 200, width: 50, height: 50 },
                { x: 0, y: 250, width: 50, height: 50 },
                { x: 0, y: 300, width: 50, height: 50 },
                { x: 0, y: 350, width: 50, height: 50 },
                { x: 0, y: 400, width: 50, height: 50 },
                { x: 0, y: 450, width: 50, height: 50 },
                { x: 0, y: 500, width: 50, height: 50 },
                { x: 0, y: 550, width: 50, height: 50 },
                { x: 50, y: 0, width: 50, height: 50 },
                { x: 100, y: 0, width: 50, height: 50 },
                { x: 150, y: 0, width: 50, height: 50 },
                { x: 200, y: 0, width: 50, height: 50 },
                { x: 250, y: 0, width: 50, height: 50 },
                { x: 300, y: 0, width: 50, height: 50 },
                { x: 350, y: 0, width: 50, height: 50 },
                { x: 400, y: 0, width: 50, height: 50 },
                { x: 450, y: 0, width: 50, height: 50 },
                { x: 500, y: 0, width: 50, height: 50 },
                { x: 550, y: 0, width: 50, height: 50 },
                { x: 550, y: 0, width: 50, height: 50 },
                { x: 550, y: 50, width: 50, height: 50 },
                { x: 550, y: 100, width: 50, height: 50 },
                { x: 550, y: 150, width: 50, height: 50 },
                { x: 550, y: 200, width: 50, height: 50 },
                { x: 550, y: 250, width: 50, height: 50 },
                { x: 550, y: 300, width: 50, height: 50 },
                { x: 550, y: 350, width: 50, height: 50 },
                { x: 550, y: 400, width: 50, height: 50 },
                { x: 550, y: 450, width: 50, height: 50 },
                { x: 550, y: 500, width: 50, height: 50 },
                { x: 550, y: 550, width: 50, height: 50 },
                { x:  0, y: 550, width: 50, height: 50 },
                { x: 50, y: 550, width: 50, height: 50 },
                { x: 100, y: 550, width: 50, height: 50 },
                { x: 150, y: 550, width: 50, height: 50 },
                { x: 200, y: 550, width: 50, height: 50 },
                { x: 350, y: 550, width: 50, height: 50 },
                { x: 400, y: 550, width: 50, height: 50 },
                { x: 450, y: 550, width: 50, height: 50 },
                { x: 500, y: 550, width: 50, height: 50 },
                { x: 550, y: 550, width: 50, height: 50 },
            ]
        }
    ];

    let obstacles = [];
    const tank = {
        x: 300,
        y: 550,
        width: 40,
        height: 40,
        speed: 5,
        direction: null,
        moving: false,
        draw() {
            ctx.fillStyle = "green";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        },
        move() {
            if (this.moving) {
                let nextX = this.x;
                let nextY = this.y;
                if (this.direction === "up" && this.y > 0) {
                    nextY -= this.speed;
                } else if (this.direction === "down" && this.y < canvas.height - this.height) {
                    nextY += this.speed;
                } else if (this.direction === "left" && this.x > 0) {
                    nextX -= this.speed;
                } else if (this.direction === "right" && this.x < canvas.width - this.width) {
                    nextX += this.speed;
                }

                if (!collided(nextX, nextY, this.width, this.height)) {
                    this.x = nextX;
                    this.y = nextY;
                }
            }
        },
        checkCollision(enemy) {
            return (
                this.x < enemy.x + enemy.width &&
                this.x + this.width > enemy.x &&
                this.y < enemy.y + enemy.height &&
                this.y + this.height > enemy.y
            );
        }
    };

    const bullets = [];
    const enemies = [];

    function createEnemies(level) {
        enemies.length = 0; 
        for (let i = 0; i < level.enemies; i++) {
            let enemy = {
                x: (canvas.width /2 - 60),
                y: (canvas.height /2 - 60),
                width: 40,
                height: 40,
                speed: 2,
                direction: randomDir(),
                draw() {
                    ctx.fillStyle = "red";
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                },
                move() {
                    let nextX = this.x;
                    let nextY = this.y;
                    
                    if (this.direction === "up") {
                        nextY -= this.speed;
                    } else if (this.direction === "down") {
                        nextY += this.speed;
                    } else if (this.direction === "left") {
                        nextX -= this.speed;
                    } else if (this.direction === "right") {
                        nextX += this.speed;
                    }

                    if (nextX < 0 || nextX + this.width > canvas.width || nextY < 0 || nextY + this.height > canvas.height) {
                        this.direction = randomDir(); 
                    } else if (!collided(nextX, nextY, this.width, this.height)) {
                        this.x = nextX;
                        this.y = nextY;
                    } else {
                        this.direction = randomDir();
                    }
                }
            };
            enemies.push(enemy);
        }
    }

    function randomDir() {
        const directions = ["up", "down", "left", "right"];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    function drawObstacles() {
        ctx.fillStyle = "gray";
        obstacles.forEach(obstacle => {
            ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        });
    }

    function collided(x, y, width, height) {
        return obstacles.some(obstacle => {
            return (
                x < obstacle.x + obstacle.width &&
                x + width > obstacle.x &&
                y < obstacle.y + obstacle.height &&
                y + height > obstacle.y
            );
        });
    }

    function shoot() {
        const bulletSpeed = 10;
        let bullet = {
            x: tank.x + tank.width / 2 - 2.5,
            y: tank.y + tank.height / 2 - 2.5,
            width: 5,
            height: 5,
            speed: bulletSpeed,
            direction: tank.direction,
            move() {
                if (this.direction === "up") {
                    this.y -= this.speed;
                } else if (this.direction === "down") {
                    this.y += this.speed;
                } else if (this.direction === "left") {
                    this.x -= this.speed;
                } else if (this.direction === "right") {
                    this.x += this.speed;
                }
            },
            draw() {
                ctx.fillStyle = "blue";
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        bullets.push(bullet);
    }

    function bulletImpact() {
        bullets.forEach((bullet, bulletIndex) => {
            enemies.forEach((enemy, enemyIndex) => {
                if (
                    bullet.x < enemy.x + enemy.width &&
                    bullet.x + bullet.width > enemy.x &&
                    bullet.y < enemy.y + enemy.height &&
                    bullet.y + bullet.height > enemy.y
                ) {
                    bullets.splice(bulletIndex, 1);
                    enemies.splice(enemyIndex, 1);
                    
                    if (enemies.length === 0) {
                        alert("¡Has completado el nivel! Avanzando al siguiente nivel...");
                        nextLevel();
                    }
                }
            });

            obstacles.forEach((obstacle, obstacleIndex) => {
                if (
                    bullet.x < obstacle.x + obstacle.width &&
                    bullet.x + bullet.width > obstacle.x &&
                    bullet.y < obstacle.y + obstacle.height &&
                    bullet.y + bullet.height > obstacle.y
                ) {
                    bullets.splice(bulletIndex, 1);
                    obstacles.splice(obstacleIndex, 1);
                }
            });
        });
    }

    function detectTankCollisions() {
        enemies.forEach((enemy) => {
            if (tank.checkCollision(enemy)) {
                alert("¡Has sido destruido! Fin del juego.");
                document.location.reload(); 
            }
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawObstacles();

        tank.move();
        tank.draw();

        bullets.forEach((bullet, index) => {
            bullet.move();
            bullet.draw();

            if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
                bullets.splice(index, 1);
            }
        });

        enemies.forEach(enemy => {
            enemy.move();
            enemy.draw();
        });

        bulletImpact();
        detectTankCollisions();

        requestAnimationFrame(update);
    }

    function nextLevel() {
        currentLevel++;
        if (currentLevel >= levels.length) {
            alert("¡Has completado todos los niveles! Reiniciando el juego...");
            document.location.reload();
        } else {
            obstacles = levels[currentLevel].obstacles; 
            createEnemies(levels[currentLevel]); 
        }
    }

    document.addEventListener("keydown", (e) => {
        if (!tank.moving) {
            if (e.key === "ArrowUp") {
                tank.direction = "up";
                tank.moving = true;
            } else if (e.key === "ArrowDown") {
                tank.direction = "down";
                tank.moving = true;
            } else if (e.key === "ArrowLeft") {
                tank.direction = "left";
                tank.moving = true;
            } else if (e.key === "ArrowRight") {
                tank.direction = "right";
                tank.moving = true;
            }
        }

        if (e.key === " ") {
            shoot();
        }
    });

    document.addEventListener("keyup", (e) => {
        if ((e.key === "ArrowUp" && tank.direction === "up") ||
            (e.key === "ArrowDown" && tank.direction === "down") ||
            (e.key === "ArrowLeft" && tank.direction === "left") ||
            (e.key === "ArrowRight" && tank.direction === "right")) {
            tank.moving = false;
        }
    });

    obstacles = levels[currentLevel].obstacles; 
    createEnemies(levels[currentLevel]);
    update(); 
});