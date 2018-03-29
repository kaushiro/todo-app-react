//import { Map } from "immutable";



const setTasks = (state, { tasks }) => state.set("tasks", tasks);
// create a function that returns a new article Map
const createTask = ({ task }) => {

    return (
        task: task
    );
};
const editTask = (state, {id, tasks}) => state.update("tasks", tasks =>
	tasks.map(a => {
        if (a.get("id") === id) {
            return a.set("task", task);
        } else {
            return a;
        }
    }
))
// use the createArticle function
const addTask = (state, action) => state.update("tasks", tasks => tasks.push(createTask(action)));

const reducer = (state, action) => {
    switch (action.type) {
        
        case "setTasks": return setTasks(state, action);
        case "addTask": return addTask(state, action);
         case "editTask": return editTask(state, action);
        default: return state;
    }
}

export default reducer