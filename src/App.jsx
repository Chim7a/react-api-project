import axios from "axios";
import "./App.css";
import UseList from "./components/UseList";
import { useEffect, useState } from "react";

function App() {
  // Store data
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  // Get data
  const getUserData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  // Render the data just once when mounted
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <section>
        <UseList users={users} />
      </section>
    </>
  );
}

export default App;
