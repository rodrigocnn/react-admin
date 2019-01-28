import Api from '.././Api'

export function addPointCustomer(points){
    
    const res =  Api.pointsdAdd(points)
    return{
        type:'STORE_POINTS',
        payload: res
    }
}

export function changeValue(e){
    return {
        type:'VALUE_CHANGED_POINTS',
        field: e.target.name,
        value: e.target.value
    }
}

export function getCustomerForPoints(codeCustomer){
   const customer = Api.getCustomerEdit(codeCustomer)
    return{
        type:'GET_CUSTOMER_FOR_POINTS',
        payload: customer
    }
}


