export const actions = {
  showModal(state, payload) {
    state.commit('SHOW_MODAL', payload);
  },
  closeModal(state) {
    state.commit('CLOSE_MODAL');
  },
  showModalOrder(state, payload) {
    state.commit('showModalOrder', payload);
  },
  closeModalOrder(state) {
    state.commit('closeModalOrder');
  },
};
