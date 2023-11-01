// // Login.js
// import React, { useState } from 'react';
// import { Box, Button, TextField } from '@mui/material';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username && password) {
//       onLogin(username);
//     }
//   };

//   return (
//     <Box>
//       <h1>Login</h1>
//       <TextField
//         label="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <TextField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <Button variant="contained" onClick={handleLogin}>
//         Login
//       </Button>
//     </Box>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

// const Login = ({ onLogin }) => {


//   const paperStyle = {
//     padding: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
// };


//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (username && password) {
//       onLogin(username);
//     }
//   };

//   return (
//     <Box sx={{
//       backgroundImage: 'url("your-background-image-url.jpg")',
//       backgroundColor: '#023159',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//   }}>
//       <Container component="main" maxWidth="xs">
//         <Grid container spacing={2}>
//         <Paper elevation={3} style={paperStyle}  >
//           <Grid item xs={12}>
//             <Typography variant="h4">Login</Typography>
//           </Grid>
//           <Grid item xs={12} >
//             <TextField
//               label="Username"
//               fullWidth
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </Grid>
    
//           <Grid item xs={12} >
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} >
//             <Button variant="contained" onClick={handleLogin}>
//               Login
//             </Button>
            
//           </Grid>
//           </Paper>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

const Login = ({ onLogin }) => {
  const paperStyle = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("your-background-image-url.jpg")',
        backgroundColor: '#023159',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Grid container spacing={2}>
          <Paper elevation={3} style={paperStyle}>
            <Grid item xs={12}>
              <Typography variant="h4">Login</Typography>
            </Grid>
            <Grid item xs={12}  mt={"5%"}>
              <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} mt={"5%"}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleLogin} style={{ marginTop: '10px' }}>
                Login
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
