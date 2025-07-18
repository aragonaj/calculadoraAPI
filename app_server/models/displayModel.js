class DisplayModel{

    constructor(){
        this.display = "0"; // por defecto en la pantalla se muestra 0
    }

    setDisplay(value){
        this.display = value;
    }

    getDisplay(){
        return this.display;
    }
}

module.exports = DisplayModel;