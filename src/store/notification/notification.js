import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  notification: {
    message: '',
    type: 'default',
    show: false,
  },
  NOTIFICATION_TYPES: ['success', 'error', 'info', 'warning', 'default'],
};

export const notification = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
