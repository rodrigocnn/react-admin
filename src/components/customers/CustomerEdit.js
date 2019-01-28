import React, {Component} from 'react'
import MainLayout   from '.././layout/MainLayout'
import Input   from '.././layout/Input'
import {connect} from 'react-redux'
import {bindActionCreators}  from 'redux'
import {changeValue, storeCustomer,  getCustomerEdit} from '.././actions/actionsCustomers'

class CustomerEdit extends Component {
    
    constructor(props){
        super(props)
    }

     handleSumit = (event)=> {  
        event.preventDefault();
        this.props.storeCustomer(this.props.customer)
    }

    componentWillMount(){
       const idCustomer = this.props.match.params.id
        this.props.getCustomerEdit(idCustomer)

    }

    render(){
        
       const { nome, cpf } = this.props.customer.customerEdit 

        return(
            <MainLayout title="Cadastrar Cliente">

                <form name="contactform" className="contactform" onSubmit={this.handleSumit}>
                            
                        <Input name="nome" label='Nome Completo' setvalue={nome} getvalue={this.props.changeValue} type="text"> </Input> 
                        <Input name="cpf"  label='CPF'  setvalue={cpf}  getvalue={this.props.changeValue} type="text"> </Input> 

                        <div className="form-group">
                            <label className="col-sm-12">Sexo</label>
                            <div className="col-sm-12">
                                <select onChange={this.props.changeValue}   name="sexo" className="form-control">
                                <option value="">Selecione Sexo</option>
                                <option value='Masculino'>Masculino</option>
                                <option value='Feminino'>Feminino</option>
                                </select>
                            
                            </div>
                        </div>

                        <Input name="data_nascimento"  label='Data de Nascimento' getvalue={this.props.changeValue} type="text"> </Input> 
                        <Input name="email"  label='E-mail' getvalue={this.props.changeValue} type="text"> </Input> 
                        <Input name="telefone"  label='Telefone' getvalue={this.props.changeValue} type="text"> </Input> 
                        
                        <div className="form-group">
                            <button className="btn btn-info waves-effect waves-light m-r-10" >Salvar</button>
                        </div>
                                    
                 </form> 
            
     </MainLayout>
        )
    }
        
    
}

function mapStateToProps(state){
    return {customer: state.customer}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeValue, storeCustomer, getCustomerEdit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEdit )

