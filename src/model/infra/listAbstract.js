import { listItemField } from '../configController';

export default class ListAbstract {

    constructor(listItems) {    
        this.setMapFields();
        this.listItems = listItems;
    }

    setMapFields(){
        this.mapField = new Map();
        this.mapField.set("title", listItemField.title);
        this.mapField.set("id", listItemField.id);
        this.mapField.set("description", listItemField.description);
        this.mapField.set("subdescription", listItemField.subdescription);
        this.mapField.set("active", listItemField.active);
    }  

    getList(){
        return this.listItems.map((element)=>{
            return {
                title: element[this.mapField.get("title")],
                id: element[this.mapField.get("id")],
                description: element[this.mapField.get("description")],
                subdescription: element[this.mapField.get("subdescription")],
                active: element[this.mapField.get("active")]
            }
        })
    }

}