import React from 'react';

const inputStyle = {
	display: 'flex',
	justifyContent: 'center',
};


// a simple Input component
export default ({ name, value, onChange }) => (
    <div className="form-group" style={inputStyle}>
        <input id={ name } onChange={ onChange } value={ value } className="form-control"></input>


    </div>
);



