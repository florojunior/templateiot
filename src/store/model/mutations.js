export const mutations = {
  setmodelList(state, trackers) {
    state.modelList = trackers;
  },
  setFilter(state, filter) {
    state.filter = filter;
  },
  setOrder(state, order) {
    state.order = order;
  }
};
