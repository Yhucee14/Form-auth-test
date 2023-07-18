
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div className="text-white">
      <h1 className="py-2">User Information </h1>
      <h2 className="py-2">Name : {user.displayName}</h2>
      <h2 className="py-2">Email : {user.email}</h2>
      <button onClick={logoutUser} className="white_btn">Log out</button>
    </div>
  );
};

export default Dashboard;