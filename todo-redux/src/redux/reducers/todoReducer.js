import { ADD_TODO, EDIT_TODO } from "../actions/actionTypes";

const initialState=[{
    id:1,
    description:""
}]


const todoReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ADD_TODO:
          return [...state,payload]
        case EDIT_TODO:
          return state.map(el=>el.id===payload.id ? { ...el,description:payload.description}:el)
          default:
        return state
}
}
export default todoReducer
