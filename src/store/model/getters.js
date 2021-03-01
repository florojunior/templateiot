import List from '../../model/list';

export const getters = {
  getList: (state) => state.modelList,
  getListSelectedDeleted: (state) => state.modelSelectedDeleted,
  getListSelectedEdit: (state) => state.modelSelectedEdit,
  getModelSelectedFilter: (state) => state.modelSelectedFilter,
  getListLoading: (state) => state.modelListLoading,
  getHeaderList: (state) => {
    return List.getListHeader();
  },
  getFilterList: (state) => {
    return List.getListFieldsFilter();
  },
  getFilter: (state) => state.filter,
  getOrdered: (state) => state.order,
};
