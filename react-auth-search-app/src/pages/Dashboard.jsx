import { useAuth } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { dispatch, state } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {state.user.email}</h2>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
      <div style={{ marginTop: "20px" }}>
        <Link to="/countries">Go to Country List</Link>
      </div>
    </div>
  );
};

export default Dashboard;
