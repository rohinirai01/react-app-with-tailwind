import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./Login";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const register = () => {

        dispatch({
            type: "REGISTER",
            payload: {
                id: new Date().getTime(),
                name,
                email,
                password,
            },
        });
    };

    return ( <
        div className = "flex flex-col justify-center items-center mt-20 gap-y-4" >
        <
        h2 className = "text-3xl text-gray-700 font-bold mb-1 text-center" > Registration Form < /h2> <
        form className = "flex flex-col gap-3 w-96" >

        <
        input type = "text"
        placeholder = "Name"
        className = "border-solid border-2 border-slate-300 rounded-md h-10"
        style = {
            { padding: '15px' } }
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        />{" "} <
        input type = "email"
        placeholder = "Email"
        className = "border-solid border-2 border-slate-300 rounded-md h-10"
        style = {
            { padding: '15px' } }
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        />{" "} <
        input type = "password"
        placeholder = "Password"
        className = "border-solid border-2 border-slate-300 rounded-md h-10"
        style = {
            { padding: '15px' } }
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        />{" "} <
        input type = "password"
        placeholder = "Confirm Password"
        className = "border-solid border-2 border-slate-300 rounded-md h-10"
        style = {
            { padding: '15px' } }
        value = { confirmPassword }
        onChange = {
            (e) => setConfirmPassword(e.target.value) }
        />{" "}

        <
        /form> <
        Link to = "/" >
        <
        input type = "button"
        className = "text-center bg-indigo-700 w-96 h-10 mt-5 rounded-md text-neutral-50"
        value = "Register"
        onClick = { register }
        /> <
        /Link> <
        /div>
    );
}

export default Registration;