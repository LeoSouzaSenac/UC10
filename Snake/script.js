const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); //fornece os métodos e propriedades necessários para desenhar e manipular gráficos 2D
const pauseButton = document.getElementById('pauseButton');

// Variáveis do jogo
const tileSize = 20; // Tamanho do tile
let snake = [{ x: 10, y: 10 }]; // Inicializa a cobrinha com uma posição
let dx = 0; // Direção horizontal da cobrinha
let dy = 0; // Direção vertical da cobrinha
let food = { x: 15, y: 15 }; // Posição da comida
let gameOver = false; // Indica o fim do jogo
let paused = false; // Indica se o jogo está pausado ou não
let gameSpeed = 100;
let start = false;
let score = 0;









// Função para desenhar a cobrinha
function drawSnake() {
    ctx.fillStyle = '#00ff08'; // Define a cor de preenchimento para a cobrinha (verde)
    snake.forEach(segment => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    });
}

// Função para desenhar a comida
function drawFood() {
    ctx.fillStyle = '#f00'; // Define a cor de preenchimento para a comida (vermelho)
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
}







// Função para gerar comida em uma posição aleatória
function generateFood() {
    food.x = Math.floor(Math.random() * canvas.width / tileSize);
    food.y = Math.floor(Math.random() * canvas.height / tileSize);
}















// Função para verificar colisão
function checkCollision() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return head.x < 0 || head.x >= canvas.width / tileSize || head.y < 0 || head.y >= canvas.height / tileSize;
}








// Função para mover a cobrinha
function moveSnake() {
    if (!paused) {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy }; // Calcula a nova posição da cabeça da cobrinha
        snake.unshift(head); // Adiciona a nova posição da cabeça no início do array
        if (head.x === food.x && head.y === food.y) {
            generateFood(); // Gera nova comida
            score += 10;
            if (gameSpeed > 0) {
                gameSpeed -= 5;
            }
        } else {
            snake.pop(); // Remove a última parte da cauda da cobrinha
        }
        if (checkCollision()) {
            gameOver = true; // Define o fim do jogo
            setTimeout(() => { 
                location.reload(); 
            }, 5000); // Após 5 segundos, recarrega a página
        }
    }
}










// Função para limpar o canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Função para desenhar o score
function drawScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Score: ' + score;
}







// Função para atualizar o jogo
function update() {
    drawScore();
    clearCanvas();
    drawFood();
    drawSnake();
    moveSnake();

    if (start === true) {
        if (!gameOver) {
            setTimeout(update, gameSpeed);
        } else {
            ctx.fillStyle = '#ffff';
            ctx.font = '30px Arial';
            ctx.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
        }
    }
}



// Evento de teclado para controlar a direção da cobrinha
document.addEventListener('keydown', e => {
    if (e.key === ' ') {
        //togglePause()
    }
    if (e.key === 's') {
        start = true
        update()
    }
    if (!gameOver && !paused) {
        switch (e.key) {
            case 'ArrowUp':
                if (dy === 0) { dx = 0; dy = -1; }
                break;
            case 'ArrowDown':
                if (dy === 0) { dx = 0; dy = 1; }
                break;
            case 'ArrowLeft':
                if (dx === 0) { dx = -1; dy = 0; }
                break;
            case 'ArrowRight':
                if (dx === 0) { dx = 1; dy = 0; }
                break;
        }
    }
});





// Adiciona evento de clique aos botões de direção
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

upButton.addEventListener('click', () => { if (dy === 0) { dx = 0; dy = -1; } });
downButton.addEventListener('click', () => { if (dy === 0) { dx = 0; dy = 1; } });
leftButton.addEventListener('click', () => { if (dx === 0) { dx = -1; dy = 0; } });
rightButton.addEventListener('click', () => { if (dx === 0) { dx = 1; dy = 0; } });







// Adiciona evento de clique ao botão para pausar/despausar o jogo
function togglePause() {
    paused = !paused; // Inverte o estado de pausa do jogo
    pauseButton.textContent = paused ? 'Resume' : 'Pause'; // Altera o texto do botão
}

// Adiciona evento de clique ao botão para pausar/despausar o jogo
pauseButton.addEventListener('click', togglePause);

// Adiciona evento de clique ao botão para iniciar o jogo
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    if (start === false) {
        start = true; // Inicia o jogo
        update();
    }
});

// Inicia o jogo
update();
