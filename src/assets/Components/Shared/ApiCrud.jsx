import {api} from '../../../../Config/apiconfig'
export const GetData = async(endpoint,data)=>{
    return await api.get(endpoint,data)

}