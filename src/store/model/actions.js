import { getList, getListFiltered, create  } from '@/services/api/api-adapter';
import List from '@/model/list';
import Filter from '@/model/filter';
import Order from '@/model/order';

export const actions = {
  setModelSelectedDeleted(state, deleteSelected){
    state.commit('setModelSelectedDeleted', deleteSelected);
  },
  async fetchListOrdered(state, order) {
    try {
      state.commit('setOrder', new Order(order.field, order.direction));
      
      var result = await getListFiltered(state.getters.getFilter, state.getters.getOrdered);
      result = new List(result.data.d.results);
  
      state.commit('setmodelList', result.getList());
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
  async fetchListFiltered(state, searchValue) {
    try {
      state.commit('setFilter', new Filter(searchValue));
      
      var result = await getListFiltered(state.getters.getFilter, state.getters.getOrdered);
      result = new List(result.data.d.results);
      
      state.commit('setmodelList', result.getList());
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
  async fetchList(state) {
    try {
      state.commit('setmodelListLoading', true);
      var result = await getList();
      result = new List(result.data.d.results);
      state.commit('setmodelList', result.getList());
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
    finally{
      state.commit('setmodelListLoading', false);
    }
  },
  async fetchRegister(state, tracker) {
    try {
      const result = await create(tracker);
        state.dispatch(
          'modal/showModal',
          {
            title: 'Operação realizada com sucesso',
            message:
            result.msg.body,
            buttonText: 'VOLTAR PARA TELA INICIAL',
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
          buttonText: 'VOLTAR PARA LOGIN',
        },
        {
          root: true,
        }
      );
    }
  }
};
