import { BASE_URL } from "../../shared/baseUrl"
import * as Actiontype from "../ActionType"


export const doctordata = () => (dispatch) => {
  try {
    dispatch(loadingMedicin())
    setTimeout(function () {
      return  fetch(BASE_URL + 'doctors')
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
        .then(doctor => dispatch({ type: Actiontype.GET_DOCTOR, payload: doctor }))
        .catch((error) => dispatch(errorMedicin(error.message)) )
    }, 2000)
  } catch (error) {
    dispatch(errorMedicin(error.message));
  }
}


export const loadingMedicin = () => (dispatch) => {
  dispatch({ type: Actiontype.LOADING_MEDICINE })
}

export const errorMedicin = (error) => (dispatch) =>{
  dispatch({type: Actiontype.ERROR_MEDICINE , payload:error})
}

