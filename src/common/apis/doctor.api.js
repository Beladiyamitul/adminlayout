import { getRequest } from "../request"


export const getDoctordata = () =>{
    return getRequest('doctors')
}