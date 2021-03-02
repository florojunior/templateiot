import httpClient from '@/plugins/axios';
import { apiPath, detailPath, deleteParam } from '../../model/configController';

const getList = async (obj) => {
    return await httpClient.get(`${apiPath}/query?${detailPath.detail_path}=%7B"dsDriverName":"${obj.filter.value}"%7D`, {
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
    return httpClient.put(`${apiPath}`, model ,{
        auth: {
            username: 'yard',
            password: 'yard' // Bad password
        }
    });
};

const getListFiltered = async (filter) => {
    var filterStringPath = filter.reduce((before, actual, index, array) =>{
        return (before ? (before + `"${actual.field}":"${actual.value}"`+",") : (`"${actual.field}":"${actual.value}"`+","))
    },null);

    filterStringPath = filterStringPath.substring(0,filterStringPath.length-1);
    
    return await httpClient.get(`${apiPath}/query?${detailPath.detail_path}=%7B${filterStringPath}%7D`, {
    /*  auth: {
            username: 'L4D_ADMIN',
            password: 'First@123' // Bad password
        }*/
        auth: {
            username: 'yard',
            password: 'yard' // Bad password
        }
    });   
}

const deleteList = async (id) => {
    var basicAuth = 'Basic ' + btoa('yard' + ':' + 'yard');
    var dataObject = {};
    dataObject[deleteParam.objectName] = {};
    dataObject[deleteParam.objectName][deleteParam.paramName] = id;

    await httpClient.delete(`${apiPath}`,{
        headers: {
            Authorization: basicAuth
        },
        data: dataObject
    });
}

export { getList, create, update, getListFiltered, deleteList };
