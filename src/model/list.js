//import { listItemField } from './configController';
import ListAbstract from './infra/listAbstract'

export default class List extends ListAbstract {

    constructor(listItems) {
        super(listItems);
    }
}