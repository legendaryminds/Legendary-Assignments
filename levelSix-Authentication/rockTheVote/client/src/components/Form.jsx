import React, { useState } from 'react';

function Form(props) {

    const initState = { username: '', password: '' }
    
    const [formData, setFormData] = useState(initState)

    const { isMember, submit, errMsg } = props


    // const { isMember, submit, errMsg } = props

    // const [formData, setFormData] = useState({ username: '', password: '' }) // Declare formData state

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

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
