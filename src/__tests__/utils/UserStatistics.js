/* global expect */
/* global it */
/* global describe */
import UserStatistics from '../../utils/UserStatistics';

describe('src/__tests__/utils/UserStatistics.js', () => {
  describe('UserStatistics.getDateObject()', () => {
    it('userStatistics.getDateObject() - unix-timestamp', () => {
      const userStatistics = new UserStatistics([]);
      expect(userStatistics.getDateObject(1521789715)).toEqual('1970-01-18T14:43:09.715Z');
    });

    it('userStatistics.getDateObject() - date-object', () => {
      const userStatistics = new UserStatistics([]);
      const dateString = '2017-03-16T17:46:53.677+07:00';
      const date = new Date(dateString);
      expect(userStatistics.getDateObject(date)).toEqual(dateString);
    });
  });

  describe('UserStatistics.getKeyPerYear()', () => {
    it('date-object test', () => {
      const userStatistics = new UserStatistics([]);
      const dateString = '2017-03-16T17:46:53.677+07:00';
      const date = new Date(dateString);
      expect(userStatistics.getKeyPerYear(date)).toEqual(2017);
    });
  });
});
