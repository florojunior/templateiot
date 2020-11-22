export const actions = {
  showNotification(state, notification) {
    state.commit('SHOW_NOTIFICATION', notification);
  },
  closeNotification(state) {
    state.commit('CLOSE_NOTIFICATION');
  },
};
