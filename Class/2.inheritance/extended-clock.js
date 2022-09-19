class ExtendedClock extends Clock {
  constructor(template) {
    super(template);
    let { percision = 1000 } = template;
    this.percision = percision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.percision);
  }
}
