import { getList, getListFiltered, create, deleteList  } from '@/services/api/api-adapter';
import List from '@/model/list';
import Filter from '@/model/filter';
import Order from '@/model/order';

const ERROR_HTTP_422 = 422;

export const actions = {
  setModelSelectedDeleted(state, deleteSelected){
    state.commit('setModelSelectedDeleted', deleteSelected);
  },
  async fetchListOrdered(state, order) {
    try {
      console.log("chegou aqui 1");
      state.commit('setOrder', new Order(order.field, order.direction));
      
      console.log("chegou aqui 2");
      var result = await getListFiltered(state.getters.getFilter, state.getters.getOrdered);
      result = new List(result.data.d.results);
      console.log("chegou aqui 3");
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
      console.log("chamou aqui 1");
      state.commit('setmodelListLoading', true);
      var result = await getList();
      result = new List(result.data.driver);
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
  async fetchRegister(state, model) {
    try {
      const result = await create(model);
      console.log(result);

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
      if(error.response.status == ERROR_HTTP_422){
        state.dispatch(
          'modal/showModal',
          {
            title: 'Erro ao processar a requisição!',
            message: 'Motorista com CPF ou CNH já cadastrado!',
            buttonText: 'VOLTAR',
          },
          {
            root: true,
          }
        );
      }
    }
  },
  async fetchDeleteItems(state, list) {
    try {
      const result = await deleteList(list);
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
  },
  async setSelectedModelEdit(state, model){
    state.commit('setModelSelectedEdit', model);
  },
  save(){
    console.log('chamou');
  }
};
