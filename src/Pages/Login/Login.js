import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h2 className="text-4xl">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              className="input input-bordered w-full max-w-xs"
              type="text"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              className="input input-bordered w-full max-w-xs"
              type="password"
            />

            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-10/12"
            value="Login"
            type="submit"
          />
        </form>
        <p>
          new to doctor's portal{" "}
          <Link className="text-secondary" to="/signup">
            Create an account
          </Link>{" "}
        </p>
        <div className="divider w-10/12">or</div>
        <button className="btn btn-outline w-10/12">
          {" "}
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
