module.exports = class School {
  constructor() {
    this.roster = {};
  }
  grade(grade) {
    if (!this.roster[grade]) {
      this.roster[grade] = [];
    }
    return this.roster[grade];
  }

  add(studentName, grade) {
    if (!this.roster[grade]) {
      this.roster[grade] = [];
    }

    this.roster[grade].push(studentName);
    this.roster[grade].sort();
  }
}
