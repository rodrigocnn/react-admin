const INITIAL_STATE =  {
    "customerEdit":{
          "id": null,
          "nome": "",
          "cpf": "",
          "sexo": "",
          "data_nascimento": "",
          "email": "",
          "telefone": ""
        }
}

export default function (state = INITIAL_STATE, action){
    
    switch(action.type){
        case 'VALUE_CHANGED':
            return {...state,  [action.field]: action.value}

        case 'STORE_CUSTOMER':
            return {...state, customer: action.payload}

        case 'GET_CUSTOMERS':
            return {...state, customers: action.payload.data}

        case 'GET_CUSTOMER_EDIT':
            return {...state, customerEdit: action.payload.data}
    
        case 'DELETE_CUSTOMER':
            return state

        case 'ADD_POINT':
            return {...state, points: action.payload.data}
        
        default: 
            return state
    }
}



