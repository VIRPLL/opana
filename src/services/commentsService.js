import {axiosService} from "./axiosService";

import {urls} from "../configs";

export const commentsService = {
    getAll:()=>axiosService.get(urls.comments),
    createComment:(data)=>axiosService.post(urls.comments, data)
}