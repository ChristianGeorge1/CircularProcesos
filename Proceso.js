export default class Proceso {
    constructor(ciclos, num) {
        this._ciclos = ciclos;
        this._num = num;
        this._siguiente = null;
    }

    get siguiente() {
        return this._siguiente;
    }
    get ciclos() {
        return this._ciclos;
    }
    get num() {
        return this._num;
    }
    set ciclos(newCiclo) {
        this._ciclos = newCiclo;
    }
    set num(newnum) {
        this._num = newnum;
    }
    set siguiente(newSiguiente) {
        this._siguiente = newSiguiente;
    }
}