const DEFAULT_ROUTER_PATH = "/driver";
const DEFAULT_API_PATH = "/driver";
const API_SEARCH_FIELD = [ "dsPlate", "dsRegion", "dsCompany"];
const OBJECT_LIST_ITEM_FIELDS = {
    dsDriverName : "Nome",
    nrDriverPhone: "Telefone" // TODO: mudar para STATUs , adicionar COR
};
const ORDER_LIST_ITEM_FIELDS = [
    { description: "Placa", field: "dsTruckPlate" },
    { description: "Região", field: "dsTruckRegion" }
];

const DiRECTION_LIST_ITEM_FIELDS = [
    { description: "Crescente", field: "asc" },
    { description: "Decrescente", field: "desc" }
];


export { 
    DEFAULT_ROUTER_PATH as routerPath, 
    DEFAULT_API_PATH as apiPath, 
    API_SEARCH_FIELD as searchField,
    OBJECT_LIST_ITEM_FIELDS as listItemField,
    ORDER_LIST_ITEM_FIELDS as orderItensFields,
    DiRECTION_LIST_ITEM_FIELDS as directionItensFields
}; 