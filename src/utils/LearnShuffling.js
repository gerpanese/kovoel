export default class LearnShuffling {
  constructor(array) {
    this.array = array;
  }

  doShuffle() {
    let currentIndex = this.array.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      const temporaryValue = this.array[currentIndex];
      this.array[currentIndex] = this.array[randomIndex];
      this.array[randomIndex] = temporaryValue;
    }

    return this.array;
  }
}
