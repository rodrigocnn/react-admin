import Api from '.././Api'
import axios from 'axios'

export function changeValue(e){
    return {
        type:'VALUE_CHANGED_AWARD',
        field: e.target.name,
        value: e.target.value
    }
}
export function storeAward3(award){
    const res =  Api.awardAdd(award)
    return{
        type:'STORE_AWARD',
        payload: res
    }
}
export function storeAward(award){
    return dispatch =>{
        Api.awardAdd(award)
        .then( res => dispatch({ type:'STORE_AWARD', payload: res }))
        
    }
}
export function  getAwards(){
    const awards = Api.getAwards()
    return{
        type:'GET_AWARDS',
        payload: awards
    }
}

export function deleteAward (id){
    return dispatch =>{
        Api.deleteAward(id)
        .then( res => dispatch({ type:'DELETE_AWARD'}))
        .then( res => dispatch(getAwards()))    
    }
}

export function getAwardEdit(id){

    const award = Api.getAwardEdit(id)
    
        return{
            type:'GET_AWARD_EDIT',
            payload: award
        }
}






