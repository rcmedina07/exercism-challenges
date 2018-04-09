module.exports = class Triangle {
    constructor(n) {
        this.rows = this._rows(n);
        this.lastRow = this._lastRow(n);
    }

    _rows(n) {
        const rows = [];
        let i = n - 1;
        while (i >= 0) {
            const row = [];
            let j = i;
            while (j >= 0) {
                let element = this._factorial(i) / (this._factorial(j) * this._factorial(i - j));
                row.push(element);
                j--;
            }
            rows.unshift(row);
            i--;
        }
        return rows;
    }

    _lastRow(n) {
        return this.rows[n - 1];
    }

    _factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let factorial = n;
            for (let i = n-1; i > 0; i--) {
                factorial = factorial * i;
            }
            return factorial;
        }
    }

}