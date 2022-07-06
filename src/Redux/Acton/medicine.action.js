import { BASE_URL } from "../../shared/baseUrl"
import * as Actiontype from "../ActionType"


export const meddata = () => (dispatch) => {

  // dispatch ({type:Actiontype.GET_MEDICINE})



  try {
    dispatch(loadingMedicin())
    setTimeout(function () {
      fetch(BASE_URL + 'Doctors')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
          error => {
            var errmess = new Error(error.message);
            throw errmess;
          }
        )
        .then(response => response.json())
        .then(medicines => dispatch({ type: Actiontype.GET_MEDICINE, payload: medicines }))
    }, 2000)
    .catch(error =>  dispatch({ type: Actiontype.ERROR_MEDICINE, payload: error.message}))


  } catch (error) {
    console.log(error);
  }


}



export const loadingMedicin = () => (dispatch) => {
  dispatch({ type: Actiontype.LOADING_MEDICINE })
}

export const errorMedicin = (error) => (dispatch) =>{
  dispatch({type: Actiontype.ERROR_MEDICINE , payload:error})
}
