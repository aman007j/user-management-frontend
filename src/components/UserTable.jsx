import './UserTable.css';

function UserTable({ users, loading }) {
  
  if (loading) {
    return (
      <div className="user-table-container">
        <h2>User List</h2>
        <div className="loading-message">Loading users...</div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="user-table-container">
        <h2>User List</h2>
        <div className="empty-message">
          No users found. Add your first user above!
        </div>
      </div>
    );
  }

  return (
    <div className="user-table-container">
      <h2>User List ({users.length})</h2>
      
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;