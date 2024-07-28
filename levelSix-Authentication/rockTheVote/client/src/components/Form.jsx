import React, { useState } from 'react';

function Form(props) {
    // Initial state for form data
    const initState = { username: '', password: '' }
    
    // State for form data
    const [formData, setFormData] = useState(initState)

    // Destructure props
    const { isMember, submit, errMsg } = props

    // Handle change in form inputs
    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Form Data Submitted: ", formData) // Log form data
        submit(formData)
    }

    return (
        <form name='auth-form' id='auth-form' onSubmit={handleSubmit}>
            <h2>Welcome to RTV!</h2>
            <input 
                name="username"
                placeholder='username'
                value={formData.username}
                onChange={handleChange}
            />
            <input 
                name="password"
                type="password"
                placeholder='password'
                value={formData.password}
                onChange={handleChange}
            />
            <button>{isMember ? "Login" : "Signup"}</button>
            <p style={{color: "red"}}>{ errMsg }</p>
        </form>
    );
}

export default Form;
