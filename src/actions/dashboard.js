const changePage = (page, id = null) => ({
  type: 'CHANGE_PAGE',
  page,
  id,
});

export {
  changePage,
};
