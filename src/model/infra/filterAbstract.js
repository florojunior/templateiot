import { searchField } from '../configController';

const DEFAULT_SEARCH_FIELD = searchField;
const DEFAULT_SEARCH_METHOD = "eq";

export default class FilterAbstract{
    
    constructor(value, method, field) {    
        this.method = method ? method: DEFAULT_SEARCH_METHOD;
        this.field = field ? field: DEFAULT_SEARCH_FIELD;
        this.value = value;
    }

}