import { GETALLLISTE, GETONELISTE } from "./ActionTypes"

const initialState = {
    Liste : [],
    OneListe : {}
}

const Reducer=(state=initialState, action)=>{
    switch (action.type) {
        case GETALLLISTE : return {...state, Liste : action.payload}
        case GETONELISTE : return {...state, OneListe : action.payload}
        default: return state
    }
}

export default Reducer