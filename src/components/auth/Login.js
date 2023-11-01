import React from "react";
import "./Login.css";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";

const Login = () =>{


    console.log("This is Login ")
    const schema = yup.object().shape({
        email:yup.string().email().required("Email can't be blanck"),
        pwd:yup.string().required("Password can't be blanck")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver:yupResolver(schema)
    })

    const loginValidation = (data) => {
        console.log("Tst",data)
       
    }

    return (
      <div className="login_form">
        <div className="">
          <h2>Login</h2>       
          <form onSubmit={handleSubmit(loginValidation)}>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
               {...register("email")}
              />
            {errors.email && <span className="error"> {errors.email?.message}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                {...register("pwd")}
              />
               {errors.pwd && <span className="error">{errors.pwd?.message}</span>}
            </div>
      
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <Link to="/signup" className="creeate-account">Create an account and register for free.</Link>
      </div>
    );
}

export default Login
