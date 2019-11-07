import Cola from './Cola.js';

class Main {
    constructor() {
        document.getElementById('btn').addEventListener('click', () => {
            let newC = new Cola();
            newC.start();
        })
    }
}

let m = new Main();