export const actions = {
  setMensagemSucesso(state, mensagem, error) {
    state.commit('setMensagemSucesso', {
      mensagem,
      error,
    });
  },
  setUnidadeSelecionada(state, payload) {
    state.commit('setUnidadeSelecionada', payload);
  },
  setUnidadesUsuario(state, payload) {
    state.commit('setUnidadesUsuario', payload);
  },
  setUser(state, payload) {
    state.commit('setUser', payload);
  },
  setMenu(state, payload) {
    state.commit('setMenu', payload);
  },
  setIsForgotPassword(state, payload) {
    state.commit('SET_IS_FORGOT_PASSWORD', payload);
  },
  setMode(state, payload) {
    state.commit('setMode', payload);
  }
};
