export const mutations = {
  setMensagemSucesso(state, mensagemSucesso) {
    state.mensagemSucesso = mensagemSucesso;
  },
  setUnidadeSelecionada(state, payload){
    state.unidadeSelecionada = payload
  },
  setUnidadesUsuario(state, payload){
    state.unidadesUsuario = payload
  },
  setMode(state, payload){
    state.mode = payload
  },
  setUser(state, payload){
    state.user = payload
  },
  setMenu(state, payload){
    state.menu = payload
  },
  SET_IS_FORGOT_PASSWORD(state, payload) {
    state.isForgotPassword = payload;
  },
};
