import { useSelector } from "react-redux";

function Home() {
  const users = useSelector((state) => state.users);
  console.log("Users from Redux Store:", users);  // Check if this logs the data

  return (
    <div className='container'>
      <h2>Crud App with JSON Server</h2>
      <button className='btn btn-success my-3'>Create</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Display user data here */}
          {users && users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
