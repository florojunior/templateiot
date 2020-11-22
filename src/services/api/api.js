import httpClient from '@/plugins/axios';
import { apiPath } from '../../model/configController';

/**
 * Protocol: 001 - API to list trackers (hospitals)
 */
const getList = async () => httpClient.get(`${apiPath}/?$format=json`, {
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
 * Protocol: 003 - API to list trackers (hospitals)
 */
const getListFiltered = async (filter, order) => {
    console.log(filter, order);
    return httpClient.get(`${apiPath}/?${castFilterToString(filter)}${castOrderToString(order)}$format=json`, {
        auth: {
            username: 'L4D_ADMIN',
            password: 'First@123' // Bad password
        }
    }); 
}

//const getListOrder

function castFilterToString(filter){
    if(filter && filter.value && filter.value != "" )
        return `$filter=${generateFilterExpression(filter)}&`
    else
        return ""; 
}

function generateFilterExpression(filter){

    var expression = "";
    filter.field.forEach((element, index, array)=>{
        if(index != (array.length-1))
            expression += `substringof(${element},'${filter.value}') or `
        else
        expression += `substringof(${element},'${filter.value}')`
    })

    return expression;
}

function castOrderToString(order){
    if(order)
        return `$orderby=${order.field} ${order.direction}&`
    else
    return "";
}

export { getList, create, getListFiltered };
