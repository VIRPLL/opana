import {axiosService} from "./axiosService";
import {urls} from "../config";

export const albumsService = {
    getAll:()=>axiosService.get(urls.albums)
}