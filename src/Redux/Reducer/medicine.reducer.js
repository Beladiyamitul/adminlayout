import * as ActionType from "../ActionType"


export const initalstate ={

    isLoading : false,
    medicine : [],
    error : ""


}



export const medicineReducer = (state=initalstate , action) =>{

    console.log(action.type , action.payload);

    switch (action.type) {
        case ActionType.GET_MEDICINE : 
            return {
                ...state,
                isLoaing : false,
                medicine: action.payload,
                error: ""
            }
            default :
              return state

    }

}