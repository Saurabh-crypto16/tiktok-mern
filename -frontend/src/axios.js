import axios from "axios"

const instance =axios.create({
    baseURL: "https://tiktok-back-mern.herokuapp.com/"
})

export default instance;