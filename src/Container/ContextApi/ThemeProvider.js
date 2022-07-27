import { useReducer } from "react";
import * as ActionType from "./Actiontype"
import { createContext } from "react"
import { ThemeReducer } from "./Reducer/ThemeContext.reducer";





const intiVal =  {

    theme : 'light_theme'
}


const ContextApi = createContext();





export const ProviderTheme =({children}) => {

    const [state , dispatch] = useReducer(ThemeReducer , intiVal)
    
const toogle_theme = (theme) =>{
    
    const newTheme = theme === 'light_theme' ? 'dark_theme' : 'light_theme'
    dispatch({type: ActionType.TOOGLE_THEME , payload : newTheme})

}


return(

    <ContextApi.Provider 
        value={
            { ...state,
                toogle_theme
            }
        }
    >
        {children}
    </ContextApi.Provider>
)


}

export default ContextApi