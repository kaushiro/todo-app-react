import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import Form from './Form';
import ListItem from './ListItem';


const fields = [
    { name: "task", value: "" },
];

class Tasks extends Component {
	constructor(props) {
		super(props);
	}
    componentDidMount() {
        this.props.onLoad();
    }
    
    render() {
        const { tasks } = this.props;

        return (
            <div>
                <Form fields={fields} onSubmit={this.props.onSubmit} button="Submit"/>
                { tasks.count() ?
                    <ul className="list-group">
                        { tasks.map(task => (
		                    <ListItem
		                    key={ task.get("id") }
							task={ task } 
		                    /> 
                        ))}
                    </ul>
                    :
                    <p>No tasks found</p>
                }
            </div>
        );
    }    
};

export default Tasks;