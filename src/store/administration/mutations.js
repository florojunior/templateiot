export const mutations = {
  setCpfPreRegistration(state, cpf) {
    state.preRegistration.cpf = cpf;
  },
  setHospitals(state, hospitals) {
    state.preRegistration.hospitals = hospitals;
  },
  setProfessionalCouncils(state, professionalCouncils) {
    state.preRegistration.professionalCouncils = professionalCouncils;
  },
  setOccupations(state, occupations) {
    state.preRegistration.occupations = occupations;
  },
  resetPreRegistration(state) {
    state.preRegistration = {
      cpf: null,
      hospitals: [],
      professionalCouncils: [],
      occupations: [],
    };
  },
  setPendingUsers(state, pendingUsers) {
    state.pendindUserslist = pendingUsers;
  },
};
