import React, { useState, useContext } from 'react';
import Form from './Form';
import { UserContext } from '../context/UserProvider';

// Auth component for user authentication
function Auth() {
  // Get login, signup, errMsg, and resetAuthErr from UserContext
  const { login, signup, errMsg, resetAuthErr } = useContext(UserContext);

  // State to toggle between login and signup forms
  const [isMember, setIsMember] = useState(false);

  // Toggle form function to switch between login and signup forms
  const toggleForm = () => {
    setIsMember(!isMember);
    resetAuthErr();
  }

  return (
    <div id="auth-div">
      {isMember ? (
        <>
          <Form
            isMember={isMember}
            submit={login}
            errMsg={errMsg}
          />
          <button onClick={toggleForm}>Create an Account?</button>
        </>
      ) : (
        <>
          <Form
            isMember={isMember}
            submit={signup}
            errMsg={errMsg}
          />
          <button onClick={toggleForm}>Already a Member?</button>
        </>
      )}
    </div>
  );
}

export default Auth;
