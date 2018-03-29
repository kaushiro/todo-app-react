import React from "react";

import Form from "../Form";

// the fields the form should have
const fields = [
    { name: "task", value: "" },
];

// the add article component
const Add = ({ onSubmit }) => (
    <div>
        <h2>Add Task</h2>

        <Form className="panel-body" onSubmit={ onSubmit } fields={ fields } button="Add Task" />
    </div>
);

export default Add;
