import {axiosService} from "./axiosService";
import {urls} from "../configs";

export const userService = {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`)
}