import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const namespaced = true;

const state = {
  preRegistration: {
    cpf: null,
    hospitals: [],
    professionalCouncils: [],
    occupations: [],
  },
  pendindUserslist: []
};

export const administration = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
