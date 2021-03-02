import { getList, getListFiltered, create, update, deleteList  } from '@/services/api/api-adapter';
import List from '@/model/list';
import Filter from '@/model/filter';
import Order from '@/model/order';

const ERROR_HTTP_422 = 422;

export const actions = {
  setModelSelectedDeleted(state, deleteSelected){
    state.commit('setModelSelectedDeleted', deleteSelected);
  },
  setModelSelectedFilter(state, filterSelected){
    state.commit('setModelSelectedFilter', filterSelected);
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
      state.commit('setmodelListLoading', true);
      
      var filterParam = [];
      
      const filterSelected = state.getters.getModelSelectedFilter;
      
      filterSelected.forEach((filterSelected)=>{
        filterParam.push(new Filter(searchValue, null, filterSelected.field));
      })

      state.commit('setFilter', filterParam);
      
      var result = await getListFiltered(state.getters.getFilter);
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
  async fetchList(state, listParams) {
    try {
      state.commit('setmodelListLoading', true);
      var result = await getList(listParams);
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
        state.dispatch(
          'modal/showModal',
          {
            title: 'Operação realizada com sucesso',
            message:
            'Cadastro realizado',
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
  async fetchEdit(state, model) {
    try {
      const result = await update(model);
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
      var result = null;
      await list.forEach(async(model)=>{
        result = await deleteList(model.idDriver);
      })
      //const result = await deleteList(list);
      state.dispatch(
        'modal/showModal',
        {
          title: 'Operação realizada com sucesso',
          message:'Items deletados',
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
  },
  edit(){
  }
};
