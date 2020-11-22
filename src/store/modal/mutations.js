export const mutations = {
  SHOW_MODAL(state, payload) {
    state.modal = {
      title: payload.title,
      message: payload.message,
      buttonText: payload.buttonText,
      show: true,
    };
  },
  CLOSE_MODAL(state) {
    state.modal = {
      title: '',
      message: '',
      buttonText: '',
      show: false,
    };
  },
  closeModalOrder(state) {
    state.modalOrder = {
      title: '',
      message: '',
      buttonText: '',
      show: false,
    };
  },
  showModalOrder(state) {
    state.modalOrder = {
      title: '',
      message: '',
      buttonText: '',
      show: true,
    };
  }
};
