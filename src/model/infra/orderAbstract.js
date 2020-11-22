import { orderItensFields, directionItensFields } from '../configController';

export default class OrderAbstract {
    
    constructor(field, direction) {
        this.direction = direction;
        this.field = field; 
        
        /*Add to orderField All field that could be ordered*/
        this.orderField = [];
        orderItensFields.forEach((element)=> this.orderField.push(this.genereteOrderItem(element.description, element.field)));
        /*Add directions that could be used - DEFAULT ASC and DESC*/    
        this.orderDirection = [];
        directionItensFields.forEach((element)=> this.orderDirection.push(this.genereteDirectionItem(element.description, element.field)));
    }

    getOrderListHeader(){
        return this.orderField;
    }

    getDirectionHeader(){
        return this.orderDirection;
    }

    genereteOrderItem(description, field){
        return {
            description: description,
            field: field
        }
    }

    genereteDirectionItem(description, field){
        return {
            description: description,
            field: field
        }
    }

}