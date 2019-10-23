import React from 'react';
import Form from '../../components/form';

import './contact.scss';

export default () => {

    const submitHandler = (data) => {
        console.log(data)
    }

    return(
        <div className="contact block">
            <Form
                submitHandler={submitHandler}
                inputs={[`name`, `email`, `subject`, `message`]} />
            <div className='image-wrapper'>
                <img src='' alt='Cool Stuff' />
            </div>
        </div>
    );
}