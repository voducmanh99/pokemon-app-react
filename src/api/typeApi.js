import axiosClient from "./axiosClient";

const typeApi = {
    getAll(){
        const url = `/type`
        return axiosClient.get(url)
    },

    get(id){
        const url = `/type/${id}`
        return axiosClient.get(url)
    },

    add(data){
        const url = '/type'
        return axiosClient.post(url,data)
    },

    update(data){
        const url = `/type/${data.id}`
        return axiosClient.patch(url,data)
    },

    remove(id){
        const url = `/type/${id}`
        return axiosClient.delete(url)
    }
}

export default typeApi;