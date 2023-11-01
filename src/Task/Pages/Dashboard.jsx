// // Dashboard.js
// import React from 'react';
// import { AppBar, Tab, Tabs } from '@mui/material';
// import DrawerComp from './DaxhCom/Drawer';
// import { Link } from 'react-router-dom';

// const Dashboard = ({ username }) => {
//   const [selectedTab, setSelectedTab] = React.useState(0);

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   return (
//     <div>
//       <h1>Welcome, {username}!</h1>
//       <AppBar position="static" sx={{backgroundColor:"Gray"}}>
//       <DrawerComp/>
//         <Tabs value={selectedTab} onChange={handleTabChange} sx={{textAlign:"left"}}>
       
//           <Tab label={<Link to="/analytics">Analytics</Link>} />
//           <Tab label={<Link to="/datatable">DataTable</Link>} />
        
//         </Tabs>
//       </AppBar>
//       {/* <div hidden={selectedTab !== 0}>Analytics Content</div>
//       <div hidden={selectedTab !== 1}>Data Content</div> */}
//     </div>
//   );
// };

// export default Dashboard;

// Dashboard.js

import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import DrawerComp from './DaxhCom/Drawer';

const Dashboard = ({ username }) => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <AppBar position="static" sx={{ backgroundColor: 'Gray' }}>
      <DrawerComp/>
        <Tabs sx={{ textAlign: 'left', display:{xs:"none",sm:"block"} }}>
          <Tab
            label={
              <Link to="/analytics" style={{ textDecoration: 'none' }}>
                Analytics
              </Link>
            }
            sx={{
              '&:hover': {
                fontWeight: 'bold',
              },
              '&:visited': {
                color: 'red',
              },
            }}
            onClick={() => handleTabClick('/analytics')}
          />
          <Tab
            label={
              <Link to="/datatable" style={{ textDecoration: 'none' }}>
                DataTable
              </Link>
            }
            sx={{
              '&:hover': {
                fontWeight: 'bold',
              },
              '&:visited': {
                color: 'red',
              },
            }}
            onClick={() => handleTabClick('/datatable')}
          />
        </Tabs>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Dashboard;
