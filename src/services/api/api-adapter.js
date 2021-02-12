import httpClient from '@/plugins/axios';
import { apiPath } from '../../model/configController';

/**
 * Protocol: 001 - API to list trackers (hospitals)
 */
const getList = async () => httpClient.get(`${apiPath}/`, {
  /*  auth: {
        username: 'L4D_ADMIN',
        password: 'First@123' // Bad password
    }*/
    auth: {
        username: 'L4D_ADMIN',
        password: 'First@123' // Bad password
    }
});

/**
 * Protocol: 0002 - API to register tracker
 */
const create = async (model) => {
    return httpClient.post(`${apiPath}`, model ,{
        auth: {
            username: 'L4D_ADMIN',
            password: 'First@123' // Bad password
        }
    });
  };

/**
 * Protocol: 0002 - API to register tracker
 */
const update = async (model) => {
    return httpClient.put(`${apiPath}/${model.id}`, model ,{
        auth: {
            username: 'L4D_ADMIN',
            password: 'First@123' // Bad password
        }
    });
  };

 /**
 * Protocol: 003 - API to list trackers (hospitals)
 */
const getListFiltered = async (filter, order) => {
    console.log(filter, order);
    return httpClient.get(`${apiPath}/${filter}/${order}`, {
        auth: {
            username: 'L4D_ADMIN',
            password: 'First@123' // Bad password
        }
    }); 
}

export { getList, create, update, getListFiltered };
