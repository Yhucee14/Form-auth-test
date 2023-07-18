import { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="flex flex-col py-2">

      <form onSubmit={onSubmit} className="form flex flex-col py-2  bg-gray-500">

      <h1 className="flex justify-center text-[35px] text-bold text-white"> Login </h1>

      <div className="flex flex-col py-1 xx:w-[87%] xx:ml-[6%] sm:w-[70%] sm:ml-[14%]">
        <label className="py-3 text-bold text-white">Enter Your Email</label>
        <input placeholder="Email" type="email" ref={emailRef} className="px-3 py-2 border-1 border-slate-950 rounded-[20px]"/>
      </div>

      <div className="flex flex-col xx:w-[87%] xx:ml-[6%] sm:w-[70%] sm:ml-[14%]">
        <label className="py-3 text-bold text-white">Enter Your Password</label>
        <input placeholder="Password" type="password" ref={psdRef} className=" px-3 py-2 rounded-[20px] "/>
      </div>

      <div className="py-3 flex justify-center mt-3">
      <button type="submit" className="black_btn  w-full">Sign In</button>
      </div>
       

        <button onClick={forgotPasswordHandler} className="pt-3"> <p className="text-white">Forgot Password?</p></button>
       
      </form>
    </div>
  );
};

export default Signin;