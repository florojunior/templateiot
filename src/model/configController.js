const DEFAULT_ROUTER_PATH = "/driver";
const DEFAULT_API_PATH = "/driver";
const API_SEARCH_FIELD = [ "dsDriverName"];

const OBJECT_LIST_ITEM_FIELDS = {
    dsDriverName : "Nome",
    nrDriverPhone: "Telefone"
};

const ORDER_LIST_ITEM_FIELDS = [
    { description: "Placa", field: "dsTruckPlate" },
    { description: "Região", field: "dsTruckRegion" }
];

const FILTER_LIST_ITEM_FIELDS = [
    { description: "Nome do motorista", field: "dsDriverName" },
    { description: "Nome do motorista Sec", field: "dsDriverName" },
    { description: "Telefone", field: "nrDriverPhone" },
];

const DiRECTION_LIST_ITEM_FIELDS = [
    { description: "Crescente", field: "asc" },
    { description: "Decrescente", field: "desc" }
];

const LABELS = {
    formHeaderTitle: "Cadastrar Novo Motorista",
    formEditHeaderTitle: "Editar Motorista"
    
}

const DETAIL_PATH = {
    detail_path: "driver"
}

const DELETE_PARAM_OBJECT = {
    objectName: "driver",
    paramName: "idDriver",
}


export { 
    DEFAULT_ROUTER_PATH as routerPath, 
    DEFAULT_API_PATH as apiPath, 
    API_SEARCH_FIELD as searchField,
    OBJECT_LIST_ITEM_FIELDS as listItemField,
    ORDER_LIST_ITEM_FIELDS as orderItensFields,
    DiRECTION_LIST_ITEM_FIELDS as directionItensFields,
    LABELS as LABELS,
    DETAIL_PATH as detailPath,
    DELETE_PARAM_OBJECT as deleteParam,
    FILTER_LIST_ITEM_FIELDS as filterFieldList
}; 