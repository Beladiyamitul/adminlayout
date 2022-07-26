import * as ActionType from "../Actiontype"

export const ThemeReducer = (state , action) => {
 
    switch (action.type) {
        case ActionType.TOOGLE_THEME:
            return{
                ...state,
                theme: action.payload
            }   
        
    
        default:
            break;
    }

}