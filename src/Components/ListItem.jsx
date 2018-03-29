import React, {Component} from "react";
import Form from './Form';
const listItemStyle = {
	listStyleType: 'none',
	height: '20px',
	textDecoration: 'none',
	border: '1px solid black',
	padding: '20px',
	textAlign: 'center',
	color: 'red',
	fontSize: '18px',
	fontWeight: 'bold',
	width: '80%'
}


class ListItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			toEdit: false,
			value:''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	 onChange() {
        this.setState({ toEdit: true });
    }
    onSubmit(e) {
    	const { task } = this.props;
    	this.setState({value:e.targetValue})
		task.set("task", this.state.value);
		const data = this.state.fields.reduce((data, { value }) => {
            data[value] = value;
            return data;
        }, {});
		this.props.onSubmit(data);
    }

	render() {
		// const { onSubmit } = this.props;
		const { task } = this.props;
		const fields = [
		    { name: "task", value: task.get('task') },
		];
		
		return (
			<div className="form-group">
				{this.state.toEdit? 
					 <Form fields={fields} onSubmit={this.onSubmit} />:
					
			    <li 
				    className="list-group-item" 
				    style={listItemStyle} 
				    onClick={this.onChange}
				    
				>{ task.get("task") }</li>
				    
				}
		 	</div>
		);
	}
}

export default ListItem;
