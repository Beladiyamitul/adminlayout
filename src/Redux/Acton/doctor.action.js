import { deleteDoctor, deleteDoctordata, getDoctordata, postDoctordata, updateDoctor } from "../../common/apis/doctor.api"
import { BASE_URL } from "../../shared/baseUrl"
import * as Actiontype from "../ActionType"


export const doctordata = () => (dispatch) => {
  try {
    dispatch(loadingMedicin())

    getDoctordata()
      .then((data) => dispatch({ type: Actiontype.GET_DOCTOR, payload: data.data }))

  } catch (error) {
    dispatch(errorMedicin(error.message));
  }
}



export const addDoctordata = (data) => (dispatch) => {
  try {
    dispatch(loadingMedicin())

    
    postDoctordata(data)
        .then((data) => dispatch({ type: Actiontype.POST_DOCTOR, payload: data.data }))
        .catch((error) => dispatch(errorMedicin(error.message)))

  } catch (error) {
    dispatch(errorMedicin(error.message));
  }
}



export const deletDoctordata = (id) => (dispatch) => {
  try {
    dispatch(loadingMedicin())

    deleteDoctor(id)
        .then((data) => dispatch({ type: Actiontype.DELETE_DOCTOR, payload: id}))
        .catch((error) => dispatch(errorMedicin(error.message)))
 

  } catch (error) {
    dispatch(errorMedicin(error.message));
  }
}




export const updateDoctordata = (data) => (dispatch) => {
  try {
    dispatch(loadingMedicin())

    updateDoctor(data)
        .then((data) => dispatch({ type: Actiontype.UPDATE_DOCTOR, payload: data.data}))
        .catch((error) => dispatch(errorMedicin(error.message)))
 

  } catch (error) {
    dispatch(errorMedicin(error.message));
  }
}


export const loadingMedicin = () => (dispatch) => {
  dispatch({ type: Actiontype.LOADING_MEDICINE })
}

export const errorMedicin = (error) => (dispatch) => {
  dispatch({ type: Actiontype.ERROR_MEDICINE, payload: error })
}

