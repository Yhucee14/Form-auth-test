import { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex} className="flex justify-center text-white pt-2">
        {!index ? "New user? Click here " : "Already have an account?"}
      </p>
    </div>
  );
};

export default Auth;