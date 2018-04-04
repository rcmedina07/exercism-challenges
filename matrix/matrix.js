module.exports = class Matrix {
    constructor(matrix) {
        this.rows = this.getRows(matrix);
        this.columns = this.getColumns();
    }
    getRows(matrix) {
        let rows = [];
        matrix.split('\n').map((row, i) => {
            rows[i] = [];
            row.split(' ').map(e => {
                rows[i].push(parseInt(e));
            });
        });
        return rows;
    }
    getColumns() {
        let columns = [];
        this.rows.map(row => {
            row.map((e, j) => {
                if (!columns[j]) {
                    columns[j] = [];
                }
                columns[j].push(e);
            })
        });
        return columns;
    }
}