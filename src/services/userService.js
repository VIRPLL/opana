import {axiosService} from "./axiosService";

import {urls} from "../configs";

export const userService = {
    getAll:()=>axiosService.get(urls.users),
    createUser:(data)=>axiosService.post(urls.users, data)
}