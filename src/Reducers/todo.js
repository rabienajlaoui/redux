import {ADD,DEL,EDIT,DONE} from '../Actions/types'

const todo = (state = {taskList:[]},action) => {
    switch (action.type) {
        case ADD :
            return {...state,taskList:[...state.taskList,action.payload]}
        case DEL:
            return {...state,taskList:state.taskList.filter(task=>task.id!==action.payload)}
        case EDIT:
            return {...state,taskList:state.taskList.map(task=>task.id===action.payload.id ? {...task,desc:action.payload.desc} : task )};
        case DONE:
            return {...state,taskList:state.taskList.map(task=>task.id===action.payload ? {...task,done: !task.done} : task)}
        default: return state
    }
}
export default todo