import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

import { countries } from '@/utils/sa_countries.js'

const namespaced = true;

const state = {
  mensagemSucesso: {
    mensagem: 'Mensagem',
    erro: true,
  },
  countries: countries
};

export const main = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
