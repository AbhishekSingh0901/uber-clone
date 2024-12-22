import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptainData } from "../context/captainContext";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCaptain } = useCaptainData();
  const navigate = useNavigate();
  const submitHandeler = async (e) => {
    const captainData = {
      email,
      password,
    };
    e.preventDefault();
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/v1/captains/login`,
      captainData,
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      setCaptain(response.data.user);
      navigate("/captains-home");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-5 flex flex-col h-screen justify-between">
      <div>
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          className="h-24 w-fit  mb-8"
        />
        <form onSubmit={submitHandeler}>
          <h3 className="text-xl font-medium mb-3">
            What&apos;s your email address ?
          </h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="emale@example.com"
            className="bg-neutral-100 outline-none w-full mb-3 p-3 rounded-xl "
          />
          <h3 className="text-xl font-medium mb-3">
            What&apos;s your Password ?
          </h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="password"
            className="bg-neutral-100 outline-none w-full mb-3 p-3 rounded-xl "
          />
          <button className="text-center text-lg bg-neutral-900 text-white rounded-xl p-3 w-full mb-3">
            Login
          </button>
        </form>
        <div className="flex justify-center gap-1 items-center mt-5 mb-8">
          <div className="border-b flex-1"></div>
          <div className="text-sm text-neutral-500">
            Join our fleet!{" "}
            <Link className="text-yellow-700" to={"/captain-signup"}>
              Create account
            </Link>
          </div>
          <div className="border-b flex-1 "></div>
        </div>
      </div>
      <div className="flex mb-10">
        <Link
          to={"/user-login"}
          className="bg-teal-400 text-center text-lg text-white rounded-xl p-3 w-full"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
