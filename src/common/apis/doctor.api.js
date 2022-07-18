import { deleteRequest, getRequest, postRequest } from "../request"


export const getDoctordata = () =>{
    return getRequest('doctors')
}

export const postDoctordata = (data) =>{
    return postRequest('doctors', data)
}

export const deleteDoctordata = (id) =>{
    return deleteRequest('doctors/', id)
}