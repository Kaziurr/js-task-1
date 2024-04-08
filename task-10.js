    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const input = document.querySelector('input');

    createButton.addEventListener('click', () => {
        const amount = parseInt(input.value, 10);
        if (!isNaN(amount)) {
            createBoxes(amount);
        }
    });

    destroyButton.addEventListener('click', () => {
        const boxesContainer = document.getElementById('boxes');
        boxesContainer.innerHTML = ''; 
    });

    function createBoxes(amount) {
        const boxesContainer = document.getElementById('boxes');
        boxesContainer.innerHTML = ''; 
    
        const initialSize = 30; 
        const sizeIncrement = 10; 
    
        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            box.style.width = `${initialSize + i * sizeIncrement}px`;
            box.style.height = `${initialSize + i * sizeIncrement}px`;
            box.style.backgroundColor = getRandomHexColor();
            boxesContainer.appendChild(box);
        }
    }

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

