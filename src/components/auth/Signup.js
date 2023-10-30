import React from "react";
import "./Signup.css";
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"
const Signup = () =>{

    const schema = yup.object().shape({
        name:yup.string().required("Name can't be blanck"),
        emailId:yup.string().email().required("Email can't be blanck"),
        password:yup.string().required("Password can't be blanck").max(10).min(5)
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver:yupResolver(schema)
    })

    const signupValidation = (data) => {
        console.log("signup Data",data)
    }

    return (
      <div className="login_form">
        <div className="">
          <h2>Signup</h2>
         
          <form onSubmit={handleSubmit(signupValidation)}>

          <div className="mb-3 mt-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="name"
               {...register("name")}
              />
            {errors.name && <span className="error"> {errors.name?.message}</span>}
            </div>

            <div className="mb-3 mt-3">
              <label htmlFor="emailId">Email:</label>
              <input
                type="email"
                className="form-control"
                id="emailId"
                placeholder="Enter email"
                name="emailId"
               {...register("emailId")}
              />
            {errors.emailId && <span className="error"> {errors.emailId?.message}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="password"
                {...register("password")}
              />
               {errors.password && <span className="error">{errors.password?.message}</span>}
            </div>
      
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default Signup
