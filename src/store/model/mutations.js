export const mutations = {
  setmodelList(state, trackers) {
    state.modelList = trackers;
  },
  setmodelListLoading(state, payload) {
    state.modelListLoading = payload;
  },
  setModelSelectedDeleted(state, payload) {
    state.modelSelectedDeleted = payload;
  },
  setModelSelectedEdit(state, payload) {
    state.modelSelectedEdit = payload;
  },
  setFilter(state, filter) {
    state.filter = filter;
  },
  setOrder(state, order) {
    state.order = order;
  }
};
