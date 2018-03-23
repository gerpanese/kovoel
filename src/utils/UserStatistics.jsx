export default class UserStatistics {
  constructor(data) {
    this.data = data;
  }

  /**
   * @param date new Date()
   * @return number
   */
  getPerDate(date) {
    const key = this.getKeyPerDay(date);
    return +this.prepareData(this.data)[key];
  }

  /**
   * @param date new Date()
   * @return number
   */
  getPerYear(date) {
    const key = this.getKeyPerYear(date);
    return +this.prepareData(this.data)[key];
  }

  /**
   * @param date new Date()
   * @return number
   */
  getPerMonth(date) {
    const key = this.getKeyPerMonth(date);
    return +this.prepareData(this.data)[key];
  }

  prepareData(data) {
    const preparedData = {};

    data.forEach((logEntry) => {
      const keyPerDay = this.getKeyPerDay(logEntry.timestamp);
      const keyPerMonth = this.getKeyPerMonth(logEntry.timestamp);
      const keyPerYear = this.getKeyPerYear(logEntry.timestamp);

      if (preparedData[keyPerDay] === undefined) {
        preparedData[keyPerDay] = 0;
      }
      preparedData[keyPerDay] += 1;

      if (preparedData[keyPerMonth] === undefined) {
        preparedData[keyPerMonth] = 0;
      }
      preparedData[keyPerMonth] += 1;

      if (preparedData[keyPerYear] === undefined) {
        preparedData[keyPerYear] = 0;
      }
      preparedData[keyPerYear] += 1;

      return preparedData;
    });

    return preparedData;
  }

  getKeyPerDay(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    
    return date.getDate() + '-' +
      date.getMonth() + '-' +
      date.getYear();
  }

  getKeyPerMonth(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    return date.getMonth() + '-' +
      date.getYear();
  }

  getKeyPerYear(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    
    return date.getYear();
  }
}
