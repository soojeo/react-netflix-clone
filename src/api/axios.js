import axios from "axios";


const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params:{
        api_key:"4a87bdec7a5238474ac7df3ab81aa624",
        language: "ko-KR",
    },
});

export default instance;