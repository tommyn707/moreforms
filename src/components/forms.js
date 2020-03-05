import React, { useState } from 'react';
const FormComponent = props => {
    const [ state, setState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false
    })
    const onChangeHandler = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    let message;
    if(state.firstName.length < 2) {
        message=<h1>first name must be 2 characters</h1>;
    }else{
        message=<h1>Good</h1>;
    }
    let lastnameerror;
    if(state.lastName.length < 2) {
        lastnameerror=<h1>last name must be 2 characters</h1>;
    }else{
        lastnameerror=<h1>Good</h1>;
    }
    let emailerror;
    if(state.email.length < 5) {
        emailerror=<h1>email must be 5 characters</h1>;
    }else{
        emailerror=<h1>Good</h1>;
    }
    let passerror;
    if(state.password.length < 8) {
        passerror=<h1>password must be 8 characters</h1>;
    }else{
        passerror=<h1>Good</h1>;
    }
    let passworderror;
    if(state.confirmPassword.length < 8) {
        passworderror=<h1>password must be 8 characters</h1>;
    }else{
        passworderror=<h1>Good</h1>;
    }
    
    const onSubmitHandler = event => {
        event.preventDefault();
        setState({
            ...state,
            submitted: true
        })
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <p>{message}</p>
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <p>{lastnameerror}</p>
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <p>{emailerror}</p>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <p>{passerror}</p>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <p>{passworderror}</p>
                <br/>
                <input type = "submit"/>        
            </form>
        </div>
    );
}
export default FormComponent;
