import React, { Component } from 'react';
import Task from './Task';

class Form extends Component {
	constructor(props) {
        super(props);

        this.state = {
            fields: props.fields.slice(),
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    change(e, i) {
        const fields = this.state.fields.slice();
        fields[i].value = e.target.value;
        this.setState({ fields: fields });
    }

    onSubmit(e) {
        e.preventDefault();

        const data = this.state.fields.reduce((data, { name, value }) => {
            data[name] = value;
            return data;
        }, {});

         this.props.onSubmit(data);
    }

    disabled() {
        return !this.state.fields.every(({ value }) => value);
    }

    render() {
        const { className, button } = this.props;

        return (
            <form onSubmit={ this.onSubmit } className={ "form" + (className ? " " + className : "") } >
                { this.state.fields.map(({ name, value }, i) => (
                    <Task
                        key={ i }
                        value={ value }
                        name={ name }
                        onChange={ e => this.change(e, i) }
                    />
                ))}
                <button disabled={ this.disabled() } className="btn btn-success">{ button }</button>
            </form>
        );
    }
}

export default Form;