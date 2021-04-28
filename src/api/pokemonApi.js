import axiosClient from "./axiosClient";

const pokemonApi = {
    getAll(limit,offset){
        const url = `/pokemon?limit=${limit}&offset=${offset}`
        return axiosClient.get(url,{limit,offset})
    },

    get(id){
        const url = `/pokemon/${id}`
        return axiosClient.get(url)
    },

    add(data){
        const url = '/pokemon'
        return axiosClient.post(url,data)
    },

    update(data){
        const url = `/pokemon/${data.id}`
        return axiosClient.patch(url,data)
    },

    remove(id){
        const url = `/pokemon/${id}`
        return axiosClient.delete(url)
    }
}

export default pokemonApi;