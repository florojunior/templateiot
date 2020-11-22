import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  modal: {
    title: '',
    message: '',
    buttonText: '',
    show: false,
  },
  modalOrder: {
    title: '',
    message: '',
    buttonText: '',
    orderModel: {},
    show: false,
  }
};

export const modal = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
