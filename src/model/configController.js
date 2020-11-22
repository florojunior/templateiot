const DEFAULT_ROUTER_PATH = "/truck";
const DEFAULT_API_PATH = "/Truck";
const API_SEARCH_FIELD = [ "dsPlate", "dsRegion", "dsCompany"];
const OBJECT_LIST_ITEM_FIELDS = {
    title: "dsPlate",
    id: "id",
    description: "dsRegion",
    subdescription: "dsRegion",
    active: "flLocked" // TODO: mudar para STATUs , adicionar COR
};
const ORDER_LIST_ITEM_FIELDS = [
    { description: "Placa", field: "dsPlate" },
    { description: "Região", field: "dsRegion" }
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