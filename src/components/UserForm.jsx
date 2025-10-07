import React, { useState } from 'react';
import './UserForm.css';

function UserForm({ onSubmit, loading }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [validationError, setValidationError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    
    if (!firstName.trim()) {
      setValidationError('First name is required');
      return;
    }

    if (!lastName.trim()) {
      setValidationError('Last name is required');
      return;
    }

    
    onSubmit(firstName.trim(), lastName.trim());

   
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="user-form-container">
      <h2>Add New User</h2>
      
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            disabled={loading}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            disabled={loading}
            className="form-input"
          />
        </div>

        {validationError && (
          <div className="validation-error">
            {validationError}
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="submit-button"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default UserForm;