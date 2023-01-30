import {axiosService} from "./axiosService";
import {urls} from "../config";

export const postService = {
    postById:(id)=>axiosService.get(urls.postById(id))
}