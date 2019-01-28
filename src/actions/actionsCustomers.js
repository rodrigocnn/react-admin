import Api from '.././Api'


export function storeCustomer(customer){
   
     Api.customerAdd(customer).then( res => {
        console.log("Cadastrado com Sucesso!")
     
     }
   )
    return {
        type:'STORE_CUSTOMER',
        payload: customer
    }
}

export function getCustomers(){
    const customers = Api.getCustomers()
    return{
        type:'GET_CUSTOMERS',
        payload: customers
    }
}

export function getCustomerEdit(id){
    
    const customer = Api.getCustomerEdit(id)
    return {
        type:'GET_CUSTOMER_EDIT',
        payload: customer
    }
}

export function getCustomerForScore(e){
     return {
        type:'GET_CUSTOMERS_FOR_SCORE',
        payload: e.target.value
    }
}

export function deleteCustomer(id){
    return dispatch =>{
        Api.deleteCustomer(id)
        .then( res => dispatch({ type:'DELETE_CUSTOMER'}))
        .then( res => dispatch(getCustomers()))    
    }
}

export function changeValue(e){
    return {
        type:'VALUE_CHANGED',
        field: e.target.name,
        value: e.target.value
    }
}
