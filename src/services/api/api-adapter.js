import httpClient from '@/plugins/axios';
import { apiPath } from '../../model/configController';

const getList = async () => {
    console.log('chegou aqui 2');
    return await httpClient.get(`${apiPath}/query?driver=%7B"dsDriverName":"JOAO DA SILVA"%7D`, {
        /*  auth: {
              username: 'L4D_ADMIN',
              password: 'First@123' // Bad password
          }*/
          auth: {
              username: 'yard',
              password: 'yard' // Bad password
          }
      })
};

const create = async (model) => {
    return httpClient.post(`${apiPath}`, model ,{
        auth: {
            username: 'yard',
            password: 'yard' // Bad password
        }
    });
  };

  const update = async (model) => {
    return httpClient.put(`${apiPath}/${model.id}`, model ,{
        auth: {
            username: 'L4D_ADMIN',
            password: 'First@123' // Bad password
        }
    });
  };

const getListFiltered = async (filter, order) => {
    console.log(filter, order);
    return httpClient.get(`${apiPath}/${filter}/${order}`, {
        auth: {
            username: 'L4D_ADMIN',
            password: 'First@123' // Bad password
        }
    }); 
}

const deleteList = async (list) => {
    console.log(list);
    return httpClient.delete(`${apiPath}`, model ,{
        auth: {
            username: 'L4D_ADMIN',
            password: 'First@123' // Bad password
        }
    });
}

export { getList, create, update, getListFiltered, deleteList };
