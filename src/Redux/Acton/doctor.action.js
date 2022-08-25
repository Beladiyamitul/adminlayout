import { async } from "@firebase/util"
import { addDoc, collection , getDocs , doc, updateDoc, deleteDoc } from "firebase/firestore"
import { deleteDoctor, deleteDoctordata, getDoctordata, postDoctordata, updateDoctor } from "../../common/apis/doctor.api"
import { db } from "../../firebase"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { BASE_URL } from "../../shared/baseUrl"
import * as Actiontype from "../ActionType"


export const getdocdata = () => async (dispatch) => {
  try {
    dispatch(loadingMedicin())

    const querySnapshot = await getDocs(collection(db, "Doctors"));

    let dataget = [];

    querySnapshot.forEach((doc) => {
      dataget.push({id: doc.id, ...doc.data()})
    });
     dispatch({type:Actiontype.GET_DOCTOR, payload: dataget})
 

    // getDoctordata()
    //   .then((data) => dispatch({ type: Actiontype.GET_DOCTOR, payload: data.data }))

  } catch (error) {
    dispatch(errorMedicin(error.message));
  }
}



export const addDoctordata = (data) => async (dispatch) => {
  try {
    dispatch(loadingMedicin())

    const docRef = await addDoc(collection(db, "Doctors"), data);
    dispatch({type:Actiontype.POST_DOCTOR, payload:{id: docRef.id , ...data}})


    const storage = getStorage();
    const storageRef = ref(storage, 'some-child');

// 'file' comes from the Blob or File API

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    // console.log("Document written with ID: ", docRef.id);
    
    // postDoctordata(data)
    //     .then((data) => dispatch({ type: Actiontype.POST_DOCTOR, payload: data.data }))
    //     .catch((error) => dispatch(errorMedicin(error.message)))

  } catch (error) {
    dispatch(errorMedicin(error.message));
    console.error("Error adding document: ", error);
  }
}



export const deletDoctordata = (id) => async (dispatch) => {
  try {
    dispatch(loadingMedicin())

    await deleteDoc(doc(db, "Doctors", id));
    dispatch({ type: Actiontype.DELETE_DOCTOR, payload: id})

    // deleteDoctor(id)
    //     .then((data) => dispatch({ type: Actiontype.DELETE_DOCTOR, payload: id}))
    //     .catch((error) => dispatch(errorMedicin(error.message)))
 

  } catch (error) {
    dispatch(errorMedicin(error.message));
  }
}




export const updateDoctordata = (data) => async (dispatch) => {
  console.log(data);
  try {
    dispatch(loadingMedicin())

    const docDataRef = doc(db, "Doctors", data.id);
      await updateDoc(docDataRef, {
        name : data.name,
        email : data.email,
        sallery : data.sallery,
        post : data.post,
        experience : data.experience
      });

      dispatch({ type: Actiontype.UPDATE_DOCTOR, payload: data})

      

  //  return  updateDoctor(data)
  //       .then((data) => dispatch({ type: Actiontype.UPDATE_DOCTOR, payload: data.data}))
  //       .catch((error) => dispatch(errorMedicin(error.message)))
 

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

