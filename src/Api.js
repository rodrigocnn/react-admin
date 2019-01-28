import axios from 'axios'

const apis ={
    
    //CUSTOMERS
    customerAdd:(customers)=>  axios.post('http://localhost:3001/customers', customers),
    getCustomers:()=> axios.get('http://localhost:3001/customers'),
    getCustomerEdit:(idCustomer)=>  axios.get('http://localhost:3001/customers/'+idCustomer),
    deleteCustomer:(idCustomer)=>  axios.delete('http://localhost:3001/customers/'+idCustomer),
    //updateCustomer:(idCustomer)=>  axios.put('http://localhost:3001/customers/'+idCustomer, customer),
    
    //AWARDS
    getAwards:()=> axios.get('http://localhost:3001/awards'),
    awardAdd:(award)=> axios.post('http://localhost:3001/awards',award),
    getAwardEdit:(idAward)=>  axios.get('http://localhost:3001/awards/'+idAward),

     //AWARDS

     pointsdAdd:(points)=> axios.post('http://localhost:3001/points', points),
   
}

export default apis