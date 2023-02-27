export const getTasks = state => state.tasks.items;

export const getFilters = state => state.filters.status;

export const getIsLoading = state => {
  console.log(state);
  return state.tasks.isLoading;
};

export const getError = state => state.tasks.error;
