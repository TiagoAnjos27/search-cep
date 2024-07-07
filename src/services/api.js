import axios from "axios";

// 63046530/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;