import React from 'react';

const Form = ({ value, handleChange }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted:', event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    value={value.fullName}
                    onChange={handleChange}
                    placeholder="Full names"
                /><br/>
                <input
                    type="text"
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    placeholder="Email address"
                /><br/>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default Form;
