export const actions = {
  setMensagemSucesso(state, mensagem, error) {
    state.commit('setMensagemSucesso', {
      mensagem,
      error,
    });
  },
  setBreadCrumbsEditName(state, name) {
    state.commit('setBreadCrumbsEditName',name );
  },
};
