import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { context } from "../ContextProvider/Provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { logInUser, googleLogIn } = useContext(context);
  const [logInerror, setLogInError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setLogInError("");
    logInUser(email, password)
      .then(() => {
        e.target.reset();
        toast("Successfully! Logged In! ");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => setLogInError(err.code));
  };

  const handleGoogleLog = () => {
    setLogInError("");
    googleLogIn()
      .then(() => {
        toast(" Successfully! Registered & Logged In!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setLogInError(error.code));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[#29465B]">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Login Here!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              {logInerror && (
                <p className="text-red-600 font-semibold">{logInerror}</p>
              )}
              <div className="form-control mt-2">
                <p className="mb-2">
                  New Here ? Please
                  <Link to={"/register"}>
                    <span className="link link-hover text-blue-600 font-bold">
                      {" "}
                      Register...
                    </span>
                  </Link>
                </p>
                <button className="btn btn-primary normal-case bg-[#29465B] border-none text-white hover:bg-slate-400 hover:text-black">
                  Log in
                </button>
              </div>
            </form>
            <button
              onClick={handleGoogleLog}
              className=" mb-2 mx-2 btn btn-outline normal-case text-[#29465B] border-none  hover:bg-slate-400 hover:text-black"
            >
              <FcGoogle></FcGoogle> Log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
