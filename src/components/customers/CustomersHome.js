import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import MainLayout   from '.././layout/MainLayout'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getCustomers, deleteCustomer } from '../.././actions/actionsCustomers'


class CustomersHome extends Component {
    constructor(props){
        super(props)

        this.handleClickDelete = this.handleClickDelete.bind(this)
        this.buttonEdit = this.buttonEdit.bind(this)
        this.buttonDelete = this.buttonDelete.bind(this)
     
    }

    componentWillMount(){
       this.props.getCustomers()

    } 

    buttonEdit(cell, row){
     
        return <Link to={`/clientes/edit/`+row.id}    
        type="button" className="btn btn btn-info"><i className="fa fa-chevron-circle-down"></i> Editar </Link>
      
    }


    buttonDelete(cell, row){
    
         return <button onClick={()=>{ this.handleClickDelete(row.id)}} type="button" className="btn btn-danger">
         <i className="fa fa-times-circle"></i> Excluir</button>
      } 

      
    handleClickDelete = (customerId) => {
        confirmAlert({
          title: 'Excluir!',
          message: 'Você tem certeza que deseja excluir o Cliente',
          buttons: [
            {
              label: 'Sim',
              onClick: () => this.props.deleteCustomer(customerId)
            }, 
            {
              label: 'Não',
              onClick: () => this.props.getCustomers()
            }
          ]
        })
      };


    render(){
    
        return(
            <MainLayout title="Clientes">   

            <BootstrapTable 
                    ref='table' 
                    data={ this.props.customers}
                    pagination={ true }
                    searchPlaceholder={"Filtrar"}
                    search={ true }>
                    <TableHeaderColumn ref="id" dataField='id' isKey={true}>#</TableHeaderColumn>
                    <TableHeaderColumn dataField='nome'>Nome</TableHeaderColumn>
                    <TableHeaderColumn dataField='telefone'>Telefone</TableHeaderColumn>
                    <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='button'  dataAlign='center' dataFormat={this.buttonEdit} >Editar</TableHeaderColumn>
                    <TableHeaderColumn dataField='button'  dataAlign='center' dataFormat={this.buttonDelete} >Excluir</TableHeaderColumn>
                                   
             </BootstrapTable>
        
            </MainLayout>
        )
    }

}

function mapStateToProps(state){
    return {customers:state.customer.customers}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCustomers, deleteCustomer}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomersHome)

