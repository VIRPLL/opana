import {axiosService} from "./axiosService";
import {urls} from "../config";

export const todosService = {
    getAll: () => axiosService.get(urls.todos)
}