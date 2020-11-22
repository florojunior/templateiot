//import { searchField } from '../model/configController';
import FilterAbstract from './infra/filterAbstract'

/*const DEFAULT_SEARCH_FIELD = searchField;
const DEFAULT_SEARCH_METHOD = "eq";*/

export default class Filter extends FilterAbstract{
    
    constructor(value, method, field) {  
        super(value, method, field);  
        /*this.method = method ? method: DEFAULT_SEARCH_METHOD;
        this.field = field ? field: DEFAULT_SEARCH_FIELD;
        this.value = value;*/
    }

    

}