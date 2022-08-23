import { async } from "@firebase/util"
import { addDoc, collection } from "firebase/firestore"
import { deleteDoctor, deleteDoctordata, getDoctordata, postDoctordata, updateDoctor } from "../../common/apis/doctor.api"
import { db } from "../../firebase"
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



export const addDoctordata = (data) => async (dispatch) => {
  try {
    dispatch(loadingMedicin())

    const docRef = await addDoc(collection(db, "Doctors"), data);
    dispatch({type:Actiontype.POST_DOCTOR, payload:{id: docRef.id , ...data}})
    // console.log("Document written with ID: ", docRef.id);
    
    // postDoctordata(data)
    //     .then((data) => dispatch({ type: Actiontype.POST_DOCTOR, payload: data.data }))
    //     .catch((error) => dispatch(errorMedicin(error.message)))

  } catch (error) {
    dispatch(errorMedicin(error.message));
    console.error("Error adding document: ", error);
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
  console.log(data);
  try {
    dispatch(loadingMedicin())

   return  updateDoctor(data)
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

