/* global expect */
/* global it */
/* global describe */
import UserStatistics from '../../utils/UserStatistics';

describe('src/__tests__/utils/UserStatistics.js', () => {
  describe('UserStatistics.getDateObject()', () => {
    it('userStatistics.getDateObject() - unix-timestamp', () => {
      const userStatistics = new UserStatistics([]);
      expect(userStatistics.getDateObject(1521789715).toString()).toEqual('Sun Jan 18 1970 23:43:09 GMT+0900 (Japanische Normalzeit)');
    });

    it('userStatistics.getDateObject() - date-object', () => {
      const userStatistics = new UserStatistics([]);
      const dateString = '2017-03-16T17:46:53.677+07:00';
      const date = new Date(dateString);
      expect(userStatistics.getDateObject(date).toString()).toEqual('Thu Mar 16 2017 19:46:53 GMT+0900 (Japanische Normalzeit)');
    });
  });

  describe('UserStatistics.getKeyPerYear()', () => {
    it('date-object test', () => {
      const userStatistics = new UserStatistics([]);
      const dateString = '2017-03-16T10:46:53.677Z';
      const date = new Date(dateString);
      expect(userStatistics.getKeyPerYear(date)).toEqual(117);
    });
  });
});
