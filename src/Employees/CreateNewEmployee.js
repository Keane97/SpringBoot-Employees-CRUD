import React from 'react'

import { useHistory } from 'react-router-dom';
import { useState, useRef } from 'react';
import './CreatenewEmployee.css'

function CreateNewEmployee() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        aboutMe: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    }

    const handleLastNameInputChange = (event) => {
        setValues({ ...values, lastName: event.target.value })
    }

    const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }

    const handleAboutMeInputChange = (event) => {
        setValues({ ...values, aboutMe: event.target.value })
    }

    const handleSubmit = (event) => {
        if (values.firstName && values.lastName && values.email && values.aboutMe) {
            setValid(true);
        }
        // event.preventDefault();
        setSubmitted(true);
    }

    const history = useHistory();

    const home = () => history.push('/Home');

    return (
        <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                {submitted && valid ? <div className="success-message">
                    Thank you for submitting this form
                </div> : null}
                <input
                    onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    id="first-name"
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                />
                {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null }
                <input
                    onChange={handleLastNameInputChange}
                    value={values.lastName}
                    id="last-name"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                />
                {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span>: null }
                <input
                    onChange={handleEmailInputChange}
                    value={values.firstName}
                    id="email"
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {submitted && !values.email ? <span id="email-error">Please enter an email address</span>: null }
                <textarea
                    onChange={handleAboutMeInputChange}
                    value={values.aboutMe}
                    id="about-me"
                    className="form-field"
                    type="text"
                    placeholder="About Me"
                    name="aboutMe"
                />
                {submitted && !values.aboutMe ? <span id="email-error">Please enter an about Me address</span>: null }
                <button className="form-field" type="submit">
                    Register
                </button>
                <button className="form-field" type="button-red" onClick={home}>
                    Cancel
                </button>
            </form>

        </div>


    )
}

export default CreateNewEmployee