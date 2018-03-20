const changePage = (page, id = null) => ({
  type: 'CHANGE_PAGE',
  page,
  id,
});

const setIsLoggedIn = () => ({
  type: 'SET_IS_LOGGED_IN',
});

export {
  changePage,
  setIsLoggedIn,
};
