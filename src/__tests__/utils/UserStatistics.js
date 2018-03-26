/* global expect */
/* global it */
/* global describe */
import UserStatistics from '../../utils/UserStatistics';

describe('src/__tests__/utils/UserStatistics.js', () => {
  describe('UserStatistics.getDateObject()', () => {
    it('userStatistics.getDateObject() - unix-timestamp', () => {
      const userStatistics = new UserStatistics([]);
      expect(getFormattedDate(userStatistics.getDateObject(1521789715))).toEqual('19700118144309');
    });

    it('userStatistics.getDateObject() - date-object', () => {
      const userStatistics = new UserStatistics([]);
      const dateString = '2017-03-16T17:46:53.677+07:00';
      const date = new Date(dateString);
      expect(getFormattedDate(userStatistics.getDateObject(date))).toEqual('20170316104653');
    });

    function getFormattedDate(now) {
      const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).*$/;
      const tokenArray = regex.exec(now.toJSON());
      return tokenArray.slice(1).join('');
    }
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
