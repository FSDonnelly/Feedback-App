import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <div className="red-text" >
                {touched && error}
            </div>
            <input {...input} />
        </div>
    );
};