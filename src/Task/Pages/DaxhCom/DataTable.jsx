import React from 'react';
import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import Dashboard from '../Dashboard';

const sampleData = [
  { id: 1, name: 'Item 1', value: 25 },
  { id: 2, name: 'Item 2', value: 50 },
  { id: 3, name: 'Item 3', value: 75 },
  { id: 4, name: 'Item 4', value: 100 },
];

const DataTable = () => {
    return (
      <div>
      <Dashboard/>
        <Typography variant="h4" gutterBottom>
          Data
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
export default DataTable;




// // import React, { useState, useEffect } from 'react';
// // import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// // import data from "../../../data.json"
// // const DataTable = () => {
// //   const [jsonData, setJsonData] = useState([]); // State to store the JSON data

// //   // Fetch and set the JSON data from the file
// //   useEffect(() => {
// //     fetch('data.json')
// //       .then((response) => response.json())
// //       .then((data) => setJsonData(data));
// //   }, []);

// //   return (
// //     <div>
// //       <Typography variant="h4" gutterBottom>
// //         Data
// //       </Typography>
// //       <TableContainer component={Paper}>
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>ID</TableCell>
// //               <TableCell>Title</TableCell>
// //               <TableCell>Year</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {jsonData.map((row) => (
// //               <TableRow key={row.ID}>
// //                 <TableCell>{row.ID}</TableCell>
// //                 <TableCell>{row.Title}</TableCell>
// //                 <TableCell>{row.Year}</TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>
// //     </div>
// //   );
// // };

// // export default DataTable;


// import React, { useState, useEffect } from 'react';
// import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// import data from "../../../data.json"
// const DataTable = () => {
//   const [jsonData, setJsonData] = useState([]); // State to store the JSON data
//   const [error, setError] = useState(null);

//   // Fetch and set the JSON data from the file
//   useEffect(() => {
//     fetch('../../../data.json') // Replace with the correct path to your data.json file
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => setJsonData(data))
//       .catch((err) => setError(err));
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Data
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Title</TableCell>
//               <TableCell>Year</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {jsonData.map((row) => (
//               <TableRow key={row.ID}>
//                 <TableCell>{row.ID}</TableCell>
//                 <TableCell>{row.Title}</TableCell>
//                 <TableCell>{row.Year}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// // export default DataTable;
