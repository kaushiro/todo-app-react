export const setTasks = tasks => {
    return {
        type: "setTasks",
        tasks: tasks,
    };
};


export const addTask = (task) => {
    return {
        type: "addTask",
        task: task
        
    };
};

export const editTask = ( task ) => {
    return {
        type: "editTask",
        task: task
    };
};
