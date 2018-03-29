import React, { Component } from 'react';
import Task from './Task';

class EditForm extends Component {
	constructor(props) {
        super(props);

        this.state = {
            fields: props.fields.slice(),
        }
        this.change = this.change.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    
    change(e, i) {
        const fields = this.state.fields.slice();
        fields[i].value = e.target.value;
        this.setState({ fields: fields });
    }

  
    onKeyDown(e) {
      // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
      if (e.key === 'Enter') {
        e.preventDefault();
        
        const data = this.state.fields.reduce((data, { name, value }) => {
            data[name] = value;
            return data;
        }, {});
      }
    }

    render() {
        const { className, button } = this.props;

        return (
            <form onKeyDown = {this.onKeyDown} className={ "form" + (className ? " " + className : "") } >
                { this.state.fields.map(({ name, value }, i) => (
                    <Task
                        key={ i }
                        value={ value }
                        name={ name }
                        onChange={ e => this.change(e, i) }
                    />
                ))}
    
            </form>
        );
    }
}

export default EditForm;