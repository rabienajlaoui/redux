import {ADD,DEL,EDIT,DONE} from './types';

export const addtodo = (payload) => {
    return {
             type: ADD,
             payload
    }
}


export const deltodo = (payload) => {
    return{
             type: DEL,
             payload
        
    }
}


export const edittodo = (payload) => {
    return{
             type: EDIT,
             payload
        
    }
}


export const donetodo = (payload) => {
    return{
             type: DONE,
             payload
        
    }
}