import Proceso from './Proceso.js';

export default class Cola {
    constructor() {
        this._first = null;
        this._end = null;
        this._cantidad = 0;
        this._atendido = 0;
        this._colaV = 0;
    }

    start() {
        let num = 1;

        for (let i = 0; i < 300; i++) {
            if (this._first == null) {
                if (Math.floor(Math.random() * (100 - 1) + 1) <= 39) {
                    this._create(num);
                    num++;
                    this._cantidad++;
                }
                var temp = this._first;
            } else {
                if (Math.floor(Math.random() * (100 - 1) + 1) <= 39) {
                    this._create(num);
                    num++;
                    this._cantidad++;
                }
                if (temp != null) {
                    if (temp.ciclos == 0) {
                        this._eliminar(temp);
                        this._cantidad--;
                        this._atendido++;
                    }
                    temp.ciclos--;
                    temp = temp.siguiente;
                } else {
                    this._colaV++;
                }

            }
        }
        console.log(this._first);


    }

    _create(num) {
        let newP = new Proceso(Math.floor(Math.random() * (14 - 4) + 4), num);

        if (this._first == null) {
            this._first = newP;
            this._end = newP;
            this._first.siguiente = newP;
            this._end.siguiente = newP;
        } else {
            newP.siguiente = this._first;
            this._end.siguiente = newP;
            this._end = newP;
        }
    }
    _eliminar(temp) {
        let antes = this._buscar(temp);
        if (temp == this._first && temp == this._end) {
            this._first = this._end = null;
        } else if (temp == this._first) {
            this._first = temp.siguiente;
            this._end.siguiente = this._first;
        } else if (temp == this._end) {
            antes.siguiente = this._first;
            this._end = antes;
        } else {
            antes.siguiente = temp.siguiente;
        }
    }

    _buscar(temp) {
        let current = this._first;
        let ends = this._end;

        if (current == temp) {
            return ends;
        } else {
            while (current.siguiente != temp && ends != temp) {
                current = current.siguiente;
            }
        }
        return current;

    }
}