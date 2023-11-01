// import React from 'react'
// import Login from './Pages/Login'

// const Index = () => {
//   return (
//     <div>Index
//     <Login/>
//     </div>
//   )
// }

// export default Index
// cIndex.js
import React, { useState } from 'react';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
// import Login from './Login';
// import Dashboard from './Dashboard';

function Index() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div className="App">
      {loggedInUser ? (
        <Dashboard username={loggedInUser} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default Index;
