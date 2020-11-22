export const mutations = {
  SHOW_NOTIFICATION(state, payload) {
    state.notification = {
      message: payload.message,
      type: state.NOTIFICATION_TYPES.includes(payload.type)
        ? payload.type
        : 'default',
      show: true,
    };
  },
  CLOSE_NOTIFICATION(state) {
    state.notification = {
      message: '',
      type: 'default',
      show: false,
    };
  },
};
