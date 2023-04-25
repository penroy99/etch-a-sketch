function addDivs(container, classes, rounds) {
    for (let i = 0; i < rounds; i ++) {
        const div = document.createElement('div');
        div.classList.add(`${classes}`);
        container.append(div);
    }
}

function start(e) {
    const ROUNDS = parseInt(prompt('Please enter a number here: '));

    const body = document.querySelector('body');
    const previousGrid = document.querySelector('#grid');
    body.removeChild(previousGrid);

    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    body.appendChild(grid);

    addDivs(grid, 'column', ROUNDS);
    const columns = document.querySelectorAll('.column');
    for (let i = 0; i < ROUNDS; i ++) {
    addDivs(columns[i], 'cube', ROUNDS);
    }
}

const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', start);

//////
