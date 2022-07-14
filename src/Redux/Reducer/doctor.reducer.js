import * as ActionType from "../ActionType"


export const initalstate = {

    isLoading: false,
    doctor: [],
    error: ""


}



export const doctorReducer = (state = initalstate, action) => {

    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionType.LOADING_MEDICINE:
            return {
                ...state,
                isLoading: true,

                error: ""
            }
        case ActionType.GET_DOCTOR:
            return {
                ...state,
                isLoading: false,
                doctor: action.payload,
                error: ""
            }

       
        case ActionType.ERROR_MEDICINE:
            return {
                ...state,
                isLoading: false,
                doctor: [],
                error: action.payload
            }
        default:
            return state

    }

}