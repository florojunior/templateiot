import * as configModule from '../configController';

export default class ListAbstract {

    constructor(listItems) {    
        this.listItems = listItems;
        this.headers = [];
    }

    static getListHeader(){
        var headers = [];
        var listItemField = configModule.listItemField;
        for(var unidade in listItemField){
            headers.push(
                {
                    text: listItemField[unidade],
                    align: 'start',
                    sortable: true,
                    value: unidade,
                    class: 'text-uppercase fontsPrimaryVariant--text background darken-2',
                });
        }

        return headers;
    }

    static getListFieldsFilter(){

        var listItemField = configModule.filterFieldList;
        return listItemField;

    }
    getList(){
        return this.listItems;
    }

}