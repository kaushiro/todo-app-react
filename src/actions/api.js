import axios from "../axios";
import history from "../history";


import {
    setTasks,
    addTask,
    editTask
    
} from "./state";

import { fromJS } from "immutable";

export const getTasks = () => dispatch => {
    axios.get("/tasks").then(response => {
        const tasks = fromJS(response.data);
        dispatch(setTasks(tasks));
    });
};

export const postTask = (data) => dispatch => {
	
    axios.post("/tasks", data).then(response => {
        const task = fromJS(response.data);
        dispatch(addTask(task));
    });
};

export const putTask = (id, data) => dispatch => {

    axios.put("/tasks/" + id, data).then(response => {
        const task = fromJS(response.data);
        dispatch(editTask(task));
        history.push("/tasks/" + id);
    });
};