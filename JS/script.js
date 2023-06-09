document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const gridSize = 20;
    const gameBoardSize = 400;
    const snakeSpeed = 200;
    
    let snake = [{x: 0, y: 0}];
    let food = {x: 0, y: 0};
    let direction = 'right';
    
    function startGame() {
        generateFood();
        gameLoop = setInterval(moveSnake, snakeSpeed);
    }
    
    function generateFood() {
        food.x = Math.floor(Math.random() * gridSize) * gridSize;
        food.y = Math.floor(Math.random() * gridSize) * gridSize;
        
        let isOnSnake = snake.some(part => part.x === food.x && part.y === food.y);
        if (isOnSnake) {
            generateFood();
        }
        
        const foodElement = document.createElement('div');
        foodElement.classList.add('food');
        foodElement.style.left = food.x + 'px';
        foodElement.style.top = food.y + 'px';
        gameBoard.appendChild(foodElement);
    }
    
    function moveSnake() {
        const head = {x: snake[0].x, y: snake[0].y};
        
        switch (direction) {
            case 'up':
                head.y -= gridSize;
                break;
            case 'down':
                head.y += gridSize;
                break;
            case 'left':
                head.x -= gridSize;
                break;
            case 'right':
                head.x += gridSize;
                break;
        }
        
        snake.unshift(head);
        
        if (head.x === food.x && head.y === food.y) {
            const foodElement = document.querySelector('.food');
            gameBoard.removeChild(foodElement);
            generateFood();
        } else {
            snake.pop();
        }
        
        if (isCollision()) {
            clearInterval(gameLoop);
            alert('Game over!');
        }
        
        renderSnake();
    }
    
    function renderSnake() {
        const snakeElements = document.querySelectorAll('.snake-part');
        
        snakeElements.forEach(element => {
            gameBoard.removeChild(element);
        });
        
        snake.forEach(part => {
            const partElement = document.createElement('div');
            partElement.classList.add('snake-part');
            partElement.style.left = part.x + 'px';
            partElement.style.top = part.y + 'px';
            gameBoard.appendChild(partElement);
        });
    }
    
    function isCollision() {
        const head = snake[0];
        
        return (
            head.x < 0 ||
            head.x >= gameBoardSize ||
            head.y < 0 ||
            head.y >= gameBoardSize ||
            snake.slice(1).some(part => part.x === head.x && part.y === head.y)
        );
    }
    
    document.addEventListener('keydown', e => {
        const keyPressed = e.key;
        
        switch (keyPressed) {
            case 'ArrowUp':
                if (direction !== 'down') {
                    direction = 'up';
                }
                break;
            case 'ArrowDown':
                if (direction !== 'up') {
                    direction = 'down';
                }
                break;
            case 'ArrowLeft':
                if (direction !== 'right') {
                    direction = 'left';
                }
                break;
            case 'ArrowRight':
                if (direction !== 'left') {
                    direction = 'right';
                }
                break;
        }
    });
    
    startGame();
});
