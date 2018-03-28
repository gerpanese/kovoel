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
    const data = this.prepareData(this.data)[key];

    return (data === undefined) ? 0 : data;
  }

  /**
   * @param date new Date()
   * @return number
   */
  getPerYear(date) {
    const key = this.getKeyPerYear(date);
    const data = this.prepareData(this.data)[key];

    return (data === undefined) ? 0 : data;
  }

  /**
   * @param date new Date()
   * @return number
   */
  getPerMonth(date) {
    const key = this.getKeyPerMonth(date);
    const data = this.prepareData(this.data)[key];
    
    return (data === undefined) ? 0 : data;
  }
  
  getAllLerningsPerMonth(date) {
    const key = this.getKeyPerMonth(date);
    const data = this.prepareAllLerningData(this.data)[key];
    return data;
  }

  prepareAllLerningData(data) {
    if (this.preparedAllData !== undefined) {
      return this.preparedAllData;
    }

    this.preparedAllData = {};

    data
      .forEach((logEntry) => {
        const keyPerDay = this.getKeyPerDay(logEntry.timestamp);
        const keyPerMonth = this.getKeyPerMonth(logEntry.timestamp);
        const keyPerYear = this.getKeyPerYear(logEntry.timestamp);

        if (this.preparedAllData[keyPerDay] === undefined) {
          this.preparedAllData[keyPerDay] = 0;
        }
        this.preparedAllData[keyPerDay] += 1;

        if (this.preparedAllData[keyPerMonth] === undefined) {
          this.preparedAllData[keyPerMonth] = 0;
        }
        this.preparedAllData[keyPerMonth] += 1;

        if (this.preparedAllData[keyPerYear] === undefined) {
          this.preparedAllData[keyPerYear] = 0;
        }
        this.preparedAllData[keyPerYear] += 1;
      });
    return this.preparedAllData;
  }

  prepareData(data) {
    if (this.preparedData !== undefined) {
      return this.preparedData;
    }

    this.preparedData = {};

    data
      .filter(date => date.state === 'SUCCESS')
      .forEach((logEntry) => {
        const keyPerDay = this.getKeyPerDay(logEntry.timestamp);
        const keyPerMonth = this.getKeyPerMonth(logEntry.timestamp);
        const keyPerYear = this.getKeyPerYear(logEntry.timestamp);

        if (this.preparedData[keyPerDay] === undefined) {
          this.preparedData[keyPerDay] = 0;
        }
        this.preparedData[keyPerDay] += 1;

        if (this.preparedData[keyPerMonth] === undefined) {
          this.preparedData[keyPerMonth] = 0;
        }
        this.preparedData[keyPerMonth] += 1;

        if (this.preparedData[keyPerYear] === undefined) {
          this.preparedData[keyPerYear] = 0;
        }
        this.preparedData[keyPerYear] += 1;
      });
    return this.preparedData;
  }

  getKeyPerDay(date) {
    const dateObject = this.getDateObject(date);

    return `${dateObject.getDate()}-${dateObject.getMonth()}-${dateObject.getYear()}`;
  }

  getKeyPerMonth(date) {
    const dateObject = this.getDateObject(date);

    return `${dateObject.getMonth()}-${dateObject.getYear()}`;
  }

  getKeyPerYear(date) {
    const dateObject = this.getDateObject(date);

    return dateObject.getYear();
  }

  getDateObject(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    return date;
  }
}
