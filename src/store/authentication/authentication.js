import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  mensagemSucesso: {
    mensagem: 'Mensagem',
    erro: true,
  },
  unidadeSelecionada: null,
  unidadesUsuario: [],
  setUser: {},
  menu: {},
  mode: 2
    // 1 - ForgotPasswordMode
    // 2 - AuthenticateMode - default
    // 3 - NewPasswowrdMode
  ,
  isForgotPassword: true,
};

export const authentication = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
