const nameMap = {};

module.exports = class Robot {
    constructor() {
        this.name = this.finalName();
    }

    getRamdomLeter() {
        return Math.floor(Math.random() * (91 - 65) + 65);
    }

    getRamdomNumber() {
        return Math.floor(Math.random() * (1000 - 100) + 100);
    }

    gnerateName() {
        let letters = String.fromCharCode(this.getRamdomLeter(), this.getRamdomLeter());
        let name = letters.concat(this.getRamdomNumber());
        return name;
    }

    finalName() {
        let name = this.gnerateName();
        while (nameMap[name]) {
            name = this.gnerateName();
        }
        nameMap[name] = name;
        return name;
    }

    reset() {
        this.name = this.finalName();
    }
}