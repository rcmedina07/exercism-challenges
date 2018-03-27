module.exports = class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }
  round(time) {
    return Math.round(time * 100) / 100;
  }
  orbitalPeriod(year) {
    return year * 31557600;
  }
  onEarth() {
    return this.round(this.seconds / 31557600,2);
  }
  onMercury() {
    return this.round(this.seconds / this.orbitalPeriod(0.2408467));
  }
  onVenus() {
    return this.round(this.seconds / this.orbitalPeriod(0.61519726));
  }
  onMars() {
    return this.round(this.seconds / this.orbitalPeriod(1.8808158));
  }
  onJupiter() {
    return this.round(this.seconds / this.orbitalPeriod(11.862615));
  }
  onSaturn() {
    return this.round(this.seconds / this.orbitalPeriod(29.447498));
  }
  onUranus() {
    return this.round(this.seconds / this.orbitalPeriod(84.016846));
  }
  onNeptune() {
    return this.round(this.seconds / this.orbitalPeriod(164.79132));
  }

}