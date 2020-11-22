export const getters = {
  getCpfPreRegistration: (state) => state.preRegistration.cpf,
  getHospitals: (state) => state.preRegistration.hospitals,
  getProfessionalCouncils: (state) =>
    state.preRegistration.professionalCouncils,
  getOccupations: (state) => state.preRegistration.occupations,
  getPendindUserslist: (state) => state.pendindUserslist,
};
