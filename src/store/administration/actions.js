import { createUserPreRegister, listUsersByStatus } from '@/services/api/user';
import { getAllOccupations } from '@/services/api/occupations';

export const actions = {
  async fetchPersonRegister(state, cpf) {
    try {
      const userExists = await checkPersonRegisterExistsByCpf(cpf);

      if (userExists) {
        state.dispatch(
          'modal/showModal',
          {
            title: 'A conta de usuário já existe',
            message:
              'Detectamos que uma conta já está cadastrada com o CPF informado.',
            buttonText: 'VOLTAR PARA LOGIN',
          },
          {
            root: true,
          }
        );
      } else {
        state.commit('setCpfPreRegistration', cpf);
        await state.dispatch('loadUserPreRegistrationForm');
      }
    } catch (error) {
      state.dispatch(
        'modal/showModal',
        {
          title: 'Erro ao processar a requisição!',
          message: 'Se o problema persistir, favor contatar o suporte.',
          buttonText: 'VOLTAR PARA LOGIN',
        },
        {
          root: true,
        }
      );
    }
  },
  async loadUserPreRegistrationForm(state) {
    await state.dispatch('fetchListFields');
    state.dispatch('authentication/setMode', 5, { root: true });
  },
  async fetchListFields(state) {
    try {
      const [hospitals, professionalCouncils, occupations] = await Promise.all([
        getAllHospitals(),
        getAllProfessionalCouncils(),
        getAllOccupations(),
      ]);

      state.commit('setHospitals', hospitals.data.result);
      state.commit('setProfessionalCouncils', professionalCouncils.data.result);
      state.commit('setOccupations', occupations.data.result);
    } catch (error) {
      state.dispatch(
        'modal/showModal',
        {
          title: 'Erro ao processar a requisição!',
          message: 'Se o problema persistir, favor contatar o suporte.',
          buttonText: 'VOLTAR PARA LOGIN',
        },
        {
          root: true,
        }
      );
    }
  },
  async fetchListUsers(state, status) {
    try {
      const dataUsers = await listUsersByStatus(status);
      state.commit('setPendingUsers', dataUsers.data.result)
    } catch (error) {
      state.dispatch(
        'modal/showModal',
        {
          title: 'Erro ao processar a requisição!',
          message: 'Se o problema persistir, favor contatar o suporte.',
          buttonText: 'VOLTAR PARA LOGIN',
        },
        {
          root: true,
        }
      );
    }
  },
  async preRegisterNewUser(state, user) {
    try {
      await createUserPreRegister(user);

      state.dispatch(
        'modal/showModal',
        {
          title: 'Cadastro realizado',
          message:
            'Seus dados foram submetidos e agora está pendente de aprovação pela gestão do hospital. \nAguarde e-mail de confirmação para ter acesso ao sistema.',
          buttonText: 'VOLTAR PARA O LOGIN',
        },
        {
          root: true,
        }
      );
    } catch (error) {
      state.dispatch(
        'modal/showModal',
        {
          title: 'Erro ao processar a requisição!',
          message: 'Se o problema persistir, favor contatar o suporte.',
          buttonText: 'VOLTAR PARA O LOGIN',
        },
        {
          root: true,
        }
      );
    } finally {
      state.dispatch('resetPreRegistration');
    }
  },
  resetPreRegistration(state) {
    state.commit('resetPreRegistration');
  },
};
