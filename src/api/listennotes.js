import axios from 'axios';

const KEY =process.env.REACT_APP_KEY;


export default axios.create({

    baseURL: "https://listen-api.listennotes.com/api/v2",
    headers:{
        "X-ListenAPI-Key": KEY
        
    }    

})
export const signal = axios.CancelToken.source();





