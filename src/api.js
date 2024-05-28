import axios from "axios";

export default {
    getPicture(name){
        return axios.get('http://localhost:8080/file/Get',name);
    },
    getmp4(name){
        return axios.get('http://localhost:8080/file/Get_Mp4',name)
    }
};
