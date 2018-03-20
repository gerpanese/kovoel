/* global expect */
/* global it */
/* global describe */
import {
  changePage,
} from '../../actions/dashboard';

describe('src/__tests__/actions/changePage.js', () => {
  describe('changePage', () => {
    it('should change the current - page without an id', () => {
      const newPage = 'page';
      const expectedAction = {
        type: 'CHANGE_PAGE',
        page: newPage,
        id: null,
      };
      const actualAction = changePage(newPage);
      expect(actualAction).toEqual(expectedAction);
    });

    it('should change the current - page with an id', () => {
      const newPage = 'page';
      const id = 9;
      const expectedAction = {
        type: 'CHANGE_PAGE',
        page: newPage,
        id,
      };
      const actualAction = changePage(newPage, id);
      expect(actualAction).toEqual(expectedAction);
    });
  });
});
