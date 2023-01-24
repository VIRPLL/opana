import {axiosService} from "./axiosService";

export const userService = {
    getAll:()=>axiosService.get("/users"),
    getById:(id)=>axiosService.get(`/users/${id}`)
}