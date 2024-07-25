import React, { useState } from 'react';
import Form from './components/Form';

const App = () => {
    const [formValues, setFormValues] = useState({ fullName: '', email: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event)
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>react form</h1>
            <Form value={formValues} handleChange={handleChange} />
            <div>
                <h2>Form Data</h2>
                <p>Full Name: {formValues.fullName}</p>
                <p>Email: {formValues.email}</p>
            </div>
        </div>
    );
};

export default App;
