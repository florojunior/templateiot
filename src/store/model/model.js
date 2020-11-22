import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  modelList: [],
  headerList: [],
  filter: null,
  order: null
};

export const model = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};