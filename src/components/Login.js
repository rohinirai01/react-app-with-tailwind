import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Registration from "./Registration";
import Shop from "./Shop";


function Login() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const users = useSelector(state => state.users);

    const login = () => {

        const payload = users.find(user => user.email === email && user.password === password)

        if (payload) {

            dispatch({
                type: 'LOGIN',
                payload
            });

            alert("Success !!");


        } else {

            alert('wrong credentials');


        }
    }


    return ( <
        div className = "grid grid-cols-1 my-0 mx-auto h-screen w-full" >
        <
        div className = "flex flex-col justify-center items-center h-full" >
        <
        form >
        <
        h2 className = "text-3xl text-gray-700 font-bold mb-1 text-center" > Sign in to your account < /h2> <
        h4 className = "mb-8 text-center text-gray-600 font-medium" >
        Or < span className = "text-violet-800 font-medium" > start your 14 - day free trial < /span> <
        /h4> <
        div className = "border-solid border-2 border-slate-300 divide-y rounded-md w-96" >
        <
        input type = "email"
        className = "w-full h-9 px-15"
        style = {
            { padding: '15px' } }
        placeholder = "Email address"
        value = { email }
        onChange = { e => setEmail(e.target.value) }
        /><br / >
        <
        input type = "password"
        className = "w-full h-9 p-15"
        style = {
            { padding: '15px' } }
        placeholder = "Password"
        value = { password }
        onChange = { e => setPassword(e.target.value) }
        /> <
        /div> <
        div className = "flex flex-row justify-between mt-6" >
        <
        p className = "font-medium text-gray-600" > < input type = "checkbox" / > Remember me < /p> <
        p className = "text-violet-800 font-medium" > Forgot your password ? < /p> <
        /div>

        {
            /* {
                       users.payload ? (
                          
                           <Link to="/shop">
                        <button className="text-center bg-indigo-700 w-full h-10 mt-10 rounded-md text-neutral-50" onClick={login}>Sign In</button>
                      </Link>
                         
                        ) : (
                         
                          <Link to="/">
                        <button className="text-center bg-indigo-700 w-full h-10 mt-10 rounded-md text-neutral-50" onClick={login}>Sign In</button>
                      </Link>
                          
                        )
                      } */
        }


        <
        Link to = "/shop" >
        <
        button className = "text-center bg-indigo-700 w-full h-10 mt-10 rounded-md text-neutral-50"
        onClick = { login } > Sign In < /button> <
        /Link> 

        <
        Link to = "/reg" >
        <
        button className = "text-center bg-indigo-700 w-full h-10 mt-4 rounded-md text-neutral-50" > Create Account < /button> <
        /Link>


        { /* <Link to="/reg" className="text-center bg-indigo-700 w-full h-10 mt-10 rounded-md text-neutral-50">Create Account</Link> */ } <
        /form> <
        /div> <
        /div>
    );
}

export default Login;