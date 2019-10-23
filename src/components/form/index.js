import React, { useState } from 'react';
import _ from 'lodash';
import './form.scss';

export default ({ submitHandler, inputs }) => {
    const [data, updateData] = useState({});
    const input_components = [];

    const changeHandler = (e) => {
        const {
            name,
            value
        } = e.target;

        const state = {
            ...data,
            [name]: value,
        };
        updateData(state);
    }

    const submit = (e) => {
        e.preventDefault();
        submitHandler(data);
    }

    _.each(inputs, name => {
        const input = <input key={name} onChange={changeHandler} type='text' placeholder={_.startCase(_.lowerCase(name))} name={_.lowerCase(name)} />;
        input_components.push(input);
    });

    return (
        <div className='form'>
            { input_components }
            <input type='submit' className='button' value='Submit' onClick={submit}/>
        </div>
    );
};