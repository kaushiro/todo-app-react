import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.10.10/api/",
    headers: {
        Accept: "application/json",
    },
});