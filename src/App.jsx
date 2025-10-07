import { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { getAllUsers, createUser } from './services/userService';
import './App.css'


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllUsers();
      setUsers(data);
    } 
    catch (err) {
      setError('Failed to fetch users. Please try again.');
      console.error('Error fetching users:', err);
    } 
    finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (firstName, lastName) => {
    setLoading(true);
    setError(null);

    try {
      await createUser(firstName, lastName);
      await fetchUsers(); // Refresh the user list
    } 
    catch (err) {
      setError('Failed to create user. Please try again.');
      console.error('Error creating user:', err);
    } 
    finally {
      setLoading(false);
    }
  };


  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Atom Technologies User Management</h1>
          <p>Add and manage user information</p>
        </header>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <UserForm onSubmit={handleSubmit} loading={loading} />

        <UserTable users={users} loading={loading} />
      </div>
    </div>
  )
}

export default App;
