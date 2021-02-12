import List from '../../model/list';

export const getters = {
  getList: (state) => state.modelList,
  getListLoading: (state) => state.modelListLoading,
  getHeaderList: (state) => {
    return List.getListHeader();
  },
  getFilter: (state) => state.filter,
  getOrdered: (state) => state.order,
};
