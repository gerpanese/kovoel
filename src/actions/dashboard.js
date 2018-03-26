const changePage = (page, id = null) => ({
  type: 'CHANGE_PAGE',
  page,
  id,
});

const setIsLoggedIn = () => ({
  type: 'SET_IS_LOGGED_IN',
});

const setUserId = (userId) => ({
  type: 'SET_USER_ID',
  userId
})

export {
  changePage,
  setIsLoggedIn,
  setUserId,
};
