import {axiosService} from "./axiosService";
import {urls} from "../config";

export const commentsService = {
    getAll:()=>axiosService.get(urls.comments)
}